import dayjs from 'dayjs';
import parse from 'libphonenumber-js';

export function formatPhoneNumber(pn: string): string {
  const phoneNumber = parse(pn, 'IQ');

  if (!phoneNumber || !phoneNumber.isValid()) {
    return pn;
  }

  return phoneNumber.formatInternational();
}

export function formatPhoneNumberWA(pn: string): string {
  const phoneNumber = parse(pn, 'IQ');

  if (!phoneNumber || !phoneNumber.isValid()) {
    return '';
  }

  return phoneNumber.format('E.164').slice(1);
}

export function parsePaginationProps({
  page,
  pageSize,
}: {
  page?: number;
  pageSize?: number;
}) {
  if (typeof page === 'undefined' || typeof pageSize === 'undefined') {
    return { skip: undefined, take: undefined };
  }

  return {
    skip: (page - 1) * pageSize,
    take: pageSize,
  };
}

export function formatDate(date: Date): string {
  return dayjs(date).format('YYYY-MM-DD');
}

export function toCamelCase(str: string): string {
  return str
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (char, i) =>
      i === 0 ? char.toLowerCase() : char.toUpperCase(),
    );
}

export function timeStringToDate(timeString: string) {
  const [hours, minutes] = timeString.split(':').map(Number);

  return dayjs()
    .hour(hours || 0)
    .minute(minutes || 0)
    .second(0)
    .millisecond(0);
}
