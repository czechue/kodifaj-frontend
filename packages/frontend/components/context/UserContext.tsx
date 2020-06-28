import React, { ReactElement, useContext, useEffect, useState } from 'react';
import { User } from '@kodifaj/common';

export const UserContext = React.createContext<User | undefined>(undefined);

export default function UserProvider({ children }: UserProviderProps): JSX.Element {
  const [user, setUser] = useState<User | undefined>({
    githubId: '',
    login: '',
    photo: '',
  });

  useEffect(() => {
    // todo: to refactor
    fetch(`${process.env.API_URL}/current_user`, {
      credentials: 'include',
    })
      .then((data) => {
        return data.json();
      })
      .then((user: User) => {
        setUser(user);
      })
      .catch((e) => console.log(e));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export function useUser(): User {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw Error('useAppState must be used within a AppStateProvider');
  }
  return context;
}

interface UserProviderProps {
  children: ReactElement;
}
