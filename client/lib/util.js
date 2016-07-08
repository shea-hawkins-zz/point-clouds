import THREE from 'three';

var arrayToMesh = function(array, options = {colorVariation: 10}) {
  return new Promise(function(resolve, reject) {
    var pointGeometry = new THREE.Geometry();
    var colors = [];
    for (var i = 0; i < array.length; i++) {
        var vertex = new THREE.Vector3();
        vertex.x = array[i][0];
        vertex.y = array[i][1];
        vertex.z = array[i][2];
        pointGeometry.vertices.push(vertex);
        colors[i] = new THREE.Color( 0xffffff );
        // This option changes the impact of the temperature values
        // Higher -> More impact, lower -> less impack
        // TODO convert to a percentage value.
        colors[i].setHSL( (array[i][3] - options.colorVariation) / (25 - options.colorVariation), 1, 0.5 );
    }
    pointGeometry.colors = colors;
    var material = new THREE.PointsMaterial( { vertexColors: THREE.VertexColors } );
		material.color.setHSL( 1.0, 0.2, 0.7 );
    var particles = new THREE.Points(pointGeometry, material);
    resolve(particles);
  });
};

export { arrayToMesh };
