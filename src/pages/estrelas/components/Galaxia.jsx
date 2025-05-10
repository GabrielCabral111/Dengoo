import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useNavigate } from 'react-router-dom';

function Socorro() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/estrelas'); // Define a rota que você quer usar
    };
  const mountRef = useRef(null);

  useEffect(() => {
    // Inicialização da cena
    const canvas = mountRef.current;
    const scene = new THREE.Scene();

    // Parâmetros da galáxia
    const parameters = {
      count: 100000,
      size: 0.01,
      radius: 9,
      branches: 7,
      spin: 1,
      randomness: 1,
      randomnessPower: 3,
      innerColor: '#ff6030',
      outerColor: '#070041'
    };

    let geometry = null;
    let material = null;
    let points = null;

    const generateGalaxy = () => {
      if (points !== null) {
        geometry.dispose();
        material.dispose();
        scene.remove(points);
      }

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(parameters.count * 3);
      const colors = new Float32Array(parameters.count * 3);
      const insideColor = new THREE.Color(parameters.innerColor);
      const outsideColor = new THREE.Color(parameters.outerColor);

      insideColor.lerp(outsideColor, 0.05);

      for (let i = 0; i < parameters.count; i++) {
        const i3 = i * 3;
        const radius = Math.random() * parameters.radius;
        const spinAngle = radius * parameters.spin;
        const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

        const randomY = Math.pow(Math.random(), parameters.randomnessPower) * 
                       (Math.random() < 0.5 ? 1 : -1) * parameters.randomness;
        const randomX = Math.pow(Math.random(), parameters.randomnessPower) * 
                       (Math.random() < 0.5 ? 1 : -1) * parameters.randomness;
        const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * 
                       (Math.random() < 0.5 ? 1 : -1) * parameters.randomness;

        positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
        positions[i3 + 1] = randomY / radius;
        positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const mixedColor = insideColor.clone();
        mixedColor.lerp(outsideColor, radius / parameters.radius);
        colors[i3] = mixedColor.r;
        colors[i3 + 1] = mixedColor.g;
        colors[i3 + 2] = mixedColor.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: parameters.size,
        sizeAttenuation: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);
    };

    generateGalaxy();

    // GUI
    const gui = new dat.GUI({ width: 350 });
    gui.close();
    gui.add(parameters, 'count', 1000, 500000, 1000).name('Galaxy Count').onFinishChange(generateGalaxy);
    gui.add(parameters, 'size', 0.01, 0.1, 0.001).name('Galaxy Size').onFinishChange(generateGalaxy);
    gui.add(parameters, 'radius', 1, 20, 1).name('Galaxy Radius').onFinishChange(generateGalaxy);
    gui.add(parameters, 'branches', 3, 10, 1).name('Galaxy Branches').onFinishChange(generateGalaxy);
    gui.add(parameters, 'spin', -5, 5, 1).name('Galaxy Spin').onFinishChange(generateGalaxy);
    gui.add(parameters, 'randomness', 0, 10, 0.001).name('Galaxy Randomness').onFinishChange(generateGalaxy);
    gui.add(parameters, 'randomnessPower', 0, 10, 0.001).name('Galaxy Randomness Power').onFinishChange(generateGalaxy);
    gui.addColor(parameters, 'innerColor').name('Galaxy Inside Color').onFinishChange(generateGalaxy);
    gui.addColor(parameters, 'outerColor').name('Galaxy Outside Color').onFinishChange(generateGalaxy);

    // Câmera
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 15, 5);
    scene.add(camera);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Controles
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // Resize handler
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // Animação
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      points.rotation.y = elapsedTime * 0.1;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      gui.destroy();
      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (points) scene.remove(points);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <canvas 
        ref={mountRef} 
        className="webgl fixed top-0 left-0 w-full h-full outline-none"
      />
      
      <div className="info absolute bottom-0 h-fit py-[3vh] text-center z-20">
        <button onClick={handleNavigation} className="px-8 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-700 shadow-lg shadow-blue-500/30 transition-all duration-300 hover:bg-gradient-to-br hover:from-blue-600 hover:via-blue-700 hover:to-indigo-800 hover:shadow-xl hover:shadow-blue-600/40 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-400/50 active:scale-95">Volte Aqui</button>
      </div>
    </div>
  );
}

export default Socorro;