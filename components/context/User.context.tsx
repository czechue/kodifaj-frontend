import React, { createContext, PropsWithChildren, ReactElement, useContext } from 'react';
import { RawUserAuth0 } from '../../lib/models/user/user';
import { useFetchUser } from '../../lib/auth/user';

const UserStateContext = createContext<RawUserAuth0 | undefined>(undefined);

type UserProviderProps = PropsWithChildren<{}>;

function UserProvider({ children }: UserProviderProps): ReactElement {
  const { user } = useFetchUser();

  return <UserStateContext.Provider value={user}>{children}</UserStateContext.Provider>;
}

function useUserState(): RawUserAuth0 {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw Error('useUserState must be used within a UserProvider');
  }
  return context;
}

export { UserProvider, useUserState };
