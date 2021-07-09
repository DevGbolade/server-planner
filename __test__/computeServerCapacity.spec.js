import app from "../src/app";
import request from "supertest";
import { urlPrefix } from "../__mocks__/variables";
import {
  serverVmExists,
  serverExist,
  virtualMachinesExist,
  serverCpuExist,
  vmCpuExist,
  response,
  BODY,
  invalidVm,
  invalidServer,
  cpuInvalid,
} from "../__mocks__/mockValidate";

describe("Test to Compute Server Capacity to host different virtual Machines", () => {
  test("should return an error if server and virtual machines fields are missing.", async () => {
    const { body } = await request(app).post(urlPrefix).send(serverVmExists);
    expect(body.status).toBe("error");
    expect(body.message).toEqual([
      "'server' is required",
      "'virtualMachines' is required",
    ]);
    expect(body.data).toBe(null);
  });

  test("should return an error if Server field is missing from the payload.", async () => {
    const { body } = await request(app).post(urlPrefix).send(serverExist);
    expect(body.status).toBe("error");
    expect(body.message).toBe("'server' is required");
    expect(body.data).toBe(null);
  });

  test("should return an error if virtualMachines field is missing from the payload.", async () => {
    const { body } = await request(app)
      .post(urlPrefix)
      .send(virtualMachinesExist);
    expect(body.status).toBe("error");
    expect(body.message).toBe("'virtualMachines' is required");
    expect(body.data).toBe(null);
  });

  test("should return an error if server does not contain a required field.", async () => {
    const { body } = await request(app).post(urlPrefix).send(serverCpuExist);

    expect(body.status).toBe("error");
    expect(body.message).toBe("'server.CPU' is required");
    expect(body.data).toBe(null);
  });

  test("should return an error if CPU field is invalid", async () => {
    const { body } = await request(app).post(urlPrefix).send(cpuInvalid);

    expect(body.status).toBe("error");
    expect(body.message).toBe("'server.CPU' must be a number");
    expect(body.data).toBe(null);
  });

  test("should return an error if vm does not contain a required field.", async () => {
    const { body } = await request(app).post(urlPrefix).send(vmCpuExist);

    expect(body.status).toBe("error");
    expect(body.message).toBe("'virtualMachines[0].CPU' is required");
    expect(body.data).toBe(null);
  });
  test("should return an error if virtualMachnes is not an array.", async () => {
    const { body } = await request(app).post(urlPrefix).send(invalidVm);

    expect(body.status).toBe("error");
    expect(body.message).toBe("'virtualMachines' must be an array");
    expect(body.data).toBe(null);
  });

  test("should return an error if server is not an object.", async () => {
    const { body } = await request(app).post(urlPrefix).send(invalidServer);

    expect(body.status).toBe("error");
    expect(body.message).toBe("'server' must be of type object");
    expect(body.data).toBe(null);
  });
  /**
   * Success Behaviour
   */

  test("should return success message.", async () => {
    const { body } = await request(app).post(urlPrefix).send(BODY);
    expect(body).toEqual(response);
  });
});
