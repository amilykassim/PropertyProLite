import _ from 'lodash';
import { users } from '../models/user';
import { properties, validate } from '../models/property';
import { results, SUCCESS, ERROR } from '../helper/result';
import cloudinary from '../startup/cloudinary';



export const postProperty = async (req, res) => {
  

  const { error } = validate(req);
  if (error) return res.status(400).send(results(ERROR, error.details[0].message));

  
};
