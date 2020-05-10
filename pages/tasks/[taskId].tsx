import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Error from 'next/error';
import { Task } from '../../models/task/task.types';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';

interface TaskDetailsProps {
  task?: Task;
  errorCode?: number;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ errorCode, task }) => {
  return (
    <Layout title="Home page">
      <Header />
      {task && task.title}
      {errorCode && (
        <div className="-my-16">
          <Error statusCode={errorCode} />
        </div>
      )}
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
