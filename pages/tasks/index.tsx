import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../../components/shared/layout/Layout';
import { Task } from '../../models/task/task.types';
import Listing from '../../components/listing/Listing';
import Header from '../../components/header/Header';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => (
  <>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800"
      rel="stylesheet"
    />
    <Layout title="Home page">
      <Header />
      <Listing tasks={tasks} />
    </Layout>
  </>
);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(`http://${process.env.VERCEL_URL}/api/tasks`);
  const tasks: Task[] = await res.json();
  console.log(res);
  return {
    props: {
      tasks,
    },
  };
};

export default Home;
