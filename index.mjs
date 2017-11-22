import core from 'babel-core'
import fs from 'fs'
import pipeComposition from './babel-plugin-pipe-composition'

const examplePath = './example-2.mjs'
const code = core.transform(fs.readFileSync(examplePath), {
  plugins: [pipeComposition]
}).code
fs.writeFileSync('./output.mjs', code, 'utf8')