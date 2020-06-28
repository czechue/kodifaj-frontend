import { Solution } from 'lib/models/solution/solution';

export async function getSolutions(taskId: string): Promise<Solution[]> {
  return await fetch(`/api/tasks/${taskId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => data._solutions)
    .catch((error) => {
      console.error('Error:', error);
    });
}
