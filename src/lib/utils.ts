import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import type { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'stable':
      return 'bg-green-500';
    case 'rc':
      return 'bg-yellow-500';
    case 'pre':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export const getStatusText = (status: string) => {
  switch (status) {
    case 'stable':
      return '穩定版';
    case 'rc':
      return '發布候選';
    case 'pre':
      return '預覽版';
    default:
      return status;
  }
};

export const formatNumber = (n: number) => {
  let f: number;
  let u = '';

  if (n >= 1_000) {
    f = (n / 1_000);
    u = 'K';
  }
  else if (n >= 1_000_000) {
    f = (n / 1_000_000);
    u = 'M';
  }
  else {
    f = n;
  }

  return ((f * 100) / 100).toString() + u;
};
