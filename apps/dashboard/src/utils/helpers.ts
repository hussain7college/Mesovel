import { env } from '@/env';
import { PAGE_SIZE_OPTIONS } from '@repo/utils/constants';
import type { UseTRPCQueryResult } from '@trpc/react-query/shared';
import dayjs from 'dayjs';
import type { DataTableSortStatus } from 'mantine-datatable';
import type { Dispatch, SetStateAction } from 'react';

export function constructImageUrl(key: string) {
  return `${env.NEXT_PUBLIC_STORAGE_BASE_URL}/${key}`;
}

export function getTableProps({
  page,
  setPage,
  pageSize,
  setPageSize,
  query,
  sortStatus,
  setSortStatus,
}: {
  page: number;
  setPage: (page: number) => void;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  query: UseTRPCQueryResult<{ total: number; data: unknown[] }, unknown>;
  sortStatus?: DataTableSortStatus;
  setSortStatus?: Dispatch<SetStateAction<DataTableSortStatus>>;
}) {
  const base = {
    borderRadius: 'md',
    withRowBorders: true,
    withTableBorder: true,
    withColumnBorders: true,
    recordsPerPageOptions: PAGE_SIZE_OPTIONS,

    page: page,
    onPageChange: setPage,

    recordsPerPage: pageSize,
    onRecordsPerPageChange: setPageSize,

    totalRecords: query.data?.total ?? 0,
    fetching: query.isLoading,
    minHeight: query.data?.data.length ? undefined : 200,
  };

  if (sortStatus && setSortStatus) {
    return {
      ...base,
      sortStatus,
      onSortStatusChange: setSortStatus,
    };
  }

  return base;
}

export function groupDatesByMonth(dates: { createdAt: Date }[], count = 12) {
  const data: { [month: string]: number } = {};

  for (let i = 0; i < count; i++) {
    const month = dayjs().subtract(i, 'month').format('YYYY-MM');
    data[month] = 0;
  }

  for (const { createdAt } of dates) {
    const date = dayjs(createdAt);
    const month = date.format('YYYY-MM');

    if (data[month] !== undefined) {
      data[month]++;
    }
  }

  return Object.entries(data)
    .map(([month, count]) => ({ month, count }))
    .reverse();
}
