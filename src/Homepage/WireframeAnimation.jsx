import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const WireframeAnimation = () => {
  useEffect(() => {
    // Initialize scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 118; // Pull back to view the larger sphere

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    // Large wireframe sphere
    const geometry = new THREE.IcosahedronGeometry(50, 1); // Increased size
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.75;
    line.material.transparent = true;
    scene.add(line);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Mouse movement handling
    let lastMouseX = 0, lastMouseY = 0;
    let velocityX = 0, velocityY = 0;
    let friction = 0.99; // Decay factor for a smooth stop

    const onMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      let newMouseX = (event.clientX / innerWidth) * 2 - 1;
      let newMouseY = (event.clientY / innerHeight) * 2 - 1;

      velocityX = newMouseX - lastMouseX;
      velocityY = newMouseY - lastMouseY;

      lastMouseX = newMouseX;
      lastMouseY = newMouseY;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      // Apply velocity and decay
      

      line.rotation.y += velocityX
      line.rotation.x += velocityY

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Resize handling
    const handleResize = () => {
      const container = canvas.parentElement;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="myThreeJsCanvas" className="w-full h-full"></canvas>
    </>
  );
};
