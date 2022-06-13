import Cube from "./elements/Cube";
import { Canvas } from "@react-three/fiber";
import GroundPlane from "./elements/GroundPlane";
import KeyLight from "./lights/KeyLight";
import RimLight from "./lights/RimLight";
import FillLight from "./lights/FillLight";
import BackDrop from "./elements/BackDrop";
import Name from "./elements/Name";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas id="canvas">
        <GroundPlane />
        <BackDrop />
        <Cube />
        <Name />
        <KeyLight brightness={5.6} color={"#ffffff"} />
        <FillLight brightness={2.6} color={"#ffffff"} />
        <RimLight brightness={54} color={"#ffffff"} />
        <OrbitControls
          enableZoom={true}
          minDistance={0}
          maxDistance={500}
          zoomSpeed={0.5}
        />
      </Canvas>
    </>
  );
}

export default App;
