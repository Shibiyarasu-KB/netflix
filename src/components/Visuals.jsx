import React from 'react';
import './visuals.css';

const images = [
  'https://picsum.photos/200/300?r1',
  'https://picsum.photos/200/300?random=2',
  'https://picsum.photos/200/300?random=3',
  'https://picsum.photos/200/300?random=4',
  'https://picsum.photos/200/300?random=5',
  'https://picsum.photos/200/300?random=6',
];

function Visuals() {
  return (
    <div className="visuals">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`poster-${index}`} className="poster" />
      ))}
    </div>
  );
}

export default Visuals;
