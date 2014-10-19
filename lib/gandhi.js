'use strict';

function showQuotes() {
  var GandhiSaid = require('../data/gandhi.json');
  var quote = GandhiSaid[Math.floor(Math.random() * GandhiSaid.length)].data;
  return '"' + quote + '"' + ' -- Mahatma Gandhi.'
}

function renderAscii() {
    return require('../ascii').gandhi;
}

module.exports  = {
    renderAscii: renderAscii,
    showQuotes: showQuotes
}
