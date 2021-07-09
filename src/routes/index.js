import express from 'express';
import computeServerCapacityControlller from '../controllers/computeServerCapacity';
import { validatorMiddleware } from '../middlewares/validator';
import { schema } from '../utils/schema';

const router = express.Router();

router.post(
  '/compute-server-capacity',
  validatorMiddleware(schema),
  computeServerCapacityControlller
);

export default router;
