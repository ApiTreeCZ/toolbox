import { Command } from '@commander-js/extra-typings';

const cli = async () => {
  const program = new Command();
  program.name('apitree-cli');
  const commands = await import('./commands/index.js');
  for (const command of Object.values(commands)) {
    program.addCommand(command);
  }
  return program.parseAsync(process.argv);
};

await cli();
