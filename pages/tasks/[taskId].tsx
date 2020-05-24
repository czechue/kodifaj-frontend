import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import { Task } from '../../models/task/task.types';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';

interface TaskDetailsProps {
  task?: Task;
  errorCode?: number;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task, errorCode }) => {
  return (
    <Layout title="Home page" errorCode={errorCode}>
      {task ? <TaskComponent task={task} /> : <Header />}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

export const getServerSideProps: GetServerSideProps<TaskDetailsProps, Params> = async ({
  params,
}) => {
  const res = await fetch(`${process.env.API_URL}/tasks/${params?.taskId}`);
  const errorCode = res.ok ? false : res.status;
  if (!errorCode) {
    const task: Task = await res.json();
    return {
      props: {
        task,
      },
    };
  } else
    return {
      props: {
        errorCode,
      },
    };
};

export default TaskDetails;
