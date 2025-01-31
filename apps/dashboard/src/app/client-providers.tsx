'use client';

import '@/styles/globals.css';
import '@mantine/core/styles.layer.css';
import '@mantine/spotlight/styles.css';
import '@mantine/dates/styles.layer.css';
import '@mantine/charts/styles.layer.css';
import '@mantine/notifications/styles.layer.css';
import 'mantine-datatable/styles.layer.css';

import { DirectionProvider, MantineProvider } from '@mantine/core';
import { DatesProvider } from '@mantine/dates';
import { ModalsProvider } from '@mantine/modals';
import { Notifications } from '@mantine/notifications';
import { theme } from '@repo/theme/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function ClientProviders({
  initialDirection,
  children,
}: {
  initialDirection: 'ltr' | 'rtl';
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DirectionProvider initialDirection={initialDirection}>
        <MantineProvider theme={theme}>
          <DatesProvider
            settings={{
              weekendDays: [5],
              firstDayOfWeek: 6,
              consistentWeeks: true,
            }}
          >
            <ModalsProvider>
              {children}

              <Notifications />
            </ModalsProvider>
          </DatesProvider>
        </MantineProvider>
      </DirectionProvider>
    </QueryClientProvider>
  );
}
