import { useState, useEffect } from 'react';
import { RawUserAuth0 } from '../models/user/user';

export async function fetchUser(cookie = ''): Promise<RawUserAuth0 | undefined> {
  if (typeof window !== 'undefined' && window.__user) {
    return window.__user;
  }

  const res = await fetch(
    '/api/auth/me',
    cookie
      ? {
          headers: {
            cookie,
          },
        }
      : {},
  );

  if (!res.ok) {
    delete window.__user;
    return undefined;
  }

  const json = await res.json();
  if (typeof window !== 'undefined') {
    window.__user = json;
  }
  return json;
}

export function useFetchUser(
  required = false,
): { user: RawUserAuth0 | undefined; loading: boolean } {
  const [loading, setLoading] = useState(() => !(typeof window !== 'undefined' && window.__user));
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    return window.__user || undefined;
  });

  useEffect(
    () => {
      if (!loading && user) {
        return;
      }
      setLoading(true);
      let isMounted = true;

      fetchUser().then((user) => {
        // Only set the user if the component is still mounted
        if (isMounted) {
          // When the user is not logged in but login is required
          if (required && !user) {
            window.location.href = '/api/auth/login';
            return;
          }
          setUser(user);
          setLoading(false);
        }
      });

      return () => {
        isMounted = false;
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return { user, loading };
}
