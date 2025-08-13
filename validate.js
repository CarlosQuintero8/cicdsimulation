#!/usr/bin/env node

/**
 * Build validation script
 * Checks if all required files exist and have basic content
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
    'index.html',
    'styles.css',
    'script.js'
];

const validationRules = {
    'index.html': [
        '<!DOCTYPE html>',
        '<title>',
        '<script src="script.js">',
        '<link rel="stylesheet" href="styles.css">'
    ],
    'styles.css': [
        'body {',
        'button {'
    ],
    'script.js': [
        'addEventListener',
        'getElementById'
    ]
};

console.log('🔍 Starting build validation...\n');

let allValid = true;

// Check if required files exist
requiredFiles.forEach(file => {
    if (!fs.existsSync(file)) {
        console.error(`❌ Missing required file: ${file}`);
        allValid = false;
        return;
    }
    
    console.log(`✅ Found: ${file}`);
    
    // Check file content
    const content = fs.readFileSync(file, 'utf8');
    const rules = validationRules[file] || [];
    
    rules.forEach(rule => {
        if (!content.includes(rule)) {
            console.error(`❌ ${file}: Missing required content "${rule}"`);
            allValid = false;
        } else {
            console.log(`   ✓ Contains: ${rule}`);
        }
    });
});

// Check file sizes (basic sanity check)
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        const stats = fs.statSync(file);
        if (stats.size === 0) {
            console.error(`❌ ${file} is empty`);
            allValid = false;
        } else if (stats.size < 50) {
            console.warn(`⚠️  ${file} seems very small (${stats.size} bytes)`);
        }
    }
});

console.log('\n' + '='.repeat(50));

if (allValid) {
    console.log('🎉 Build validation passed! All files are ready for deployment.');
    process.exit(0);
} else {
    console.error('💥 Build validation failed! Please fix the issues above.');
    process.exit(1);
}