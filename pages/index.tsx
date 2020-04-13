import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../components/shared/layout/Layout';
import { Task } from '../models/task.types';
import Listing from '../components/listing/Listing';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => (
  <Layout title="Home page">
    <Listing tasks={tasks} />
  </Layout>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const url = process.env.apiUrl as string;
  const res = await fetch(`${url}/tasks`);
  const tasks: Task[] = await res.json();
  return {
    props: {
      tasks,
    },
  };
};

export default Home;
