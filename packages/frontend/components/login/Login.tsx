import React from 'react';
import { FaGithub } from 'react-icons/fa';

export const Login: React.FC = () => {
  const githubUrl = `${process.env.AUTH_URL}`;

  return (
    <section className="login-wrapper flex flex-col -mt-16 items-center justify-center w-full max-w-md mx-auto">
      <h1 className="font-sans text-gray-900 text-4xl sm:text-5xl mb-10 font-bold tracking-tighter text-center">
        Zaloguj się
      </h1>
      <a
        href={githubUrl}
        className="bg-gray-900 hover:bg-gray-800 transition-colors duration-500 text-white h-12 px-4 w-11/12 sm:w-9/12 rounded-md inline-flex items-center justify-center relative"
      >
        <FaGithub className="mx-2 text-2xl absolute left-0 ml-4" />
        <span className="ml-2 text-xl text-center">Poprzez konto GitHub</span>
      </a>
    </section>
  );
};

export default Login;
