import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import { User } from '../../models/user/user.types';
import UserPage from '../../components/user/User';

interface UserDetailsProps {
  user?: User;
  errorCode?: number;
}

const UserDetails: NextPage<UserDetailsProps> = ({ user, errorCode }) => {
  return (
    <Layout title="User page" errorCode={errorCode}>
      <Header />
      {user && <UserPage user={user} />}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  userId: string;
}

export const getServerSideProps: GetServerSideProps<UserDetailsProps, Params> = async ({
  params,
}) => {
  const res = await fetch(`${process.env.API_URL}/users/${params?.userId}`);
  const errorCode = res.ok ? false : res.status;
  if (!errorCode) {
    const user: User = await res.json();
    return {
      props: {
        user,
      },
    };
  } else
    return {
      props: {
        errorCode,
      },
    };
};

export default UserDetails;
