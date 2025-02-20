import B3 from '../Assets/B3.jpg'
import React,{useEffect,useRef} from 'react';
import * as THREE from "three";

function Design() {
        const mountRef = useRef(null);
      
        useEffect(() => {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
          const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // --- Image to Texture form ---
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load("B3");

    // Plane Geometry 
    const geometry = new THREE.PlaneGeometry(5, 3);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);

    scene.add(plane);
    camera.position.z = 5;

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.y += 0.01; 
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, 
  []);

    // return ( 
    //     <div className="container main">
    //         <div className="image" style={{width:"100%",height:"100%"}}>
    //             <div className='img'>
    //                 <img src={B3} style={{width:"85%",borderRadius:"80px",}}/>
    //             </div>
    //             <div className='imgText' style={{fontSize:"100px",color:"white",width:"100%",position:"absolute",
    //                marginTop:"-30%"
    //             }}>
    //                 <p style={{fontSize:"25px"}}>01</p>
    //                 <p>Design</p>
    //             </div>
               
  
    //         </div>
    //     </div>
    //  );

<div ref={mountRef} />
}

export default Design;