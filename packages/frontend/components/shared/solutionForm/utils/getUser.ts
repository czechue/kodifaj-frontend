import { User } from '@kodifaj/common';

export async function getUser(userId: string): Promise<User> {
  return await fetch(`${process.env.API_URL}/users/${userId}`)
    .then((res) => res.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}
