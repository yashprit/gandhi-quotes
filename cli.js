#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var GandhiSaid = require('./lib/gandhi.js');

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

console.log(GandhiSaid.showQuotes());
