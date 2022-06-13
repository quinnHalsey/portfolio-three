import Cube from "./elements/Cube";
import { Canvas } from "@react-three/fiber";
import GroundPlane from "./elements/GroundPlane";
import KeyLight from "./lights/KeyLight";
import RimLight from "./lights/RimLight";
import FillLight from "./lights/FillLight";
// import BackDrop from "./elements/BackDrop";
import { useRef } from "react";
import Name from "./elements/Name";
import Camera from "./elements/Camera";
import { OrbitControls } from "@react-three/drei";
import BackDrop from "./elements/BackDrop";

function App() {
  return (
    <>
      <Canvas id="canvas">
        <ambientLight intensity={0.05} />
        <BackDrop />
        <Camera />
        {/* <GroundPlane /> */}
        {/* <BackDrop /> */}
        <Cube />
        <Name />
        <KeyLight brightness={5.6} color={"#ffffff"} />
        <FillLight brightness={2.6} color={"#ffffff"} />
        <RimLight brightness={54} color={"#ffffff"} />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
