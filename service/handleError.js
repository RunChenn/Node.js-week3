const handleError = (res, status, message) => {
  res.status(status).send({
    status: 'false',
    message,
  });
  res.end();
};
module.exports = handleError;
