import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { Task, Solution } from '@kodifaj/common';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';
import TaskProvider from '../../components/context/TaskDetailContext';

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task }) => {
  
  return (
    <TaskProvider initTask={task}>
      <Layout title="Home page">
        <TaskComponent />
      </Layout>
    </TaskProvider>
  );
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

TaskDetails.getInitialProps = async (ctx) => {
  const url = `${process.env.API_URL}/tasks/${ctx.query.taskId}`;
  const cookie = String(ctx?.req?.headers.cookie);
  const res = await fetch(url, {
    credentials: 'include',
    ...(ctx.req && { headers: { cookie } }),
  });

  const task: Task = await res.json();

  return {
    task,
  };
};

export default TaskDetails;
