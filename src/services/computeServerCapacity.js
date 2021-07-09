export const computeServerCapService = (body) => {
  const { server, virtualMachines } = body;
  let { CPU, RAM, HDD } = server;

  let serverCapacity = 0;

  for (let i = 0; i < virtualMachines.length; i++) {
    const CPUSize = CPU - virtualMachines[i].CPU;
    const RAMSize = RAM - virtualMachines[i].RAM;
    const HDDSize = HDD - virtualMachines[i].HDD;

    if (CPUSize >= 0 && HDDSize >= 0 && RAMSize >= 0) {
      CPU = CPUSize;
      RAM = RAMSize;
      HDD = HDDSize;
      serverCapacity += 1;
    }
  }

  return { serverCapacity };
};
