import { Task } from '@kodifaj/common';

export async function getSolutions(taskId: string): Promise<Partial<Task>> {
  return await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
