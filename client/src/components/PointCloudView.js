var React = require('react');
var THREE = require('three');

class PointCloudView extends React.Component {
 componentDidMount() {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize( window.innerWidth * .8, window.innerHeight *.8);
   document.getElementById("threeWindow").appendChild( renderer.domElement );

   scene.add(this.props.pointCloud);

   // Connected position-by-position to other vec
   camera.position.x = -90;
   camera.position.y = 40;
   camera.position.z = 160; // camera is pointin galong the z axis
   var render = function () {
     camera.lookAt(new THREE.Vector3(-95, 35, 390));
     renderer.render(scene, camera);
     requestAnimationFrame( render );
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
