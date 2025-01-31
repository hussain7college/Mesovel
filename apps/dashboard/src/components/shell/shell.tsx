'use client';

import { HEADER_HEIGHT, NAVBAR_WIDTH } from '@/utils/constants';
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  AppShellNavbar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './header';
import { Navbar } from './navbar';

export function Shell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      padding={{ base: 'xs', md: 'md' }}
      header={{ height: HEADER_HEIGHT }}
      navbar={{
        breakpoint: 'sm',
        width: NAVBAR_WIDTH,
        collapsed: { mobile: !opened },
      }}
    >
      <AppShellHeader>
        <Header opened={opened} toggle={toggle} />
      </AppShellHeader>

      <AppShellNavbar>
        <Navbar />
      </AppShellNavbar>

      <AppShellMain>{children}</AppShellMain>
    </AppShell>
  );
}
