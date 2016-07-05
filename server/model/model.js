var readline = require('readline');
var fs = require('fs');

module.exports = {
  loadPointCloud: function(path) {
    return new Promise(function(resolve, reject) {
      var pointCloud = [];
      var lineNum = 0;
      var cloudFile = readline.createInterface({
        input: fs.createReadStream(path),
        terminal: false
      });
      cloudFile.on('line', function(line) {
        if (lineNum % 1 === 0) {
          pointCloud.push(line.split(' ').map(Number));
        }
        lineNum++;
      });
      cloudFile.on('close', function() {
        resolve(pointCloud);
      });
    });
  }
};
