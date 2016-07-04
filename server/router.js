var router = require('express').Router();
var controller = require('./controller/controller');

// When the router is large enough, graphql will be used for the data lists
// and a call to something like '/pointCloud:id' will stream the pointCloud
// information
router.get('/pointCloud', controller.pointCloud.get);

module.exports = router;
