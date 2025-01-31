# Turborepo Starter

## Needed services

- Postgres: Provided by docker

## Best practices to follow

- All packages used by one app should be in the same workspace
- An app may not used packages from other apps

## Where are the secrets?

You need to put the env in dashboard/.env only in production, however in dev when you need to perform migrations you need to put the env in db/.env.example.
