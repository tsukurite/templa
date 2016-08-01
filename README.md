# templa

[![Build Status](https://travis-ci.org/tsukurite/templa.svg?branch=master)](https://travis-ci.org/tsukurite/templa)

plugin based generator

## Installation

```sh
$ npm install tsukurite/templa
```

## Functions

### execute(configs[ ,dir])

- `configs`
  - `Object[]` - configs for template plugins
- `dir`
  - `String` - change require directory
- `return`
  - `String[]` - template plugin values

### generate(configs[, dir])

- `configs`
  - `Object[]` - configs for template plugins
- `dir`
  - `String` - change require directory
- `return`
  - `String` - template plugin value

## Test

```sh
$ npm install
$ npm run build
$ npm test
```

## License

The MIT license. Please see LICENSE file.
