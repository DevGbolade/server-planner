const status = {
  success: 200,
  error: 500,
  notfound: 404,
  unauthorized: 401,
  conflict: 409,
  created: 201,
  bad: 400,
  nocontent: 204,
  unprocessable: 422,
};

const forgeResponse = (res, statusCode, message, data = null) => {
  const response = {
    status: statusCode > 200 ? "error" : "success",
    message,
  };

  response.data = data;

  return res.status(statusCode).json(response);
};

const successResponse = (res, statusCode, message, userData) =>
  forgeResponse(res, message, statusCode, userData);

const errorResponse = (res, statusCode, message) =>
  forgeResponse(res, statusCode, message);

const conflictResponse = (res, statusCode, message) =>
  forgeResponse(res, statusCode, message);

export default {
  status,
  successResponse,
  errorResponse,
  conflictResponse,
};
