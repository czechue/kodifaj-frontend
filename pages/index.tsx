import React from "react";
import { NextPage, GetStaticProps } from "next";
import fetch from 'node-fetch';
import Head from "next/head";

interface Project {
  id: string;
}

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => (
  <div>
    <Head>
      <title>Create Next App</title>
    </Head>
    <main>Home Ids:
      {projects.map(project => <div key={project.id}>{project.id}</div>)}
    </main>
  </div>
);

export const getStaticProps: GetStaticProps<HomeProps> = async context => {
  // Call an external API endpoint to get posts
  const res = await fetch("https://czechue.usermd.net/");
  const projects: Project[] = await res.json();

  return {
    props: {
      projects
    }
  };
};

export default Home;
