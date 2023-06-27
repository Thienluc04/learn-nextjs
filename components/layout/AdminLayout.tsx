import { LayoutProps } from '@/models/common';
import Link from 'next/link';
import * as React from 'react';
import { Auth } from '../common';
import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';

export interface AdminLayoutProps {}

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function hanleLogoutClick() {
    try {
      await logout();
      router.push('/login');
    } catch (error) {
      console.log('failed to logout', error);
    }
  }
  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <p>Profile: {JSON.stringify(profile)}</p>

      <button onClick={hanleLogoutClick}>Logout</button>

      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <div>{children}</div>
    </Auth>
  );
}
