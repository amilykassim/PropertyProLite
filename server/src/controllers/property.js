import _ from 'lodash';
import { users } from '../models/user';
import { properties, validate } from '../models/property';
import { results, SUCCESS, ERROR } from '../helper/result';
import cloudinary from '../startup/cloudinary';



export const postProperty = async (req, res) => {
  if (req.files) {
    const file = req.files.photo;
    cloudinary.v2.uploader.upload(file.tempFilePath, (err, result) => {
      (result) ? console.log(result) : console.log('error during upload is : ', err);
    });
  }

  const { error } = validate(req);
  if (error) return res.status(400).send(results(ERROR, error.details[0].message));

  
};