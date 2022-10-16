import React, { Component } from 'react';
import * as THREE from "three";

import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {OBJLoader} from 'three-obj-loader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
//import {GLTFModel} from '../free_ugandan_tails/scene.gltf'
class ModelTest extends Component {


    componentDidMount(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
        camera.position.set(-900,-200,-900);
        var renderer = new THREE.WebGLRenderer({antialias:true}); 
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.setClearColor("#263238");

        const light = new THREE.PointLight()
        light.position.set(2.5, 7.5, 15)
        scene.add(light)

        document.body.appendChild(renderer.domElement);



        let spehereMaterial = new THREE.MeshBasicMaterial(
            //{envMap:sphereCamera.renderTarget}
            {color:0x0000ff}
        );
        
        //let sphereGeo = new THREE.BoxGeometry(50,50,50);
        //let sphere = new THREE.Mesh(sphereGeo,spehereMaterial);
        //sphere.position.set(0,100,0);
      //  scene.add(sphere);


        var geometry = new THREE.BoxGeometry(1,1,1);
        var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

        camera.position.z = 200;
        //let box = new THREE.Mesh(geometry, material);
        //scene.add(box)

        var controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', renderer);

        controls.enableDamping = true;

        //controls.campingFactor = 0.25;

        controls.enableZoom = true;
        


/*         var loader = new GLTFLoader();

        loader.load('../free_ugandan_tails/scene.gltf', function(gltf){
            scene.add(gltf.scene);
        })
    */


/*         var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
        keyLight.position.set(-100, 0, 100);

        var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
        fillLight.position.set(100, 0, 100);

        var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
        backLight.position.set(100, 0, -100).normalize();

        scene.add(keyLight);
        scene.add(fillLight);
        scene.add(backLight);
 */






    


    animate();


    function animate() {
        renderer.render(scene,camera);
        //sphereCamera.updateCubeMap(renderer,scene);
       //  sphere.rotation.x += 0.1;
        //sphere.rotation.y += 0.1; 
        //controls.update();
        requestAnimationFrame(animate);
      }

    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ModelTest;