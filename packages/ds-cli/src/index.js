import fs from 'fs'
import path from 'path'
import ds from '@matthamlin/ds'

const main = () => {
  const cwd = process.cwd()
  fs.writeFile(
    process.argv[6],
    ds({
      fonts: require(path.join(cwd, process.argv[2])),
      colors: require(path.join(cwd, process.argv[3])),
      numbers: require(path.join(cwd, process.argv[4])),
      modularScale: require(path.join(cwd, process.argv[5])),
    }),
    err => {
      console.error(err)
    },
  )
}

main()
