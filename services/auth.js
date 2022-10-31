const { ER_SITE, ER_USERNAME, ER_PASSWORD } = process.env;

export const fetchAuth = async () => {
  const formData = new FormData(); // eslint-disable-line

  formData.set('grant_type', 'password');
  formData.set('client_id', 'das_web_client');
  formData.set('username', ER_USERNAME);
  formData.set('password', ER_PASSWORD);

  const url = `${ER_SITE}/oauth2/token/`;

  return await fetch(url, {
    method: 'POST',
    body: formData,
  }).then((response) =>
    response.json()
  );
};