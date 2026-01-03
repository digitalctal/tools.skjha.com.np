
import React from 'react';
import { Tool, Category } from './types';

export const TOOLS: Tool[] = [
  // Nepal Special
  {
    id: 'nepali-patro',
    name: 'Nepali Patro',
    description: 'Bikram Sambat (BS) calendar with Nepali festivals, holidays, and date conversion.',
    category: Category.NEPAL,
    icon: <i className="fa-solid fa-calendar-days text-2xl"></i>,
    tags: ['nepali', 'calendar', 'patro', 'bs', 'festival']
  },
  {
    id: 'preeti-to-unicode',
    name: 'Preeti to Unicode',
    description: 'Convert traditional Nepali Preeti font text to web-friendly Unicode.',
    category: Category.NEPAL,
    icon: <i className="fa-solid fa-flag text-2xl"></i>,
    tags: ['nepali', 'font', 'preeti', 'unicode']
  },
  {
    id: 'unicode-to-preeti',
    name: 'Unicode to Preeti',
    description: 'Convert Nepali Unicode text back to Preeti font for offline typing.',
    category: Category.NEPAL,
    icon: <i className="fa-solid fa-language text-2xl"></i>,
    tags: ['nepali', 'font', 'unicode', 'preeti']
  },
  // Text Utilities
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count characters, words, lines, and paragraphs in real-time.',
    category: Category.TEXT,
    icon: <i className="fa-solid fa-align-left text-2xl"></i>,
    tags: ['text', 'count', 'words', 'writing']
  },
  {
    id: 'case-converter',
    name: 'Case Converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, or Sentence case.',
    category: Category.TEXT,
    icon: <i className="fa-solid fa-font text-2xl"></i>,
    tags: ['text', 'case', 'format']
  },
  {
    id: 'remove-duplicates',
    name: 'Remove Duplicate Lines',
    description: 'Quickly clean up lists by removing repeating lines of text.',
    category: Category.TEXT,
    icon: <i className="fa-solid fa-list-check text-2xl"></i>,
    tags: ['text', 'clean', 'list']
  },
  // Developer Tools
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Prettify, minify, and validate JSON data structure.',
    category: Category.DEV,
    icon: <i className="fa-solid fa-code text-2xl"></i>,
    tags: ['dev', 'json', 'format', 'code']
  },
  {
    id: 'base64-codec',
    name: 'Base64 Encoder/Decoder',
    description: 'Convert strings to Base64 format or decode them back.',
    category: Category.DEV,
    icon: <i className="fa-solid fa-hashtag text-2xl"></i>,
    tags: ['dev', 'encode', 'decode', 'base64']
  },
  // Calculators
  {
    id: 'bmi-calculator',
    name: 'BMI Calculator',
    description: 'Calculate Body Mass Index and understand your weight status.',
    category: Category.MATH,
    icon: <i className="fa-solid fa-weight-scale text-2xl"></i>,
    tags: ['health', 'math', 'bmi']
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate discounts, increases, and various percentage tasks.',
    category: Category.MATH,
    icon: <i className="fa-solid fa-percent text-2xl"></i>,
    tags: ['math', 'finance', 'percent']
  },
  // Converters
  {
    id: 'temp-converter',
    name: 'Temperature Converter',
    description: 'Instantly convert between Celsius, Fahrenheit, and Kelvin.',
    category: Category.UNIT,
    icon: <i className="fa-solid fa-temperature-high text-2xl"></i>,
    tags: ['math', 'temp', 'convert']
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between length, weight, and volume units.',
    category: Category.UNIT,
    icon: <i className="fa-solid fa-arrows-spin text-2xl"></i>,
    tags: ['math', 'unit', 'convert']
  },
  // Generators
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure, random passwords with customizable parameters.',
    category: Category.GEN,
    icon: <i className="fa-solid fa-lock text-2xl"></i>,
    tags: ['security', 'password', 'gen']
  }
];
