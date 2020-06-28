import { FormValues } from '../SolutionForm';
import { User } from 'lib/models/user/user';

export async function addSolution(values: FormValues, taskId: string, user: User): Promise<void> {
  const data = {
    repo: values.solutionLinkInput,
    demo: values.liveLinkInput,
    comment: 'komentarz',
    phase: values.reviewCheckbox ? 'review' : 'done',
    technologies: values.technologiesSelect.map((item) => item.value),
    taskId: taskId,
    authorId: user._id,
  };

  return fetch('/api/solutions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log('Success:', res);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
