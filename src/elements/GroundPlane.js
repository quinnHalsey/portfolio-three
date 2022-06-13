const GroundPlane = () => {
  return (
    <mesh receiveShadow rotation={[4.73, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
};

export default GroundPlane;
