const BASE_URL = 'https://api.github.com';

export const githubService = {
  // Fetches public profile info (Bio, Followers, Public Repos count)
  getProfile: async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) throw new Error('Failed to fetch GitHub profile');
    return response.json();
  },

  // Fetches repositories sorted by recent updates
  getRepos: async (username) => {
    const response = await fetch(`${BASE_URL}/users/${username}/repos?sort=updated&per_page=6`);
    if (!response.ok) throw new Error('Failed to fetch GitHub repositories');
    return response.json();
  }
};