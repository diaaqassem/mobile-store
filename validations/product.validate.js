const joi = require("joi");

module.exports = {
  addProductValid: joi.object().keys({
    name: joi.string().min(2).max(30).required().messages({
      "any.required": "name is required!!",
    }),
    category: joi.string().min(2).max(30).required().messages({
      "any.required": "category is required!!",
    }),
    price: joi
      .number()
      .positive()
      .integer()
      .message(" must be a positive integer"),
  }),
};
