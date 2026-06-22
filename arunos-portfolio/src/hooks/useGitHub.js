import { useState, useEffect } from 'react';

export const useGitHub = (username) => {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fallback block if the username parameter hasn't been set yet
    if (!username || username === 'your-username') {
      setLoading(false);
      return;
    }

    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch Core Profile Metrics
        const profileResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!profileResponse.ok) {
          throw new Error(`Profile sync failed: ${profileResponse.status}`);
        }
        const profileData = await profileResponse.json();
        setProfile(profileData);

        // 2. Fetch Repositories (Sorted by latest push event, limited to 6 cards)
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );
        if (!reposResponse.ok) {
          throw new Error(`Repository sync failed: ${reposResponse.status}`);
        }
        const reposData = await reposResponse.json();
        setRepos(reposData);
        
        setError(null);
      } catch (err) {
        console.error("GitHub API Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, [username]);

  return { profile, repos, loading, error };
};