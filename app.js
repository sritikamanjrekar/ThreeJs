//import * as THREE from 'three'

//import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// const THREE = require('three');
// const GLTFLoader=require('three/addons/loaders/GLTFLoader.js');

import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load( 'clouds.glb', function ( gltf ) {

	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );