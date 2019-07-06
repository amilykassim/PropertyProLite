import Joi from 'joi';
import bcrypt from 'bcrypt';
import { users, generateAuthToken } from '../models/user';
import { results, SUCCESS, ERROR } from '../helper/result';


function validate(req) {
  const schema = {
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  };

  return Joi.validate(req.body, schema);
}

const signin = async (req, res) => {
  const { error } = validate(req);
  if (error) return res.status(400).send(results(ERROR, error.details[0].message));

};

export default signin;
