import * as React from 'react';
import { useAuth } from '@/hooks';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  const router = useRouter();

  async function hanleLoginClick() {
    try {
      await login();
    } catch (error) {
      console.log('failed to login', error);
    }
  }

  async function hanleGetProfileClick() {
    try {
      await profile();
    } catch (error) {
      console.log('failed to get profile', error);
    }
  }

  async function hanleLogoutClick() {
    try {
      await logout();
    } catch (error) {
      console.log('failed to logout', error);
    }
  }

  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={hanleLoginClick}>Login</button>
      <button onClick={hanleGetProfileClick}>Get profile</button>
      <button onClick={hanleLogoutClick}>Logout</button>
      <button onClick={() => router.push('/about')}>About</button>
    </div>
  );
}
