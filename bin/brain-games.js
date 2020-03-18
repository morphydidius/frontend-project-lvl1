#!/usr/bin/env node
import { getName } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getName();
console.log(`Hello, ${name}!`);
