import fs from 'fs';
import ds from '@matthamlin/ds';

const main = () => {
  fs.writeFile(
    process.argv[5],
    ds(
      {
        fonts: require(process.argv[2]),
        colors: require(process.argv[3]),
        numbers: require(process.argv[4])
      }
    ),
    err => {
      console.error(err)
    },
  )
}

main()
