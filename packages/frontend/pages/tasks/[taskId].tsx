import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { Task } from '@kodifaj/common';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';

interface TaskDetailsProps {
  task?: Task;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task }) => {
  return <Layout title="Home page">{task ? <TaskComponent task={task} /> : <Header />}</Layout>;
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

TaskDetails.getInitialProps = async (ctx) => {
  const res = await fetch(`${process.env.API_URL}/tasks/${ctx.query.taskId}`);
  const errorCode = res.ok ? false : res.status;

  const task: Task = await res.json();
  return {
    task,
  };
};

export default TaskDetails;
