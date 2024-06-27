import { Fancybox } from '@fancyapps/ui/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { useState } from 'react';

Fancybox.bind('[data-fancybox="gallery"]', {
  compact: false,
  idle: false,

  animated: false,
  showClass: false,
  hideClass: false,

  dragToClose: false,
  contentClick: false,

  Images: {
    zoom: false,
  },

  Toolbar: {
    display: {
      left: [],
      middle: ['infobar'],
      right: ['close'],
    },
  },

  Thumbs: {
    type: 'classic',
  },
});
import Aos from 'aos';
import 'aos/dist/aos.css';
const images = [
  { id: 1, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_1_jy6vkl.jpg", alt: 'Wedding Photo 1' },
  { id: 2, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_2_geuyrf.jpg", alt: 'Wedding Photo 2' },
  { id: 3, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_3_uq8rmk.jpg", alt: 'Wedding Photo 3' },
  { id: 4, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_4_rhbits.jpg", alt: 'Wedding Photo 4' },
  { id: 5, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_5_vvn38w.jpg", alt: 'Wedding Photo 5' },
  { id: 6, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_6_czdcvq.jpg", alt: 'Wedding Photo 6' },
  { id: 7, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_7_hsfift.jpg", alt: 'Wedding Photo 7' },
  { id: 8, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_8_ksbsp9.jpg", alt: 'Wedding Photo 8' },
  { id: 9, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224635/_9_wugmvb.jpg", alt: 'Wedding Photo 9' },
  { id: 10, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224636/_10_vthdcz.jpg", alt: 'Wedding Photo 10' },
  { id: 11, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225109/_11_qag8fl.jpg", alt: 'Wedding Photo 11' },
  { id: 12, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_12_e08yov.jpg", alt: 'Wedding Photo 12' },
  { id: 13, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_13_jk00rh.jpg", alt: 'Wedding Photo 13' },
  { id: 14, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_14_i3jcot.jpg", alt: 'Wedding Photo 14' },
  { id: 15, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_15_ye74qg.jpg", alt: 'Wedding Photo 15' },
  { id: 16, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_16_adh8fd.jpg", alt: 'Wedding Photo 16' },
  { id: 17, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225113/_17_yhafjs.jpg", alt: 'Wedding Photo 17' },
  { id: 18, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225114/_18_w3mkyg.jpg", alt: 'Wedding Photo 18' },
  { id: 19, src:  "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_19_hoh3ig.jpg", alt: 'Wedding Photo 19' },
  { id: 20, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225114/_20_akokqy.jpg", alt: 'Wedding Photo 20' },
  { id: 21, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_21_crb0ye.jpg", alt: 'Wedding Photo 21' },
  { id: 22, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_22_hyvgz9.jpg", alt: 'Wedding Photo 22' },
  { id: 23, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_23_tmv41i.jpg", alt: 'Wedding Photo 23' },
  { id: 24, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225115/_24_wohtfu.jpg",alt: 'Wedding Photo 24' },
  { id: 25, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225116/_25_bdwcxs.jpg", alt: 'Wedding Photo 25' },
  { id: 26, src: "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225116/_26_o6wyjw.jpg", alt: 'Wedding Photo 26' },
  
];
const data = {
  description: `Vì yêu, ta có thể cố gắng. Và cố gắng để tạo dáng chụp ảnh đã chứng minh điều đó. 
  Album hình cưới với sự cố gắng của diễn viên hạng A Nguyễn Minh^^"`,
}
function WeddingAlbum() {
  const [showFullAlbum, setShowFullAlbum] = useState(false);

  // Toggle showing the full album
  const handleShowFullAlbum = () => {
    setShowFullAlbum(!showFullAlbum);
  };

  return (
    <div className='flex flex-col mt-4 items-center w-full'>
      <h2 className="w-full text-2xl font-bold text-center dancing-script">Wedding Album</h2>
      <div className="album-description w-full text-center p-4">
        <p className="text-lg">{data.description}</p>
      </div>
        <div className="grid grid-cols-3 gap-4">
          {images.slice(0, showFullAlbum ? images.length : 5).map((image) => (
            <a key={image.id} data-fancybox="gallery" href={image.src}>
              <img data-aos="fade-up" src={image.src} alt={image.alt} className="w-full h-auto" />
            </a>
          ))}
        </div>
      <button onClick={handleShowFullAlbum} className="rounded-full my-4 px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
        {showFullAlbum ? "Xem ít hơn" : "Xem toàn bộ"}
      </button>
    </div>
  );
}

export default WeddingAlbum;