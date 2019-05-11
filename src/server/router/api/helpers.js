function buildErrorResponse(error) {
  return {
    error,
    data: null,
    status: 'ERROR',
  };
}

function buildSuccessResponse(data) {
  return {
    data,
    error: null,
    status: 'OK',
  };
}

function errorHandler(err, res, req, next) {
  res.status(500).send(buildErrorResponse('Something went wrong. Try again later.'));
}

export { buildErrorResponse, buildSuccessResponse, errorHandler };
