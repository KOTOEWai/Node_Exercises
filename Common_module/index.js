// Types of Modules

// 1. Built-in Modules
// 2. Local Modules
// 3. Third-Party Modules

// 1. Built-in Modules
const fs = require('fs');
const path = require('path');
const os = require('os');
//console.log('Built-in Modules:');
//console.log('File System Module:', fs);
//console.log('Path Module:', path);
//console.log('OS Module:', os);
console.log('-----------------------------------');

// 2. Local Modules
const localModule = require('./localModule');
//console.log('Local Module:', localModule);
console.log('Local Module Message:', localModule.message);
console.log('Local Module Add:', localModule.add(2, 3));
console.log('-----------------------------------');
// 3. Third-Party Modules
const express = require('express');
console.log('Third-Party Module:');
//console.log('Express Module:', express);
console.log('-----------------------------------');
// Note: Ensure you have installed the express module using npm before running this code.
// You can install it by running: npm install express
// End of index.js



const SuperHero = require('./MoCach');

const hero1 = new SuperHero('IronMan', 'Technology');
console.log(hero1.getDetails());
hero1.setPower('Advanced Technology');
console.log(`Updated Power: ${hero1.getPower()}`);
console.log('-----------------------------------');

const Batman = new SuperHero('Batman', 'Martial Arts');
console.log(Batman.getDetails());
Batman.setName('The Dark Knight');
console.log(`Updated Name: ${Batman.getName()}`);
console.log('-----------------------------------');

const math = require('./math');
const { add, subtract } = math;
console.log(`Addition: 5 + 3 = ${add(5, 3)}`);
console.log(`Subtraction: 5 - 3 = ${subtract(5, 3)}`);
console.log('-----------------------------------');
