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
  <div className="font-sans antialiased text-gray-900">
    <Head>
      <title>Create Next Appxxx</title>
    </Head>
    <header>Header {process.env.customKey}</header>
    <main className="leading-normal text-green-300">
      Home IDS:
      <div className="max-w-8xl mx-auto grid grid-cols-1 row-gap-16 px-4 py-4 sm:px-6 sm:py-12 lg:px-8 bg-blue-100">
        <div id="projects-listing">
          <div>
            <div className="sm:flex sm:items-baseline sm:justify-between">
              <h2 className="text-2xl leading-8 font-semibold tracking-tight font-display text-gray-900 sm:text-3xl sm:leading-9">
                Title
              </h2>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-1 row-gap-8 bg-orange-600">
            <div
              id="projects-listing-section"
              className="border-t border-gray-200 pt-8 grid grid-cols-1 row-gap-6 lg:grid-cols-4 lg:gap-5"
            >
              <div>
                <h3 className="text-lg leading-7 font-medium tracking-tight text-gray-900">Page</h3>
              </div>
              <div className="grid grid-cols-1 row-gap-8 sm:grid-cols-2 sm:col-gap-5 sm:row-gap-6 md:grid-cols-3 lg:col-span-3">
                {projects.map((project) => (
                  <div key={project.id}>{project.id}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        test
      </div>
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
