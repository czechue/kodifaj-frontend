import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../components/shared/layout/Layout';
import { Task } from '../models/task/task.types';
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

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(`http://localhost:3000/api/tasks`);
  const tasks: Task[] = await res.json();
  return {
    props: {
      tasks,
    },
  };
};

export default Home;
