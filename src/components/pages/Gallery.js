import React, { useState } from 'react';
import '../../App.css';

import G1 from '../../images/g1.jpg';
import G2 from '../../images/g2.jpg';
import G3 from '../../images/g3.jpg';
import G4 from '../../images/g4.jpg';
import G5 from '../../images/g5.jpg';
import G6 from '../../images/g6.jpg';
import G7 from '../../images/g7.jpg';
import G8 from '../../images/g8.jpg';
import G9 from '../../images/g9.jpg';
import G10 from '../../images/g10.jpg';

//import CloseIcon from '@mui/icons-material/Close';

const Gallery = () => {
  const data = [
    {
      id: 1,
      imgSrc: G1,
    },
    {
      id: 2,
      imgSrc: G2,
    },
    {
      id: 3,
      imgSrc: G3,
    },
    {
      id: 4,
      imgSrc: G4,
    },
    {
      id: 5,
      imgSrc: G5,
    },
    {
      id: 6,
      imgSrc: G6,
    },
    {
      id: 7,
      imgSrc: G7,
    },
    {
      id: 8,
      imgSrc: G8,
    },
    {
      id: 9,
      imgSrc: G9,
    },
    {
      id: 10,
      imgSrc: G10,
    },
  ];

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState('');

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? 'model open' : 'model'}>
        <img src={tempImgSrc} alt={tempImgSrc} />
        
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
              <img src={item.imgSrc} alt={item.imgSrc} style={{ width: '100%' }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
