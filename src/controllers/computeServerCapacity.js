import responses from '../utils/responses';
import { computeServerCapService } from '../services/computeServerCapacity';

const {
  successResponse,
  status: { success },
} = responses;
/**
 * @api {post} /compute-server-capacity
 * @apiName computeServerCapacity
 * @apiParam  {Object} {server} @server
 * @apiParam  [ArrayObject] [virtualMachines] @server
 * @apiSuccess (200) {Object} mixed `serverCapacityResult` object
 */

const computeServerCapacity = (req, res) => {
  const serverCapacity = computeServerCapService(req.body);
  successResponse(
    res,
    'Server capacity is successfully calculated.',
    success,
    serverCapacity
  );
};

export default computeServerCapacity;
