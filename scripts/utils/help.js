import chalk from'chalk'
import { description } from '../../package.json'

console.log([
  chalk.cyanBright.bold.underline('Description\n'),
  chalk.cyanBright(description)
].join('\n'))