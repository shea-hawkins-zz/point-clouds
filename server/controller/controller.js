
module.exports = {
  pointCloud: {
    get: function(req, res, next) {
      console.log('processing!');
      next();
    }
  }
}
