const autoBind = require("auto-bind");
const Joi = require("joi");

class JoiValidation {
  constructor() {
    autoBind(this);
  }

  checkValidation(schema, body) {
    // Perform the joi validation on given body against defined
    const validationResult = Joi.object(schema).validate(body);

    //  If any error found in request, send back the error with status code 500
    if (validationResult.error) throw validationResult.error;
  }

  registerValidation(body) {
    // Define validation schema for user registration.
    const schema = {
      name: Joi.string().max(50).required(),
      mobile: Joi.string().min(11).max(13).required(),
    };

    this.checkValidation(schema, body);
  }

  loginValidation(body) {
    // Define validation schema for user registration.
    const schema = {
      mobile: Joi.string().min(11).max(13).required(),
    };

    this.checkValidation(schema, body);
  }

  checkOTP(body) {
    // Define validation schema for user registration.
    const schema = {
      mobile: Joi.string().min(11).max(13).required(),
      code: Joi.string().min(4).max(4).required(),
    };

    this.checkValidation(schema, body);
  }
}

module.exports = new JoiValidation();