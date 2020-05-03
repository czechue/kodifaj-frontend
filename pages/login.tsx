import React from 'react';
import Layout from '../components/shared/layout/Layout';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  return (
    <Layout title="Login page">
      <Header />
      <Login />
    </Layout>
  );
};

export default LoginPage;
