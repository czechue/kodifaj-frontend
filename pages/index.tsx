import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../components/shared/layout/Layout';
import { Task } from '../lib/models/task/task';
import Listing from '../components/listing/Listing';
import Header from '../components/header/Header';
import { ParsedUrlQuery } from 'querystring';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => (
  <Layout title="Home page">
    <Header />
    <a href="/api/login">Login</a>
    <Listing tasks={tasks} />
  </Layout>
);

interface Params extends ParsedUrlQuery {
  taskId: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps, Params> = async () => {
  if (typeof window === 'undefined') {
    const res = await fetch(`http://${process.env.VERCEL_URL}/api/tasks`);
    const tasks: Task[] = await res.json();
    return {
      props: {
        tasks,
      },
    };
  }
  return {
    props: {
      tasks: [],
    },
  };
};

export default Home;
