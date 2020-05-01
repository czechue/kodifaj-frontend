import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import { Task } from '../../models/task/task.types';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';

interface TaskProps {
  task: Task;
}

const TaskDetails: NextPage<TaskProps> = ({ task }) => (
  <Layout title="Home page">
    <Header />
    {task.title}
  </Layout>
);

export const getServerSideProps: GetServerSideProps<TaskProps> = async ({ params }) => {
  console.log(params);
  const res = await fetch(`${process.env.WEB_URI}/api/tasks/${params && params.taskId}`);
  const task: Task = await res.json();
  return {
    props: {
      task,
    },
  };
};

export default TaskDetails;
