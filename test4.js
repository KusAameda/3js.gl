let scene, camera, renderer, line, dot;

function init() {
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const radius = 1.5;
const widthSegments = 3;
const heightSegments = 2;
const SphereGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
const thresholdAngle = 2;
const edges = new THREE.EdgesGeometry(SphereGeometry, thresholdAngle);
const geometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);
const material = new THREE.PointsMaterial({
    color: 'white',
    sizeAttenuation: false,
    size: 4,
});
dot = new THREE.Points(geometry, material);
line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xfffff}));
dot.scale.set(3, 3, 3);
scene.add(line, dot);


camera.position.z = 7;
}

function animate() {
	requestAnimationFrame(animate);
	line.rotation.x += 0.015;
	line.rotation.y += 0.015;

    dot.rotation.x += -0.02;
    dot.rotation.y += -0.02;

    mesh.rotation.x += 0.006;
    mesh.rotation.z += 0.006;

	renderer.render( scene, camera );
}
            
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();