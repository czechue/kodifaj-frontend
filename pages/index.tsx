import React from 'react';
import { NextPage, GetStaticProps } from 'next';
import fetch from 'node-fetch';
import Head from 'next/head';

interface Project {
  id: string;
}

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => (
  <div>
    <Head>
      <title>Create Next Appxxx</title>
    </Head>
    <header>Header {process.env.customKey}</header>
    <main className="leading-normal text-green-300">
      Home IDS:
      {projects.map((project) => (
        <div key={project.id}>{project.id}</div>
      ))}
    </main>
  </div>
);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const url = process.env.apiUrl as string;
  const res = await fetch(url);
  const projects: Project[] = await res.json();
  return {
    props: {
      projects,
    },
  };
};

export default Home;
