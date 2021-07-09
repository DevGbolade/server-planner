import { BODY } from "../src/models";

const removeProperty =
  (prop) =>
  ({ [prop]: _, ...rest }) =>
    rest;

const serverVmExists = {};
const serverExist = removeProperty("server")(BODY);
const vmCpuExist = {
  server: {
    CPU: 2,
    RAM: 32,
    HDD: 100,
  },
  virtualMachines: [
    { RAM: 16, HDD: 10 },
    { CPU: 1, RAM: 16, HDD: 10 },
  ],
};
const serverCpuExist = {
  server: {
    // CPU: 2,
    RAM: 32,
    HDD: 100,
  },
  virtualMachines: [
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 2, RAM: 32, HDD: 100 },
  ],
};

const cpuInvalid = {
  server: {
    CPU: "three",
    RAM: 32,
    HDD: 100,
  },
  virtualMachines: [
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 2, RAM: 32, HDD: 100 },
  ],
};

const invalidServer = {
  server: "kkkskks",
  virtualMachines: [
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 1, RAM: 16, HDD: 10 },
    { CPU: 2, RAM: 32, HDD: 100 },
  ],
};
const invalidVm = {
  server: {
    CPU: 2,
    RAM: 32,
    HDD: 100,
  },
  virtualMachines: {},
};
const virtualMachinesExist = removeProperty("virtualMachines")(BODY);
const response = {
  status: "success",
  message: "Server capacity is successfully calculated.",
  data: {
    serverCapacity: 2,
  },
};
module.exports = {
  invalidVm,
  serverVmExists,
  serverExist,
  virtualMachinesExist,
  serverCpuExist,
  vmCpuExist,
  response,
  BODY,
  invalidServer,
  cpuInvalid,
};
