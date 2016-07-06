var React = require('react');
var THREE = require('three');

class PointCloudView extends React.Component {
 componentDidMount() {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

   var renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerWidth, window.innerHeight );
   document.getElementById("threeWindow").appendChild( renderer.domElement );
   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
   var cube = new THREE.Mesh( geometry, material );
   scene.add( cube );
   var pointGeometry = new THREE.Geometry();

   for (var i = 0; i < 50000; i++) {

       var vertex = new THREE.Vector3();
       vertex.x = Math.random() * 2000 - 1000;
       vertex.y = Math.random() * 2000 - 1000;
       vertex.z = Math.random() * 2000 - 1000;
       pointGeometry.vertices.push(vertex);
   }
   var vertex = new THREE.Vector3();
   vertex.x = 0;  // Left negative right positive
   vertex.y = 0;
   vertex.z = 10;
   pointGeometry.vertices.push(vertex);


   var lookAtVector = new THREE.Vector3();
   lookAtVector.x = 0;
   lookAtVector.y = 0;
   lookAtVector.z = 10;
   //-305.499 209.291 54.9303 26
   var particles = new THREE.Points(pointGeometry);

   scene.add(particles);

   camera.position.z = 5; // camera is pointin galong the z axis
   var render = function () {
     requestAnimationFrame( render );

     renderer.render(scene, camera);
   };

   render();
 }

 render() {
   return (
     <div>
       <div id="threeWindow" />
     </div>
   );
 }
};

module.exports = PointCloudView;

//module.exports = App;
