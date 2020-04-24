import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../../client/components/shared/layout/Layout';
import { Task } from '../../common/models/task.types';
import Listing from '../../client/components/listing/Listing';

interface HomeProps {
  tasks: Task[];
}

const apiUrl = process.env.apiUrl as string;

const Home: NextPage<HomeProps> = ({ tasks }) => {
  return (
    <Layout title="Home page">
      <a href="/auth/github">Login</a>
      <Listing tasks={tasks} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const res = await fetch(`${apiUrl}/api/tasks`);
  const tasks: Task[] = await res.json();
  return {
    props: {
      tasks,
    },
  };
};

export default Home;
