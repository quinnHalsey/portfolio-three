const Cube = ({ rotation }) => {
  if (!rotation) {
    rotation = [0, 10, 0];
  }
  return (
    <mesh receiveShadow position={[0, 0, 0]} rotation={rotation}>
      <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
};

export default Cube;
