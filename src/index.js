import express from 'express';
import logging from './startup/logging';
import config from './startup/config';
import routes from './startup/routes';


const app = express();
logging();
config();

console.log('the secret message key: ', process.env.SECRET_MESSAGE);

routes(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`listening to port ${port}....`));

export default server;

// TO DO: uncomment logging unhandled rejection
