'use client';
import { Stack } from '@mantine/core';
import { IconHome } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import { ShellLink } from './shell-link';

export function Navbar() {
  const t = useTranslations();

  return (
    <Stack gap={4} p="xs" h="100%">
      <ShellLink
        section="/"
        activeExact
        label={t('home')}
        icon={<IconHome size={18} />}
      />
    </Stack>
  );
}
