import { randomBytes } from 'node:crypto';
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { input, password } from '@inquirer/prompts';

// Project
const projectName = await input({
  message: 'project name',
  default: getRootDirName() || 'project',
  required: true,
});

// Auth
const rootUsername = await input({
  message: 'root username',
  default: 'root',
  required: true,
});
const rootPassword = await input({
  message: 'root password',
  default: 'root',
  required: true,
});
const authTokenExpiration = await input({
  message: 'auth token expiration',
  default: '1d',
});

// Database
const dbName = await input({
  message: 'database name',
  default: `${projectName}-db`,
  required: true,
});
const dbUser = await input({
  message: 'database user',
  default: 'postgres',
  required: true,
});
const dbPassword = await input({
  message: 'database password (random if empty)',
  default: 'postgres',
});
const dbDomain = await input({
  message: 'database domain',
  default: 'localhost',
  required: true,
});
const dbPort = await input({
  message: 'database port',
  default: '5432',
  required: true,
});

// Storage
const storageBucketName = await input({
  message: 'minio bucket name',
  default: `${projectName}-bucket`,
  required: true,
});
const storageRegion = await input({ message: 'storage region' });
const storageEndpoint = await input({ message: 'storage endpoint' });
const storageAccessKey = await input({ message: 'storage access key' });
const storageSecretKey = await password({ message: 'storage secret key' });

function searchEnvExampleFiles(
  dir: string,
  depth: number,
  maxDepth: number,
): string[] {
  if (depth > maxDepth) {
    return [];
  }

  const results: string[] = [];
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && entry === 'node_modules') {
      continue;
    }

    if (stat.isFile() && entry === '.env.example') {
      results.push(fullPath);
    } else if (stat.isDirectory()) {
      results.push(...searchEnvExampleFiles(fullPath, depth + 1, maxDepth));
    }
  }

  return results;
}

function generateSecretKey(): string {
  return randomBytes(16).toString('hex');
}

const secrets = [
  { old: 'PROJECT-NAME', new: projectName },
  { old: 'ROOT-USERNAME', new: rootUsername },
  { old: 'ROOT-PASSWORD', new: rootPassword },
  { old: 'AUTH-TOKEN-EXPIRATION', new: authTokenExpiration },
  { old: 'JWT-SECRET-KEY', new: generateSecretKey() },

  { old: 'POSTGRES-USER', new: dbUser },
  { old: 'POSTGRES-PASSWORD', new: dbPassword || generateSecretKey() },
  { old: 'POSTGRES-DB', new: dbName },
  { old: 'POSTGRES-DOMAIN', new: dbDomain },
  { old: 'POSTGRES-PORT', new: dbPort },

  { old: 'STORAGE-REGION', new: storageRegion },
  { old: 'STORAGE-ENDPOINT', new: storageEndpoint },
  { old: 'STORAGE-ACCESS-KEY', new: storageAccessKey },
  { old: 'STORAGE-SECRET-KEY', new: storageSecretKey },
  { old: 'STORAGE-BUCKET-NAME', new: storageBucketName },

  {
    old: 'STORAGE-BASE-URL',
    new: `${storageEndpoint}/${storageBucketName}`,
  },
];

async function copyEnvFile(path: string) {
  const srcFile = await Bun.file(path).text();

  let updatedContent = srcFile;

  for (const { old, new: newValue } of secrets) {
    const regex = new RegExp(old, 'g');
    updatedContent = updatedContent.replace(regex, newValue);
  }

  const dstFile = Bun.file(path.replace('.example', ''));
  await Bun.write(dstFile, updatedContent);
}

function getRootDirName() {
  // Get the absolute path of script.ts
  const scriptPath = fileURLToPath(import.meta.url);

  // Get the root directory name
  return path.basename(path.resolve(scriptPath, '../../'));
}

// Copying docker env
await copyEnvFile('.env.docker.example');

const exampleEnvFilesPaths = searchEnvExampleFiles('.', 0, 3);

for (const exampleEnvFilePath of exampleEnvFilesPaths) {
  await copyEnvFile(exampleEnvFilePath);
}

console.log('Environment variables have been reset');
