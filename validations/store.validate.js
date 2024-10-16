const joi = require("joi");

module.exports = {
  addStore: joi.object().keys({
    address: joi.string().min(2).max(30).required().messages({
      "any.required": "address is required!!",
    }),
    name: joi.string().min(2).max(30).required().messages({
      "any.required": "name is required!!",
    }),
    phone: joi
      .string()
      .regex(/^01\d{9}$/)
      .min(11)
      .messages({
        "any.required": "phone is required!!",
      }),
  }),
};
