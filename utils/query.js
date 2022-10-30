export const objectToParamString = (obj) => {

  return Object.entries(obj)
    .reduce((params, [key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          params.append(key, v);
        });
      } else if (typeof value === 'object') {
        params.append(key, JSON.stringify(value));
      } else {
        params.append(key, value);
      }
      return params;
    }, new URLSearchParams())
    .toString();
};