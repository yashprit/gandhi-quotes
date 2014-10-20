#!/usr/bin/env node
'use strict';
var GandhiSaid = require('../lib/gandhi.js');

if(process.argv.length > 2){
  if(process.argv[2] === "p" || process.argv[2] === "picture") {
    console.log(GandhiSaid.renderAscii());
  }
}

console.log(GandhiSaid.showQuotes());
