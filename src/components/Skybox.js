import React, { Component } from 'react';
import * as THREE from "three";
import ReactDOM from "react-dom";
import { JoystickControls } from 'three-joystick';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";



/* import back from '../office/pz.png'
import up from '../office/py.png'
import rt from '../office/px.png'
import dn from '../office/ny.png'
import lf from '../office/nx.png'
import ft from '../office/nz.png' */

/* import back from '../arid_bk.jpg'
import up from '../arid_up.jpg'
import dn from '../arid_dn.jpg'
import lf from '../arid_lf.jpg'
import rt from '../arid_rt.jpg'
import ft from '../arid_ft.jpg' */

import back from '../ForbiddenCity/posz.jpg'
/* import up from '../ForbiddenCity/posy.jpg' */
import up from '../ForbiddenCity/viktor.jpg'
import rt from '../ForbiddenCity/posx.jpg'
import dn from '../ForbiddenCity/negy.jpg'
import lf from '../ForbiddenCity/negx.jpg'
import ft from '../ForbiddenCity/negz.jpg'



import { findByTitle } from '@testing-library/react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import monkey from "../models1/monkey.obj"
import monkey2 from "../models1/untitled.obj"
import house from "../models1/finish.obj"
import table from "../models1/table.obj"

import Stats from 'three/examples/jsm/libs/stats.module'


class Skybox extends Component {


    componentDidMount(){
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,45,30000);
        camera.position.set(-900,-200,-900);
        var renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);

 
     /*    const light = new THREE.PointLight()
        light.position.set(2.5, 7.5, -15)
        scene.add(light) */

        const light = new THREE.AmbientLight( 0x404040); // soft white light
        light.intensity=10;
        scene.add( light );

    

       //   joystickControls.addEventListener('change',renderer)

        var controls = new OrbitControls(camera, renderer.domElement);
        controls.addEventListener('change', renderer);
        controls.minDistance = 200;
        controls.maxDistance = 5000;
        controls.enableZoom = true;
        
        let materialArray = [];
        let texture_ft = new THREE.TextureLoader().load( ft);
        let texture_bk = new THREE.TextureLoader().load( back);
        let texture_up = new THREE.TextureLoader().load( up);
        let texture_dn = new THREE.TextureLoader().load( dn);
        let texture_rt = new THREE.TextureLoader().load( rt);
        let texture_lf = new THREE.TextureLoader().load( lf);
          
          
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
        materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));



   
        for (let i = 0; i < 6; i++)
           materialArray[i].side = THREE.BackSide;
        let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
        let skybox = new THREE.Mesh( skyboxGeo, materialArray );
        scene.add( skybox );  

/* 
        let sphereCamera = new THREE.CubeCamera(1,1000,50);
        sphereCamera.position.set(0,100,0);
        scene.add(sphereCamera); */

        //adding new objects to the skybox

        // let spehereMaterial = new THREE.MeshBasicMaterial(
        //     //{envMap:sphereCamera.renderTarget}
        //     {color:0x0000ff}
        // );
        // let sphereGeo = new THREE.BoxGeometry(50,50,50);
        // let sphere = new THREE.Mesh(sphereGeo,spehereMaterial);
        // sphere.position.set(0,100,1000);
        // scene.add(sphere);



        // adding a model 


    //     const objLoader = new OBJLoader()
    //     objLoader.load(
    // /* 'https://threejsfundamentals.org/threejs/resources/models/windmill/windmill.obj', */
    //     table,
    //     (object) => {
    //         //(object.children[0] as THREE.Mesh).material = material
    //         // object.traverse(function (child) {
    //         //     if ((child as THREE.Mesh).isMesh) {
    //         //         (child as THREE.Mesh).material = material
    //         //     }
    //         // })

    //         /* object.scale(1000,1000,1000); */
    //         object.scale.setScalar(20);

    //         scene.add(object);

    //     },
    //     (xhr) => {
    //         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    //     },
    //     (error) => {
    //         console.log(error)
    //     }
    // )


        let spehereMaterial = new THREE.MeshBasicMaterial(
            //{envMap:sphereCamera.renderTarget}
            {color:0x0000ff}
        );
        let sphereGeo = new THREE.BoxGeometry(500,500,500);
        let sphere = new THREE.Mesh(sphereGeo,spehereMaterial);
        sphere.position.set(0,100,1000);
        scene.add(sphere);

        var joystickControls = new JoystickControls(
            camera,
            scene,
            sphere
          );


        window.addEventListener('resize', onWindowResize, false)


        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight
            camera.updateProjectionMatrix()
            renderer.setSize(window.innerWidth, window.innerHeight)
        // render()
        }

      /*   const stats = Stats()
        document.body.appendChild(stats.dom) */



        

        animate();


        function animate() {
           /*  stats.update() */

            //sphereCamera.updateCubeMap(renderer,scene);
           /*  sphere.rotation.x += 0.1;
            sphere.rotation.y += 0.1; */
            requestAnimationFrame(animate);
            renderer.render(scene,camera);

          }
          joystickControls.update((movement) => {
            if (movement) {
              /**
               * The values reported back might be too large for your scene.
               * In that case you will need to control the sensitivity.
               */
              const sensitivity = 0.0001;
        
              /**
               * Do something with the values, for example changing the position
               * of the object
               */
            sphere.position.x += movement.moveX * sensitivity;
            sphere.target.position.y += movement.moveY * sensitivity;
            }
          });
        




       
    }
    render() {
        return (
            <div>

              
                
            </div>
        );
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<Skybox/>, rootElement);
export default Skybox;


