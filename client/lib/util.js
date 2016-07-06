import THREE from 'three';

var arrayToMesh = function(array) {
  return new Promise(function(resolve, reject) {
    var pointGeometry = new THREE.Geometry();
    for (var i = 0; i < array.length; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = array[i][0];
        vertex.y = array[i][1];
        vertex.z = array[i][2];
        pointGeometry.vertices.push(vertex);
    }
    var particles = new THREE.Points(pointGeometry);
    resolve(particles);
  });
};

export { arrayToMesh };
