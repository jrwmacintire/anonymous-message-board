import analyser from './assertion-analyser';
import { EventEmitter } from 'events'

import Mocha from 'mocha';
import fs from 'fs';
import path from 'path';
import { connect } from 'http2';

const mocha = new Mocha();
const testDir = './tests';

// Add each .js file to the mocha instance.
fs.readdirSync(testDir).filter(file => {
    return file.substr(-3) === '.js';
}).forEach(file => {
    mocha.addFile(
        path.join(testDir, file)
    );
});

class TestEmitter extends EventEmitter {
    constructor() {
        this.report = []
    }

    run = () => {
        // Run the tests...
        let tests = [];
        let context = '';
        let separator = ' ~> ';

        try {
            const runner = mocha.ui('tdd').run()
                .on('test end', test => {
                    // remove comments
                    let body = test.body.replace(/\/\/.*\n|\/\*.*\\/g, '');
                    // collapse spaces
                    body = body.replace(/\s+/g, '');
                    const obj = {
                        title: test.title,
                        context: context.slice(0, -separator.length),
                        state: test.state,
                        body: body,
                        assertions: analyser(body)
                    };
                    tests.push(obj);
                })
                .on('end', () => {
                    emitter.report = tests;
                    emitter.emit('done', tests)
                })
                .on('suite', (s) => {
                  context += (s.title + separator);
            
                })
                .on('suite end', (s) => {
                  context = context.slice(0, -(s.title.length + separator.length))
                });
        } catch(err) {
            throw(err);
        }
    }
}

export default TestEmitter;