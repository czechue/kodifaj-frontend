import React, { useEffect } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { Task } from '@kodifaj/common';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';

interface TaskDetailsProps {
  task?: Task;
}

const TaskDetails: NextPage<TaskDetailsProps> = (props) => {
  console.log('11', props);

  useEffect(() => {
    console.log('effect');
  }, [props]);

  return (
    <Layout title="Home page">
      {props.task ? <TaskComponent task={props.task} /> : <Header />}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

TaskDetails.getInitialProps = async (ctx) => {
  const url = `${process.env.API_URL}/tasks/${ctx.query.taskId}`;

  if (ctx) {
    console.log('a');

    const cookie = String(ctx?.req?.headers.cookie);
    const res = await fetch(url, {
      credentials: 'include',
      headers: { cookie },
    });

    const task: Task = await res.json();

    console.log('aa task', task);

    return {
      task,
    };
  }
  console.log('b');

  const res = await fetch(url, {
    credentials: 'include',
  });

  const task: Task = await res.json();

  console.log('bb', task);

  return {
    task,
  };
};

export default TaskDetails;
