import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

const Album = () => {
  const data = {
    description: `Vì yêu, ta có thể cố gắng. Và cố gắng để tạo dáng chụp ảnh đã chứng minh điều đó. 
    Album hình cưới với sự cố gắng của diễn viên hạng A Nguyễn Minh^^"`,
  }
  const albumImages = [
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_1_jy6vkl.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_2_geuyrf.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_3_uq8rmk.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_4_rhbits.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_5_vvn38w.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_6_czdcvq.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_7_hsfift.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_8_ksbsp9.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_9_wugmvb.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224636/_10_vthdcz.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225109/_11_qag8fl.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_12_e08yov.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_13_jk00rh.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_14_i3jcot.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_15_ye74qg.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_16_adh8fd.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_17_yhafjs.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225114/_18_w3mkyg.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_19_hoh3ig.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225114/_20_akokqy.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_21_crb0ye.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_22_hyvgz9.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_23_tmv41i.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_24_wohtfu.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225116/_25_bdwcxs.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225116/_26_o6wyjw.jpg"
    // Add more image paths as needed
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const goToPrevious = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : albumImages.length - 1);
    }
  };

  const goToNext = () => {
    if (!transitioning) {
      setTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex < albumImages.length - 1 ? prevIndex + 1 : 0);
    }
  };

  useEffect(() => {
    if (transitioning) {
      const timer = setTimeout(() => {
        setTransitioning(false);
      }, 400); // Adjust the timeout to match your CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [transitioning]);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventScrollOnSwipe: false,
    trackMouse: true,
  });

  return (
    <div {...handlers} className="w-full flex flex-wrap justify-center items-center py-8 relative">
      <h2 className="w-full text-2xl font-bold text-center mb-4">Wedding Album</h2>
      <div className="album-description w-full text-center p-4">
        <p className="text-lg">{data.description}</p>
      </div>
      <button onClick={goToPrevious} className="absolute left-0 z-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)">
          <path d="M12 9L15 12M15 12L12 15M15 12L7 12" stroke="#151515" />
        </svg>
      </button>
      <button onClick={goToNext} className="absolute right-0 z-10">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 9L15 12M15 12L12 15M15 12L7 12" stroke="#151515" />
        </svg>
      </button>
      <div className="w-full flex justify-center overflow-hidden mx-10">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * (100 / 5)}%)` }}>
          {albumImages.map((image, index) => (
            <img key={index} src={image} alt={`Wedding Photo ${index + 1}`} className="w-1/4 h-auto object-cover m-1 transition-opacity duration-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Album;