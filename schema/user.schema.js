const Joi = require('@hapi/joi')

const userSchema = Joi.object().keys({
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().min(3).max(30).required(),
  email: Joi.string().min(5).max(255).required().email(),
  password: Joi.string().min(4).max(32).required(),
})

module.exports = {
  userSchema,
}
