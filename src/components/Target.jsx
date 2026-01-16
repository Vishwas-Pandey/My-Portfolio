import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const ref = useRef(null);

  // ✅ LOCAL MODEL (you already have this file)
  const { scene } = useGLTF('/models/cube.glb');

  useGSAP(() => {
    if (!ref.current) return;

    gsap.to(ref.current.position, {
      y: '+=0.4',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  }, []);

  return <primitive ref={ref} object={scene} scale={0.6} rotation={[0, Math.PI / 4, 0]} {...props} />;
};

export default Target;

useGLTF.preload('/models/cube.glb');
