#!/usr/bin/env node

const fs = require('fs');

const built = fs.readFileSync('built.txt').toString();
const now = (new Date()).toISOString();

console.log("Pipeline RUN")
console.log("Now:  ", now);
console.log("Built:", built);

process.exit(0);
