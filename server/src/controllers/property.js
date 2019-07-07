import _ from 'lodash';
import { users } from '../models/user';
import { properties, validate } from '../models/property';
import { results, SUCCESS, ERROR } from '../helper/result';
import cloudinary from '../startup/cloudinary';


export const getAllProperties = (req, res) => {
  res.send('it is really working');
};

export const postProperty = async (req, res) => {
  if (req.files) {
    const file = req.files.photo;
    cloudinary.v2.uploader.upload(file.tempFilePath, (err, result) => {
      (result) ? console.log(result) : console.log('error during upload is : ', err);
    });
  }

  const { error } = validate(req);
  if (error) return res.status(400).send(results(ERROR, error.details[0].message));

  const property = _.pick(req.body, ['price', 'state', 'city', 'address', 'type', 'image_url']);
  property.id = properties.length + 1;
  property.owner = req.user.id;
  property.status = 'available';
  property.created_on = new Date().toLocaleString();

  properties.push(property);

  res.send(results(SUCCESS, property));
};
