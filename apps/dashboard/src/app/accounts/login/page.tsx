'use client';

import { setToken } from '@/server/actions/auth';
import { setLocale } from '@/server/actions/locale';
import { api } from '@/server/trpc/react';
import {
  ActionIcon,
  Box,
  Button,
  Center,
  FocusTrap,
  Menu,
  Paper,
  PasswordInput,
  SimpleGrid,
  Stack,
  TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconKey, IconLanguage, IconLogin, IconUser } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const t = useTranslations();

  const form = useForm({
    name: 'trpc-form',
    initialValues: {
      username: '',
      password: '',
    },
  });

  const loginMut = api.accounts.login.useMutation({
    onSuccess: async (v) => {
      await setToken(v);
      router.push('/');
    },
  });

  const handleSubmit = form.onSubmit(({ username, password }) => {
    loginMut.mutate({ username, password });
  });

  return (
    <SimpleGrid cols={2} spacing={0}>
      <Box h="100vh" w="100%" bg="red" />

      <Center h="100vh">
        <Stack>
          <Paper withBorder p="sm">
            <FocusTrap>
              <form onSubmit={handleSubmit}>
                <Stack w={500}>
                  <TextInput
                    required
                    label={t('username')}
                    leftSection={<IconUser />}
                    {...form.getInputProps('username')}
                  />

                  <PasswordInput
                    required
                    label={t('password')}
                    leftSection={<IconKey />}
                    {...form.getInputProps('password')}
                  />

                  <Button
                    type="submit"
                    leftSection={<IconLogin />}
                    loading={loginMut.isPending}
                  >
                    {t('login')}
                  </Button>
                </Stack>
              </form>
            </FocusTrap>
          </Paper>

          <div>
            <Menu>
              <Menu.Target>
                <ActionIcon color="gray" variant="subtle">
                  <IconLanguage />
                </ActionIcon>
              </Menu.Target>

              <Menu.Dropdown>
                <Menu.Item value="en" onClick={() => setLocale('en')}>
                  English
                </Menu.Item>

                <Menu.Item value="ar" onClick={() => setLocale('ar')}>
                  العربية
                </Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
        </Stack>
      </Center>
    </SimpleGrid>
  );
}
