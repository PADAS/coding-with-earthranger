const { ER_SITE } = process.env;

export const fetchEvents = async (access_token = null) => {
  if (!access_token) {
    throw new Error('a token is necessary to make this request');
  }
  
  const url = `${ER_SITE}/api/v1.0/activity/events`;

  return await fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'Content-Type': 'application/json',
    },
  })
  .then((response) =>
    response.json()
  )
}