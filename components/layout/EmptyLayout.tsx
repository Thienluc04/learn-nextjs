import { LayoutProps } from '@/models/common';
import * as React from 'react';

export interface EmptyLayoutProps {}

export default function EmptyLayout({ children }: LayoutProps) {
  return <>{children}</>;
}
