// Test setup for JSDOM environment
const fs = require('fs');
const path = require('path');

// Load HTML file for testing
const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
document.documentElement.innerHTML = html;

// Load CSS (basic check)
const css = fs.readFileSync(path.resolve(__dirname, 'styles.css'), 'utf8');

// Load JavaScript
require('./script.js');