import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import { User } from '../../models/user/user.types';
import UserPage from '../../components/user/User';
import { Task } from '../../models/task/task.types';

interface UserDetailsProps {
  user?: User;
  errorCode?: number;
  tasks?: Task[];
}

const UserDetails: NextPage<UserDetailsProps> = ({ user, tasks, errorCode }) => {
  return (
    <Layout title="User page" errorCode={errorCode}>
      <Header />
      {user && <UserPage user={user} tasks={tasks} />}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  userId: string;
}

const filterTasks = (tasks: Task[], user: User): Task[] => {
  return tasks.filter((task) => user._tasks.includes(task._id));
};

export const getServerSideProps: GetServerSideProps<UserDetailsProps, Params> = async ({
  params,
}) => {
  const res = await fetch(`${process.env.API_URL}/users/${params?.userId}`);
  const res1 = await fetch(`${process.env.API_URL}/tasks`);

  const errorCode = res.ok ? false : res.status;
  if (!errorCode) {
    const user: User = await res.json();
    const tasks: Task[] = await res1.json();
    return {
      props: {
        user,
        tasks: await filterTasks(tasks, user),
      },
    };
  } else
    return {
      props: {
        errorCode,
      },
    };
};

export default UserDetails;
