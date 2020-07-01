import commander from 'commander';

export default function genDiff() {
  const { program } = commander;
  program
    .description('Compares two configuration files and shows a difference.')
    .version('0.0.1')
    .arguments('<filepath1> <filepath2>')
    .option('-f, --format [type]', 'output format')
    .parse(process.argv);
}
