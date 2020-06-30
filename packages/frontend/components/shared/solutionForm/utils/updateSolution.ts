import { FormValues } from '../SolutionForm';

export async function updateSolution(values: FormValues, solutionId: string): Promise<void> {
  const data = {
    repo: values.solutionLinkInput,
    demo: values.liveLinkInput,
    comment: 'komentarz',
    phase: values.reviewCheckbox ? 'review' : 'done',
    technologies: values.technologiesSelect.map((item) => item.value),
  };

  return fetch(`${process.env.API_URL}/solutions/${solutionId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log('Success:', res);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
