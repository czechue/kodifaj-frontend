import React, { useState } from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { Task } from '../../lib/models/task/Task';
import { ParsedUrlQuery } from 'querystring';
import TaskComponent from '../../components/task/Task';
import { Solution } from 'lib/models/solution/solution';

interface TaskDetailsProps {
  task: Task;
  errorCode?: number;
}

const TaskDetails: NextPage<TaskDetailsProps> = ({ task, errorCode }) => {
  const [currentTask, setCurrentTask] = useState(task);

  function updateSolutions(solutions: Solution[]): void {
    setCurrentTask({ ...currentTask, _solutions: solutions });
  }

  return (
    <Layout title="Home page" errorCode={errorCode}>
      {task ? <TaskComponent updateSolutions={updateSolutions} {...currentTask} /> : <Header />}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  taskId: string;
}

export const getServerSideProps: GetServerSideProps<any, Params> = async ({ params }) => {
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
