import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Error from 'next/error';
import { Task } from '../../models/task/task.types';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { apiURL } from '../../lib/consts/apiUrl';

interface TaskProps {
  task?: Task;
  errorCode?: number;
}

const TaskDetails: NextPage<TaskProps> = ({ errorCode, task }) => {
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

export const getServerSideProps: GetServerSideProps<TaskProps> = async ({ params }) => {
  const res = await fetch(`${apiURL}/api/tasks/${params && params.taskid}`);
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
