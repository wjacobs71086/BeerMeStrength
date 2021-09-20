import React from 'react';
import {animated} from 'react-spring';
import useBoop from '../hooks/useBoop';
// This component allows an animation of swing, or bounce of rotation or scale.
// Gathered this from https://www.joshwcomeau.com/react/boop/
// Wrap the element to be effected and pass in the values of the boop effect.

const Boop = ({ children, ...boopConfig }) => {

    const [style, trigger] = useBoop(boopConfig);
  
    return (
      <animated.span onMouseEnter={trigger} style={style}>
        {children}
      </animated.span>
    );
  };

  export default Boop;