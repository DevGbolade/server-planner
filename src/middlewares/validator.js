import Responses from '../utils/responses';

const {
  errorResponse,
  status: { unprocessable },
} = Responses;

// Joi validator options
const options = {
  errors: {
    wrap: {
      label: "'",
    },
  },
  abortEarly: false,
};
export const validatorMiddleware = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, options);
  if (!error) {
    return next();
  }
  const { details } = error;
  const message = details.map((el) => el.message).length <= 1
    ? details.map((el) => el.message).join(',')
    : details.map((el) => el.message);

  errorResponse(res, unprocessable, message);
};
