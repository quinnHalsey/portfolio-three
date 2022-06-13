import { Environment } from "@react-three/drei";
import * as THREE from "three";
import { LayerMaterial, Depth, Noise } from "lamina";

const Enviro = () => {
  return (
    <Environment background resolution={64}>
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          {/* <Base color="blue" alpha={1} mode="normal" /> */}
          <Depth
            colorA="#00ffff"
            colorB="#ff8f00"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
          <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
        </LayerMaterial>
      </mesh>
    </Environment>
  );
};

export default Enviro;
