const fs = require('fs');

module.exports = function(arg){
    fs.readFile(arg, 'utf8', (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
        process.stdout.write('\nprompt > ');
      });
};