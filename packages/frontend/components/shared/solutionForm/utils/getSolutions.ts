import { Task, Solution } from '@kodifaj/common';

export async function getSolutions(taskId: string): Promise<Solution[] | undefined> {
  return await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((res) => res.solutions)
    .catch((error) => {
      console.error('Error:', error);
    });
}
