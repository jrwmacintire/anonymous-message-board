/*
*
*
*
*
*
*
*
*
*
*
*
*       DO NOT EDIT THIS FILE
*       For FCC testing purposes!
*
*
*
*
*
*
*
*
*
*
*
*/

'use strict';

import cors from 'cors';
import fs from 'fs';
// import runner from '../../test-runner';
import TestEmitter from '../testing/test-runner2';
import express from 'express';
const runner = new TestEmitter();

export default function (app: express.Application) {

  app.route('/_api/server.js')
    .get(function (req: express.Request, res: express.Response, next: Function) {
      console.log('requested');
      fs.readFile(__dirname + '/public/index.js', function (err, data) {
        if (err) return next(err);
        res.send(data.toString());
      });
    });
  app.route('/_api/routes/api.js')
    .get(function (req: express.Request, res: express.Response, next: Function) {
      console.log('requested');
      fs.readFile(__dirname + '/routes/api.js', function (err, data) {
        if (err) return next(err);
        res.type('txt').send(data.toString());
      });
    });
  app.route('/_api/controllers/convertHandler.js')
    .get(function (req: express.Request, res: express.Response, next: Function) {
      console.log('requested');
      fs.readFile(__dirname + '/controllers/convertHandler.js', function (err, data) {
        if (err) return next(err);
        res.type('txt').send(data.toString());
      });
    });

  var error;
  app.get('/_api/get-tests', cors(), function (req: express.Request, res: express.Response, next) {
    console.log(error);
    if (!error && process.env.NODE_ENV === 'test') return next();
    res.json({ status: 'unavailable' });
  },
    function (req: express.Request, res: express.Response, next: Function) {
      if (!runner.report) return next();
      res.json(testFilter(runner.report, req.query.type, req.query.n));
    },
    function (req: express.Request, res: express.Response) {
      runner.on('done', function (report) {
        process.nextTick(() => res.json(testFilter(runner.report, req.query.type, req.query.n)));
      });
    });
  app.get('/_api/app-info', function (req: express.Request, res: express.Response) {
    var hs = Object.keys(res.header)
      .filter(h => !h.match(/^access-control-\w+/));
    var hObj = {};
    hs.forEach(h => { hObj[h] = res.header[h] });
    delete res.header['strict-transport-security'];
    res.json({ headers: hObj });
  });

};

function testFilter(tests, type, n) {
  var out;
  switch (type) {
    case 'unit':
      out = tests.filter(t => t.context.match('Unit Tests'));
      break;
    case 'functional':
      out = tests.filter(t => t.context.match('Functional Tests') && !t.title.match('#example'));
      break;
    default:
      out = tests;
  }
  if (n !== undefined) {
    return out[n] || out;
  }
  return out;
}