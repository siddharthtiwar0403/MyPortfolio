export async function handler() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  const query = `
    query($username: String!) {
      user(login: $username) {
        name
        login
        avatarUrl
        bio
        repositories { totalCount }
        followers { totalCount }
        following { totalCount }
        starredRepositories { totalCount }
        contributionsCollection {
          contributionCalendar { totalContributions }
          totalCommitContributions
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: { username }
    })
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data.data.user),
  };
}
