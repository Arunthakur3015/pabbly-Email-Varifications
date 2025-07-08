
import React from 'react';

import { Iconify } from '../iconify';

const PulseIcon = () => {
  const wrapperStyle = {
    position: 'relative',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyle = {
    animation: 'gentle-grow 1s infinite',
    zIndex: 2,
  };

  const waveStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '50px',
    height: '50px',
    border: '4px solid rgba(7, 141, 238, 0.15)',
    borderRadius: '50%',
    zIndex: 1,
    animation: 'gentle-wave 1s infinite',
    pointerEvents: 'none',
  };

  return (
    <div style={wrapperStyle}>
      <span style={waveStyle} />
      <Iconify
        icon="streamline-ultimate:button-play-bold"
        color="#078dee"
        width={50}
        height={50}
        style={iconStyle}
      />
      <style>{`
        @keyframes gentle-grow {
          0% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.08); /* ~2px larger */
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes gentle-wave {
          0% {
            transform: scale(1);
            opacity: 0.15;
          }
          30% {
            transform: scale(1.5);
            opacity: 0;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PulseIcon;