import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/shared/layout/Layout';
import { Task } from '@kodifaj/common';
import Listing from '../components/listing/Listing';
import Header from '../components/header/Header';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => (
  <Layout title="Home page">
    <Header />
    <Listing tasks={tasks} />
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const res = await fetch(`${process.env.API_URL}/tasks`, {
    credentials: 'include',
    ...(req && { headers: { cookie: String(req.headers.cookie) } }),
  });
  const tasks: Task[] = await res.json();
  return {
    tasks: tasks ? tasks : [],
  };
};

export default Home;
