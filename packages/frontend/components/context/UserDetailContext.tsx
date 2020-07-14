import React, { ReactElement, useState, useCallback } from 'react';
import { User } from '@kodifaj/common';

interface UserDetailProviderProps {
  children?: ReactElement;
  initUser: User;
}

type Dispatch = (value: Partial<User>) => void;

export const UserDetailContext = React.createContext<User | undefined>(undefined);
export const UserDetailDispatchContext = React.createContext<Dispatch | undefined>(undefined);

export function useUserDetailState() {
  const context = React.useContext(UserDetailContext);
  if (context === undefined) {
    throw new Error('useUserDetailState must be used within a UserDetailProvider');
  }
  return context;
}

export function useUserDetailDispatch() {
  const context = React.useContext(UserDetailDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDetailDispatch must be used within a UserDetailProvider');
  }
  return context;
}

export default function UserDetailProvider({
  children,
  initUser,
}: UserDetailProviderProps): ReactElement {
  const [user, setUser] = useState<User>(initUser);

  const handleSetUserState = useCallback(
    (current: Partial<User>): void => {
      setUser((prev) => ({
        ...prev,
        ...current,
      }));
    },
    [setUser],
  );

  return (
    <UserDetailContext.Provider value={user}>
      <UserDetailDispatchContext.Provider value={handleSetUserState}>
        {children}
      </UserDetailDispatchContext.Provider>
    </UserDetailContext.Provider>
  );
}
