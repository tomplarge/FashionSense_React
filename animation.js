function forInitial(props) {
  const {
    navigationState,
    scene,
  } = props;

  const focused = navigationState.index === scene.index;
  const opacity = focused ? 1 : 0;
  // If not focused, move the scene to the far away.
  const translate = focused ? 0 : 1000000;
  return {
    opacity,
    transform: [
      { translateX: translate },
      { translateY: translate },
    ],
  };
}

export function rightToLeftStyle(props) {
  const {
    layout,
    position,
    scene,
  } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const width = layout.initWidth;

  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 0],  // Set the last value from 0.3 to 0.
  });

  const scale = position.interpolate({
    inputRange,
    outputRange: [1, 1, 1],
  });

  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange: [width, 0, -10],
  });

  return {
    opacity,
    transform: [
      { scale },
      { translateX },
      { translateY },
    ],
  };
}

export function leftToRightStyle(props) {
  const {
    layout,
    position,
    scene,
  } = props;

  if (!layout.isMeasured) {
    return forInitial(props);
  }

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const width = layout.initWidth;

  const opacity = position.interpolate({
    inputRange,
    outputRange: [1, 1, 0],  // Set the last value from 0.3 to 0.
  });

  const scale = position.interpolate({
    inputRange,
    outputRange: [1, 1, 1],
  });

  const translateY = 0;
  const translateX = position.interpolate({
    inputRange,
    outputRange: [-width, 0, -10],
  });

  return {
    opacity,
    transform: [
      { scale },
      { translateX },
      { translateY },
    ],
  };
}
