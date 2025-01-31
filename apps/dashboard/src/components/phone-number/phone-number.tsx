import { Text } from '@mantine/core';
import { formatPhoneNumber } from '@repo/utils';
import cls from './styles.module.css';

export function PhoneNumber({ phone }: { phone: string }) {
  return <Text className={cls.root}>{formatPhoneNumber(phone)}</Text>;
}
