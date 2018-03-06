#!/usr/bin/env node

const fs = require('fs');

const now = (new Date()).toISOString();
fs.writeFileSync('built.txt', now);

console.log("Pipeline BUILD")
console.log("Now: ", now);

process.exit(0);
