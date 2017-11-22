import babylon from 'babylon';
import babelGenerate from 'babel-generator';
import fs from 'fs'

const { CodeGenerator } = babelGenerate
const code = `console.log('hello')`
const ast = babylon.parse(code)
const generator = new CodeGenerator(ast)

console.log(generator.generate().code)
