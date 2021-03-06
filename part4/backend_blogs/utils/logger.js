const info = (...params) => {
  if (process.env.NODE_ENV !== 'tests') {
    console.log(...params);
  }
};

const error = (...params) => {
  console.error(...params);
};

module.exports = {
  info,
  error,
};
