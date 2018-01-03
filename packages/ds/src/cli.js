const fs = require('fs')
import ds from './index.js';
const main = () => {
  let outputPath = process.argv[5];

  fs.writeFile(
    outputPath,
    ds(
      {
        font: process.argv[2],
        color: process.argv[3],
        numbers: process.argv[4]
      }
    ),
    err => {
      console.error(err)
    },
  )
}

main()
