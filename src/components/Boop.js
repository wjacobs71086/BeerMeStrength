import React from 'react';
import {animated, useSpring} from 'react-spring';

// This component allows an animation of swing, or bounce of rotation or scale.
// Gathered this from https://www.joshwcomeau.com/react/boop/
// Wrap the element to be effected and pass in the values of the boop effect.



const Boop = ({ 
        x = 0,
        y = 0,
        scale = 1,
        rotation = 0, 
        timing = 150, 
        children 
    }) => {

    const [isBooped, setIsBooped] = React.useState(false);

    const style = useSpring({
      display: 'inline-block',
      backfaceVisibility: 'hidden',
      transform: isBooped
      ? `translate(${x}px, ${y}px)
      rotate(${rotation}deg)
      scale(${scale})`
   : `translate(0px, 0px)
      rotate(0deg)
      scale(1)`,
        config: {
            tension: 300,
            friction: 10,
          },
    });

    React.useEffect(() => {
      if (!isBooped) {
        return;
      }
      const timeoutId = window.setTimeout(() => {
        setIsBooped(false);
      }, timing);
      return () => {
        window.clearTimeout(timeoutId);
      };
    }, [isBooped, timing]);
    const trigger = () => {
      setIsBooped(true);
    };
    return (
      <animated.span onMouseEnter={trigger} style={style}>
        {children}
      </animated.span>
    );
  };

  export default Boop;