#!/usr/bin/env node

'use strict';
var args = require('minimist')(process.argv.slice(2))
var GandhiSaid = require('../lib/gandhi.js');

if (args.p) {
  console.log(GandhiSaid.renderAscii());
}

console.log(GandhiSaid.showQuotes());
