import * as THREE from 'https://cdn.skypack.dev/three@0.127.0';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.127.0/examples/jsm/controls/OrbitControls.js';

let scene;
let camera;
let renderer;
const canvas = document.querySelector(".webgl")

scene = new THREE.Scene();

const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 12;
camera.position.y = 8;
camera.position.x = 7;
scene.add(camera);

renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const controls = new OrbitControls(camera, renderer.domElement);

const starGeometry = new THREE.SphereGeometry(80, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture('texture/galaxy.png'),
  side: THREE.BackSide
})
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 512; // default
pointLight.shadow.mapSize.height = 512; // default
scene.add(pointLight);

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.6 );
scene.add( directionalLight );

// START: Sun element
const sunGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const sunMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/sun_texture.jpg')
});
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sunMesh); 

const spriteMaterial = new THREE.SpriteMaterial({ 
  map: new THREE.ImageUtils.loadTexture( 'texture/glow.png' ), 
  useScreenCoordinates: false,
  color: 0xffffff, 
  transparent: true, 
  blending: THREE.AdditiveBlending
});
const sprite = new THREE.Sprite( spriteMaterial );
sprite.scale.set(2.2, 2.2, 1);
sunMesh.add(sprite);
// END: Sun element

// START: Mercury element
const mercuryGeometry = new THREE.SphereGeometry(0.08, 32, 32);
const mercuryMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/mercury_texture.jpg')
});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMesh.castShadow = true;
mercuryMesh.receiveShadow = true;
scene.add(mercuryMesh); 
// END: Mercury element

// START: Venus element
const venusGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const venusMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/venus_texture.jpg')
});
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusMesh.castShadow = true;
venusMesh.receiveShadow = true;
scene.add(venusMesh); 
// END: Venus element

// START: Earth element
const earthGeometry = new THREE.SphereGeometry(0.15, 32, 32);
const earthMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture('texture/earthmap1k.jpg'),
  bumpMap: THREE.ImageUtils.loadTexture('texture/earthbump.jpg'),
  bumpScale: 0.2
});
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMesh.castShadow = true;
earthMesh.receiveShadow = true;
scene.add(earthMesh);

const cloudGeometry = new THREE.SphereGeometry(0.17, 32, 32);
const cloudMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/earthCloud.png'),
  transparent: true
})
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMaterial);
scene.add(cloudMesh);
// END: Earth element

// START: Mars element
const marsGeometry = new THREE.SphereGeometry(0.13, 32, 32);
const marsMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/mars_texture.jpg')
});
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsMesh.castShadow = true;
marsMesh.receiveShadow = true;
scene.add(marsMesh); 
// END: Mars element

// START: Jupiter element
const jupiterGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const jupiterMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/jupiter_texture.jpg')
});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterMesh.castShadow = true;
jupiterMesh.receiveShadow = true;
scene.add(jupiterMesh); 
// END: Jupiter element

// START: Saturn element
const saturnGeometry = new THREE.SphereGeometry(0.26, 32, 32);
const saturnMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/saturn_texture.jpg')
});
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnMesh.castShadow = true;
saturnMesh.receiveShadow = true;
scene.add(saturnMesh); 
// END: Saturn element

// START: Uranus element
const uranusGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const uranusMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/uranus_texture.jpg')
});
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusMesh.castShadow = true;
uranusMesh.receiveShadow = true;
scene.add(uranusMesh); 
// END: Uranus element

// START: Neptune element
const neptuneGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const neptuneMaterial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture('texture/neptune_texture.jpg')
});
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneMesh.castShadow = true;
neptuneMesh.receiveShadow = true;
scene.add(neptuneMesh); 
// END: Neptune element

// generate orbits lines
mercuryMesh.orbitRadius = 2;
mercuryMesh.theta = 1;
mercuryMesh.orbitalPeriod = 2;

venusMesh.orbitRadius = 3;
venusMesh.theta = 1;
venusMesh.orbitalPeriod = 1.5;

earthMesh.orbitRadius = 4;
earthMesh.theta = 1;
earthMesh.orbitalPeriod = 1;

marsMesh.orbitRadius = 5;
marsMesh.theta = 1;
marsMesh.orbitalPeriod = 0.9;

jupiterMesh.orbitRadius = 6;
jupiterMesh.theta = 1;
jupiterMesh.orbitalPeriod = 0.7;

saturnMesh.orbitRadius = 7;
saturnMesh.theta = 1;
saturnMesh.orbitalPeriod = 0.63;

uranusMesh.orbitRadius = 8;
uranusMesh.theta = 1;
uranusMesh.orbitalPeriod = 0.57;

neptuneMesh.orbitRadius = 9;
neptuneMesh.theta = 1;
neptuneMesh.orbitalPeriod = 0.5;

const planets = [mercuryMesh, venusMesh, earthMesh, marsMesh, jupiterMesh, saturnMesh, uranusMesh, neptuneMesh];

for(let i=0; i < planets.length; i++) {
  const pts = new THREE.Path().absarc(0, 0, planets[i].orbitRadius, 0, Math.PI * 2).getPoints(90);
  const g = new THREE.BufferGeometry().setFromPoints(pts);
  g.rotateX(Math.PI * 0.5);
  const m = new THREE.LineBasicMaterial( { color: "#3D3D3D", transparent: false, opacity: 0.9 } );
  const orbit = new THREE.Line(g, m);
  scene.add(orbit)
}

var dTheta = 2 * Math.PI / 1000;

const animate = () => {
  requestAnimationFrame(animate);

  // orbits animations
  for(let i=0; i < planets.length; i++) {
    planets[i].position.x = planets[i].orbitRadius * Math.cos(planets[i].theta);
    planets[i].position.z = planets[i].orbitRadius * Math.sin(planets[i].theta);
    planets[i].theta += dTheta * planets[i].orbitalPeriod;
    planets[i].rotation.y -= 0.0165;
  }
  cloudMesh.position.x = earthMesh.orbitRadius * Math.cos(earthMesh.theta);
  cloudMesh.position.z = earthMesh.orbitRadius * Math.sin(earthMesh.theta);
  cloudMesh.rotation.y -= 0.002;

  starMesh.rotation.y -= 0.002;
  sunMesh.rotation.y -= 0.003;

  controls.update();
  render();
}

const render = () => {
  renderer.render(scene, camera);
}

animate();