const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');


process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
    data = data.toString().trim().split(' ');
    const cmd = data[0]
    const arg = data[1]
    if (cmd === 'pwd') pwd();
    if (cmd === 'ls') ls();
    if (cmd === 'cat') cat(arg);
});