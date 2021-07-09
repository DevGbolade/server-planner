import Joi from 'joi';

export const schema = Joi.object({
  server: Joi.object({
    CPU: Joi.number().required(),
    RAM: Joi.number().required(),
    HDD: Joi.number().required(),
  }).required(),
  virtualMachines: Joi.array()
    .items(
      Joi.object({
        CPU: Joi.number().required(),
        RAM: Joi.number().required(),
        HDD: Joi.number().required(),
      }).required()
    )
    .required(),
}).required();
