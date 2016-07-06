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

   scene.add(this.props.pointCloud);

   camera.position.z = 307; // camera is pointin galong the z axis
   camera.position.x = -253;
   camera.position.y = 48;
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
