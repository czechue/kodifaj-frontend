import React, { useState } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { Task, Solution } from '@kodifaj/common';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';

interface TaskDetailsProps {
  task: Task;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task }) => {
  const [currentTask, setCurrentTask] = useState<Task>(task);

  function updateSolutions(solutions: Solution[]): void {
    setCurrentTask((prevState) => ({ ...prevState, solutions }));
  }

  return (
    <Layout title="Home page">
      {task ? <TaskComponent updateSolutions={updateSolutions} {...currentTask} /> : <Header />}
    </Layout>
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
