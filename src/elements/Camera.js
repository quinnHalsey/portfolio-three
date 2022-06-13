import { PerspectiveCamera, useHelper } from "@react-three/drei";
import { CameraHelper } from "three";
import { useRef } from "react";

const Camera = () => {
  const camera = useRef();
  useHelper(camera, CameraHelper, 1, "hotpink");
  return <PerspectiveCamera ref={camera} />;
};

export default Camera;
