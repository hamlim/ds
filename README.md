# DS

DS is a simple node script to build out a json config file for css-in-js design systems. It consumes three paths to:

* `colors.js`
* `fonts.js`
* `numbers.js`

and then generates a json string representation of the design system.

## Use:

```bash
# CLI
yarn ds-cli --config='./appconfig.json'
```

```Javascript
// Use in a build script

import ds from '@matthamlin/ds';

const stringifiedJSON = ds({
  fonts: require('path/to/fonts.js'),
  colors: require('path/to/colors.js'),
  numbers: require('path/to/numbers.js')
});

// fs.writeFile('./out.json', stringifiedJSON);
// JSON.parse(stringifiedJSON);
```

### What does it look like?

To see an example of this in action, clone the repo, cd to `packages/ds`, run `yarn` then `yarn make-example` and see `./example/out.json` file generated.


### Prior Art:

* [design-system-utils](https://github.com/mrmartineau/design-system-utils)
