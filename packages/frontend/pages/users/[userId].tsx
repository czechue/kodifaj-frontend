import React from 'react';
import { NextPage, GetServerSideProps } from 'next';
import Layout from '../../components/shared/layout/Layout';
import Header from '../../components/header/Header';
import { ParsedUrlQuery } from 'querystring';
import UserComponent from '../../components/user/User';
import { Task } from '@kodifaj/common';
import { User } from '@kodifaj/common';

interface UserDetailsProps {
  user?: User;
  errorCode?: number;
  tasks?: Task[];
}

const UserDetails: NextPage<UserDetailsProps> = ({ user, tasks, errorCode }) => {
  return (
    <Layout title="User page" errorCode={errorCode}>
      <Header />
      {user && (
        <UserComponent
          solutions={user._solutions}
          login={user.login}
          photo={user.photo}
          tasks={tasks}
        />
      )}
    </Layout>
  );
};

interface Params extends ParsedUrlQuery {
  userId: string;
}

// todo: Poprawić na odp. zapytanie z bazy
const filterTasks = (tasks: Task[], user: User): Task[] => {
  return tasks.filter((task) => {
    return user?._tasks?.includes(task._id);
  });
};

// todo: change it to getInitialProps
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
