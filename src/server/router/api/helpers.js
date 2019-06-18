import fs from 'fs';

import { UPLOAD_PATH } from 'client/constants';

export function buildErrorResponse(error) {
  return {
    error,
    data: null,
    status: 'ERROR',
  };
}

export function buildSuccessResponse(data) {
  return {
    data,
    error: null,
    status: 'OK',
  };
}

export function errorHandler(err, res, req, next) {
  res.status(500).send(buildErrorResponse('Something went wrong. Try again later.'));
}

export function checkUploadPath(req, res, next) {
  fs.exists(`${UPLOAD_PATH}`, (exists) => {
    if (exists) next();
  });
}
