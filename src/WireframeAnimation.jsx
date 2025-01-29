import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const WireframeAnimation = () => {
  useEffect(() => {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 1, 1000);
    camera.position.z = 96;

    const canvas = document.getElementById("myThreeJsCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Add spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    // Create a wireframe sphere using triangular faces
    const geometry = new THREE.IcosahedronGeometry(25,3); // Icosahedron (triangles)
    const wireframe = new THREE.WireframeGeometry(geometry);
    const line = new THREE.LineSegments(wireframe);
    line.material.depthTest = false;
    line.material.opacity = 0.5;
    line.material.transparent = true;
    scene.add(line);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Animation loop
    const animate = () => {
      line.rotation.y += 0.005; // Slight rotation for effect
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      const container = canvas.parentElement;
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-[500px] h-[500px] max-w-full max-h-full overflow-hidden">
      <canvas id="myThreeJsCanvas" className="w-full h-full"></canvas>
    </div>
  );
};
