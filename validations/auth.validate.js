const joi = require("joi");
const passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

module.exports = {
  registerationSchema: joi.object().keys({
    name: joi.string().min(2).max(30).required().messages({
      "any.required": "name is required!!",
    }),
    email: joi.string().email().min(2).max(30).required().messages({
      "any.required": "email is required!!",
      "string.email": "invalid email!!",
    }),
    password: joi.string().regex(passwordExp).required().messages({
      "any.required": "password is required!!",
    }),
    address: joi.string().min(2).max(30).required(),
    nationalId: joi
      .number()
      .integer()
      .min(1000000000000)
      .max(99999999999999)
      .required()
      .messages({
        "any.required": "national id is required!!",
        "number.min": "number must be equal 14 number",
        "number.max": "number must be less than or equal to 16",
      }),
    phone: joi
      .string()
      .regex(/^01\d{9}$/)
      .min(11)
      .required()
      .messages({
        "any.required": "phone is required!!",
      }),
    isAdmin: joi.boolean().messages({
      any: "admin is required!!",
    }),
    store: joi.string().required().messages({
      "any.required": "store is required!!",
    }),
  }),
  loginSchema: joi.object().keys({
    email: joi.string().email().min(2).max(30).required().messages({
      "any.required": "email is required!!",
      "string.email": "invalid email!!",
    }),
    password: joi.string().required().messages({
      "any.required": "password is required!!",
    }),
  }),
  updateSchema: joi.object().keys({
    address: joi.string().min(2).max(30),
    phone: joi
      .string()
      .regex(/^01\d{9}$/)
      .min(11)
      .messages({
        "any.required": "phone is required!!",
      }),
    isAdmin: joi.boolean().messages({
      any: "admin is required!!",
    }),
  }),
};
