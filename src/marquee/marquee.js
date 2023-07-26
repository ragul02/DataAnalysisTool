import React from 'react';
import { styled } from "@mui/system";

import chart1 from "../assets/images/chart1.jpg"
import "./marquee.css";

const useStyles = styled((theme) => ({
  marquee: {
    width: '100%',
    overflow: 'hidden',
    position: 'relative',
    '& div': {
      display: 'inline-block',
      position: 'absolute',
      width: '100%',
      left: '100%',
      animation: '$marquee 10s linear infinite',
    },
  },
  '@keyframes marquee': {
    '0%': {
      left: '100%',
    },
    '100%': {
      left: '-100%',
    },
  },
}));

const Marquee = () => {
  const classes = useStyles();

  const images = [
    chart1,
    chart1,
    chart1,
  ];

  return (
    <div className ="marquee">
      <div>
        {images.map((imageUrl, index) => (
          <img key={index} src={imageUrl}  alt={imageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
