const path = require('path');
const colors = require('colors/safe');
const fs = require('fs');
let appVersion = require('./package.json').version;

const versionJson = `{"version":"${appVersion}"}`;

const versionJsonFilePath = path.join(__dirname + '/version.json');

fs.writeFile(versionJsonFilePath, versionJson, { flat: 'w' }, function (err) {
  if (err) {
    return console.log(colors.red(err));
  }
  console.log(
    `${colors.green('Writing version json file to ')}${colors.yellow(versionJsonFilePath)}\n`
  );
});
