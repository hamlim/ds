# DS

DS is a simple node script to build out a json config file for css-in-js design systems. It consumes three paths to:

* `colors.js`
* `fonts.js`
* `numbers.js`

and then generates a json file at the output location.

## Use:

```Javascript
// CLI

node require('./node_modules/@matthamlin/dist/cli') path/to/fonts.js path/to/colors.js path/to/numbers.js outputPath

// Use in a build script

import ds from '@matthamlin/ds';

const stringifiedJSON = ds({
  fonts: 'path/to/fonts.js',
  colors: 'path/to/colors.js',
  numbers: 'path/to/numbers.js'
});

// fs.writeFile('./out.json', stringifiedJSON);
// JSON.parse(stringifiedJSON);
```

### What does it look like?

To see an example of this in action, clone the repo, run `yarn` then `yarn make-example` and see `./example/out.json` file generated.

In this repo is a template inside `template.json` and a default config inside `default.json`.

### Prior Art:

* [design-system-utils](https://github.com/mrmartineau/design-system-utils)
