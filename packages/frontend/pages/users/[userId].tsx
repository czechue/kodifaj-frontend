import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import UserComponent from '../../components/user/User';
import { Task } from '@kodifaj/common';
import { User } from '@kodifaj/common';
import UserDetailProvider from '../../components/context/UserDetailContext';

interface UserDetailsProps {
  user: User;
  errorCode?: number;
}

const UserDetails: NextPage<UserDetailsProps> = ({ user, errorCode }) => {
  return (
    <UserDetailProvider initUser={user}>
      <Layout title="User page" errorCode={errorCode}>
        <Header />
        {user && <UserComponent />}
      </Layout>
    </UserDetailProvider>
  );
};

interface Params extends ParsedUrlQuery {
  userId: string;
}

UserDetails.getInitialProps = async (ctx) => {
  const url = `${process.env.API_URL}/users/${ctx.query.userId}`;
  const cookie = String(ctx?.req?.headers.cookie);
  const res = await fetch(url, {
    credentials: 'include',
    ...(ctx.req && { headers: { cookie } }),
  });

  const user: User = await res.json();

  return {
    user,
  };
};

export default UserDetails;
