import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import '../style/AnimatedImg.scss';

const Component__AnimatedImg = ({imgURl}) => {
  const imageContainerRef = useRef();
  const imageElementRef = useRef();

  useEffect(() => {
    // Variables
    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let aberrationIntensity = 0.0;
    let lastPosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };

    // Shaders
    const vertexShader = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;

    const fragmentShader = `
        varying vec2 vUv;
        uniform sampler2D u_texture;    
        uniform vec2 u_mouse;
        uniform vec2 u_prevMouse;
        uniform float u_aberrationIntensity;

        void main() {
            vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
            vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
            
            vec2 mouseDirection = u_mouse - u_prevMouse;
            
            vec2 pixelToMouseDirection = centerOfPixel - u_mouse;
            float pixelDistanceToMouse = length(pixelToMouseDirection);
            float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);
     
            vec2 uvOffset = strength * - mouseDirection * 0.2;
            vec2 uv = vUv - uvOffset;

            vec4 colorR = texture2D(u_texture, uv + vec2(strength * u_aberrationIntensity * 0.01, 0.0));
            vec4 colorG = texture2D(u_texture, uv);
            vec4 colorB = texture2D(u_texture, uv - vec2(strength * u_aberrationIntensity * 0.01, 0.0));

            gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
        }
    `;

    function initializeScene(texture) {
      // Scene creation
      scene = new THREE.Scene();

      // Camera setup
      camera = new THREE.PerspectiveCamera(
        80,
        imageElementRef.current.offsetWidth / imageElementRef.current.offsetHeight,
        0.01,
        10
      );
      camera.position.z = 1;

      // Uniforms
      let shaderUniforms = {
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_prevMouse: { type: "v2", value: new THREE.Vector2() },
        u_aberrationIntensity: { type: "f", value: 0.0 },
        u_texture: { type: "t", value: texture }
      };

      // Creating a plane mesh with materials
      planeMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(2, 2),
        new THREE.ShaderMaterial({
          uniforms: shaderUniforms,
          vertexShader,
          fragmentShader
        })
      );

      // Add mesh to scene
      scene.add(planeMesh);

      // Render
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(imageElementRef.current.offsetWidth, imageElementRef.current.offsetHeight);

      // Create a canvas
      imageContainerRef.current.appendChild(renderer.domElement);
    }

    // Use the existing image from HTML in the canvas
    initializeScene(new THREE.TextureLoader().load(imageElementRef.current.src));

    animateScene();

    function animateScene() {
      requestAnimationFrame(animateScene);

      mousePosition.x += (targetMousePosition.x - mousePosition.x) * easeFactor;
      mousePosition.y += (targetMousePosition.y - mousePosition.y) * easeFactor;

      planeMesh.material.uniforms.u_mouse.value.set(
        mousePosition.x,
        1.0 - mousePosition.y
      );

      planeMesh.material.uniforms.u_prevMouse.value.set(
        prevPosition.x,
        1.0 - prevPosition.y
      );

      aberrationIntensity = Math.max(0.0, aberrationIntensity - 0.05);

      planeMesh.material.uniforms.u_aberrationIntensity.value = aberrationIntensity;

      renderer.render(scene, camera);
    }

    // Event listeners

    function handleMouseMove(event) {
      easeFactor = 0.02;
      let rect = imageContainerRef.current.getBoundingClientRect();
      prevPosition = { ...targetMousePosition };

      targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      targetMousePosition.y = (event.clientY - rect.top) / rect.height;

      aberrationIntensity = 1;
    }

    function handleMouseEnter(event) {
      easeFactor = 0.02;
      let rect = imageContainerRef.current.getBoundingClientRect();

      mousePosition.x = targetMousePosition.x = (event.clientX - rect.left) / rect.width;
      mousePosition.y = targetMousePosition.y = (event.clientY - rect.top) / rect.height;
    }

    function handleMouseLeave() {
      easeFactor = 0.05;
      targetMousePosition = { ...prevPosition };
    }

    // Add event listeners
    imageContainerRef.current.addEventListener("mousemove", handleMouseMove);
    imageContainerRef.current.addEventListener("mouseenter", handleMouseEnter);
    imageContainerRef.current.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      // ... (your cleanup code if needed)
    };
  }, []); // useEffect depends only on component creation

  return (
    <div ref={imageContainerRef} id="imageContainer">
      <img ref={imageElementRef} id="myImage" src="https://images.unsplash.com/photo-1528659862616-22886eb53642?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Retro"></img>
    </div>
  );
};

export default Component__AnimatedImg;
