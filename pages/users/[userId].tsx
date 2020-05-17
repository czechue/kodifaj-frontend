import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import fetch from 'node-fetch';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import { User as UserTypes } from '../../models/user/user.types';
import User from '../../components/user/User';
import { Task } from '../../models/task/task.types';

interface UserDetailsProps {
  user?: UserTypes;
  errorCode?: number;
  tasks?: Task[];
}

const UserDetails: NextPage<UserDetailsProps> = ({ user, tasks, errorCode }) => {
  return (
    <Layout title="User page" errorCode={errorCode}>
      <Header />
      {user && (
        <User solutions={user._solutions} login={user.login} photo={user.photo} tasks={tasks} />
      )}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  userId: string;
}

const filterTasks = (tasks: Task[], user: UserTypes): Task[] => {
  return tasks.filter((task) => user._tasks.includes(task._id));
};

export const getServerSideProps: GetServerSideProps<UserDetailsProps, Params> = async ({
  params,
}) => {
  const res = await fetch(`${process.env.API_URL}/users/${params?.userId}`);
  const res1 = await fetch(`${process.env.API_URL}/tasks`);

  const errorCode = res.ok ? false : res.status;
  if (!errorCode) {
    const user: UserTypes = await res.json();
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
