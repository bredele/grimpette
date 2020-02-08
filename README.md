# Grimpette

> [![Build Status](https://travis-ci.org/bredele/grimpette.svg?branch=master)](https://travis-ci.org/bredele/grimpette)
[![NPM](https://img.shields.io/npm/v/grimpette.svg)](https://www.npmjs.com/package/grimpette)
[![Downloads](https://img.shields.io/npm/dm/grimpette.svg)](http://npm-stat.com/charts.html?package=grimpette)

Lousy router without the complicated stuff.

## Usage

```js
const grimpette = require('grimpette')
const router = grimpette('/foo')

/* set url and go back up */
router('/foo/bar/beep/boop')
// => /foo/bar/beep/boop
router('/foo')
// => /foo/bar/beep

/* pause and resume */
router('/hello/world')
// => /hello/world
router('/foo')
// => /foo/bar/beep
```

## Installation

```shell
npm install grimpette --save
```

[![NPM](https://nodei.co/npm/grimpette.png)](https://nodei.co/npm/grimpette/)

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
