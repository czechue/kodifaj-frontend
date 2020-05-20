import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import Layout from '../components/shared/layout/Layout';
import { Task } from '../lib/models/task/task';
import Listing from '../components/listing/Listing';
import Header from '../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import { useUserState } from './_context/User.context';

interface HomeProps {
  tasks: Task[];
}

const Home: NextPage<HomeProps> = ({ tasks }) => {
  return (
    <Layout title="Home page">
      <Listing tasks={tasks} />
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

export const getServerSideProps: GetServerSideProps<HomeProps, Params> = async () => {
  const res = await fetch(`http://${process.env.VERCEL_URL}/api/tasks`);
  const tasks: Task[] = await res.json();
  return {
    props: {
      tasks: tasks ? tasks : [],
    },
  };
};

export default Home;
