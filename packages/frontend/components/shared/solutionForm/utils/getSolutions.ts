import { Solution } from '@kodifaj/common';

export async function getSolutions(taskId: string): Promise<Solution[]> {
  return await fetch(`${process.env.API_URL}/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });
}
