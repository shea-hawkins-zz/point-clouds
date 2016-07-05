var model = require('../model/model');
var path = require('path');

module.exports = {
  pointCloud: {
    get: function(req, res, next) {
      model.loadPointCloud(path.join(__dirname, '../assets/scans/scan000.3d'))
        .then(function(pointCloud) {
          console.log('cloud Complete');
          res.end(JSON.stringify(pointCloud));
          next();
        }).catch(function(err) {
          console.log(err);
        });
    }
  }
}
