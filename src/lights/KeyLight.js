const KeyLight = ({ brightness, color }) => {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, -10]}
      lookAt={[0, 0, -10]}
      penumbra={1}
      castShadow
    />
  );
};

export default KeyLight;
