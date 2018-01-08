import fs from 'fs'
import path from 'path'
import ds from '@matthamlin/ds'
import { argv } from 'yargs'

const main = () => {
  const cwd = process.cwd()
  const config = argv.config
  if (config) {
    let c
    const rawConfig = require(path.join(cwd, config))
    if (typeof rawConfig === 'function') {
      c = rawConfig().ds
    } else {
      c = rawConfig.ds
    }
    const { output, numbers, colors, fonts, modularScale, breakpoints } = c
    if (!output || !numbers || !colors || !fonts || !modularScale || !breakpoints) {
      console.error(`
Error: Config file is lacking required entires for output, numbers, colors, fonts, breakpoints, and modularScale.
Update your config file with these paths and try again.
`)
      return
    } else {
      fs.writeFile(
        output,
        ds({
          fonts: require(path.join(cwd, fonts)),
          numbers: require(path.join(cwd, numbers)),
          colors: require(path.join(cwd, colors)),
          modularScale: require(path.join(cwd, modularScale)),
          breakpoints: require(path.join(cwd, breakpoints)),
        }),
        err => {
          if (err) {
            console.error(
              `An error occured when attempting to write to the output file. Here is the error from fs.writeFile: `,
              err,
            )
          }
        },
      )
    }
  } else {
    console.error(`
No config file provided, try running again with --config="path/to/your/config/file"
`)
  }
}

main()
