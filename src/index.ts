'use strict'; 

import express from 'express';
import { Application, Request, Response } from 'express';
import bodyParser from 'body-parser'; 
import { expect } from 'chai'; 
import cors from 'cors'; 
import helmet from 'helmet'; 
import { config as configEnv } from 'dotenv'; 
configEnv();
import apiRoutes from './routes/api.js'; 
import fccTestingRoutes from './routes/fcctesting'; 
// import { run as runTests } from '../test-runner'; 
import TestEmitter from './testing/test-runner2';
const runner = new TestEmitter();
const runTests = runner.run;

// Establish connection to MongoDB with 
import { connectDB } from './models/index';

const app = express();

app.use(helmet());
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

app.use('/public', express.static(process.cwd() + '/public'));

app.use(cors({origin: '*'})); //For FCC testing purposes only

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

//Sample front-end
app.route('/b/:board/')
  .get(function (req : Request, res : Response) {
    res.sendFile(process.cwd() + '/src/views/board.html');
  });
app.route('/b/:board/:threadid')
  .get(function (req : Request, res : Response) {
    res.sendFile(process.cwd() + '/src/views/thread.html');
  });

//Index page (static HTML)
app.route('/')
  .get(function (req : Request, res : Response) {
    res.sendFile(process.cwd() + '/src/views/index.html');
  });

//For FCC testing purposes
fccTestingRoutes(app);

//Routing for API 
apiRoutes(app);

//Sample Front-end

    
//404 Not Found Middleware
app.use(function(req : Request, res : Response, next) {
  res.status(404)
    .type('text')
    .send(`Not found. If you're attempting to access a board, please try something like '/api/threads/{a-z}'.`);
});

//Start our server and tests!
connectDB().then(async () => {
  app.listen(process.env.PORT || 3000, function () {
    console.log("Listening on port " + process.env.PORT);
    if(process.env.NODE_ENV==='test') {
      console.log('Running Tests...');
      setTimeout(function () {
        try {
          runTests();
        } catch(e) {
          var error = e;
            console.log('Tests are not valid:');
            console.log(error);
        }
      }, 1500);
    }
  });
});

export default app; //for testing