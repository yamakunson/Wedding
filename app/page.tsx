"use client"
import React, { useState, useEffect } from 'react';
import Calendar from './calendar';
import LoveRain from './LoveRain';
import MusicPlayer from './music_player';
import WeddingAlbum from './weddingAlbum';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  const data = {
    codau: "Nguyệt Hà",
    chure: "Đăng Chung",
    tencodau: "Nguyễn Thị Nguyệt Hà",
    tenchure: "? Đăng Chung",
    chacodau: "Nguyễn Văn Khang",
    mecodau: "Sầm Thị Thủy",
    chachure: "? ? ?",
    mechure: "? ? ?",
    ttchure: `Chàng trai sở hữu gen di truyền rất hay ngại ngùng. Đa tài nhưng nói không với 
    showbiz. Tương lai sống và làm việc theo chủ nghĩa vô sản.`,
    ttcodau: `Cô gái dù sợ béo nhưng đam mê ẩm thực. Sống và làm việc theo con 
    tim mách bảo nhưng luôn muốn kết quả đạt được theo lí trí.`,
    timeline: [
      { date: "Date 1", description: "Event 1 Description", image: "images/codau.jpg" },
      { date: "Date 2", description: "Event 2 Description", image: "images/chure.jpg" },
      { date: "Date 3", description: "Event 3 Description", image: "images/codau.jpg" },
      { date: "Date 4", description: "Event 4 Description", image: "images/chure.jpg" },
    ],
    thoigian_trai: "11:00 10/03/2023",
    thoigian_gai: "11:00 17/03/2023",
    diachi_trai: "Quận 7, Thành Phố Hồ Chí Minh",
    diachi_gai: "46D/7/5 đường Gò Cát, phường Phú Hữu, Thành Phố Thủ Đức, Thành Phố Hồ Chí Minh",
    nganhang_codau: {
      nganhang: "Vietcombank",
      tentaikhoan: "Nguyễn Thị Nguyệt Hà",
      sotaikhoan: "123456789",
      chinhanh: "Vietcombank Nghệ An"
    },
    nganhang_chure: {
      nganhang: "Vietcombank",
      tentaikhoan: "Đặng Chung",
      sotaikhoan: "123456789",
      chinhanh: "Vietcombank Nghệ An"
    }
  }
  const albumImages = [
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_1_jy6vkl.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_2_geuyrf.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224634/_3_uq8rmk.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719224636/_10_vthdcz.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225109/_11_qag8fl.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_12_e08yov.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719225112/_13_jk00rh.jpg",
    // Add more image paths as needed
  ];
  const images = albumImages.map(image => `url("${image}")`);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    Aos.init();
  }, []);
  useEffect(() => {
    // Change the background image every 2 seconds
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentImage(images[imageIndex]);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [imageIndex, images]);
  return (
    <main className="w-full items-center justify-center">
      {/* Khuc tren */}
      <LoveRain />
      <MusicPlayer />

      <div className="flex flex-col w-full items-center px-4 sm:px-8 bg-[#ffd1dc] py-6">
        {/* header */}
        <div className="flex text-lg px-2 sm:px-0 mt-4">
          <span className="dancing-script text-5xl header-text">{data.chure}</span>
          <img src="images/rose.png" className="w-auto h-12 mx-2"></img>
          <span className="dancing-script text-5xl header-text">{data.codau}</span>
        </div>
        <div className='flex flex-row items-center justify-center my-4 parisienne'>
          <div className='flex-grow border border-[#000] mr-2 sm:mr-5'></div>
          <div className='text-[#000000] text-3xl px-2 marry-text'>Just Married</div>
          <div className='flex-grow border border-[#000] ml-2 sm:ml-5'></div>
        </div>
      </div>
      <div className='border border-[#C5C5CF] w-full'></div>
      {/* Navigation */}
      <div className="w-full flex justify-center items-center inter">
        <div className="flex flex-nowrap justify-center noto-serif">
          <img src="images/rose.png" className="w-auto h-12 mx-2" style={{ transform: 'scaleX(-1)' }}></img>
          <a href="#couple" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Cặp đôi</a>
          <a href="#loveStory" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Chuyện tình yêu</a>
          <a href="#weddingAlbum" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Album hình cưới</a>
          <a href="#weddingEvent" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Sự kiện cưới</a>
          <a href="#congratulations" className="px-4 py-2 my-2 text-center hover:bg-gray-200 rounded-md transition-colors duration-300">Mừng cưới</a>
          <img src="images/rose.png" className="w-auto h-12 mx-2"></img>
        </div>
      </div>
      {/* Slide show */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: currentImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center 10%',
        zIndex: -99,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'background-image 1s ease-in-out', // Smooth transition for background image change
        opacity: 1,
        filter: 'brightness(0.5)',
      }} className='fade-animation' >
      </div>

      <div id="couple" className="w-full flex items-center justify-center bg-transparent mt-12">
        <span className="text-xl sm:text-3xl font-bold text-gray-800 noto-serif ">Giới thiệu cô dâu chú rể</span>
      </div>
      <div className="w-full flex items-center justify-center bg-transparent py-8 sm:py-16 px-4 sm:px-48" style={{ height: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full justify-between items-center px-4 sm:px-12'>
          {/* Left */}
          <div className='flex-1 p-4 h-full border border-white bg-white bg-opacity-10'>
            <div className='border-[#EF9C66] border-2 h-full rounded-xl bg-white bg-opacity-100 flex flex-col justify-end'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719413792/calendar_bg_fu3noc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div data-aos='fade-in' className='flex flex-col text-[#fff] items-center space-y-4 p-4'>
                <div className="text-lg sm:text-xl font-semibold ">{data.tencodau}</div>
                <div className="text-sm sm:text-md ">{data.ttcodau}</div>
              </div>
            </div>
          </div>
          <img src='images/fly_heart.png' className='self-center px-4' style={{ maxWidth: '100px', maxHeight: '100px' }}></img>
          {/* Right */}
          <div className='flex-1 p-4 border border-white h-full bg-white bg-opacity-10'>
            <div className='border-[#EF9C66] border-2 h-full rounded-xl bg-white bg-opacity-100 flex flex-col justify-end'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719413792/calendar_bg_fu3noc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div data-aos='fade-in' className='flex flex-col text-[#fff] items-center space-y-4 p-4'>
                <div className="text-lg sm:text-xl font-semibold ">{data.tenchure}</div>
                <div className="text-sm sm:text-md ">{data.ttchure}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Countdown */}
      <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 sm:px-48" style={{ height: 'auto', minHeight: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full space-y-4 sm:space-y-0 sm:space-x-4'>
          {/* Left */}
          <div className='w-full sm:p-12 p-4 border border-white text-[#fff]' >
            <div className='border-[#ff85a2] border-4 bg-white h-full flex flex-col items-center justify-center space-y-4 p-4 rounded-xl '
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719413792/calendar_bg_fu3noc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className='parisienne text-3xl'>
                Save the Date
              </div>
              <div className='noto-serif text-xl'>
                For the wedding of
              </div>
              <div className='dancing-script text-3xl'>
                {data.chure} & {data.codau}
              </div>
              <div className='quicksand text-center'>
                {data.codau} rất mong nhận được lời chúc iu thương của mọi người. Biết ơn vì đã xuất hiện trong websites của {data.codau} ^^
              </div>
              {/* <button className='px-4 py-2 bg-[#EF9C66] flex items-center rounded-lg quicksand'>
                Gửi lời chúc
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9L15 12M15 12L12 15M15 12L7 12" stroke="#151515" />
                </svg>
              </button> */}
            </div>
          </div>
          {/* Right */}
          <div className='w-full sm:p-12 p-4 border border-white'>
            <div className='border-[#ff85a2] border-4 bg-white h-full flex flex-col items-center justify-center rounded-xl' style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719413964/z5576430009234_3a624ae6391f0df88b59e629007aaaa0_ygpkex.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Calendar></Calendar>
            </div>
          </div>
        </div>
      </div>
      {/* Love Story */}
      {/* Timeline */}
      <div id="loveStory" className="w-full flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl font-bold mb-4 dancing-script">Our Love Story</h2>
        <div className="flex flex-col items-center justify-center">
          {data.timeline.map((event, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-stretch justify-center mb-8 w-full px-4 flex-wrap`}>
              <img src={event.image} alt={`Event ${index + 1}`} data-aos="fade-up" className="w-full md:w-1/4 h-auto object-cover" />
              <div data-aos="fade-up" className={`flex flex-col justify-center items-center text-center p-4 w-full md:w-1/4 ${index % 2 === 0 ? 'border-l pl-4' : 'border-r pr-4'}`}>
                <p className="text-lg font-semibold">{event.date}</p>
                <p className="text-md">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sự kiện cưới */}
      <div id="weddingEvent" className="w-full flex flex-col items-center justify-center bg-[#F6F1F3] py-8">
        <img src="images/rose.png" className='h-24 w-auto'></img>
        <div className="text-center text-3xl font-bold dancing-script">Sự kiện cưới</div>
        <p className="text-center mt-4 px-4 quicksand">...Mọi người ghé thăm 2 gia đình để không say không về nhé! Mong mọi người lắm!...</p>

        <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 text-center quicksand">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Left */}
            <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
              <div className="text-lg font-semibold noto-serif">Lễ vu quy</div>
              <div className="w-48 h-48 relative">
                <img src="images/codau_vuong.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà gái" />
              </div>
              <div className='flex  '> Tổ chức lúc: &nbsp; <div className='noto-serif text-center font-bold'>{data.thoigian_gai}</div></div>
              <div className='flex  '> Tại địa chỉ: &nbsp; </div>
              <div className='text-center noto-serif font-bold'>{data.diachi_gai}</div>
              <a href="https://maps.app.goo.gl/KTW1VpmT26i7gnhW6" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
                Địa chỉ nhà gái
              </a>
            </div>
            {/* Right */}
            <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
              <div className="text-lg font-semibold noto-serif">Lễ tân hôn</div>
              <div className="w-48 h-48 relative">
                <img src="images/chure.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà trai" />
              </div>
              <div className='flex  '> Tổ chức lúc: &nbsp; <div className='noto-serif text-center font-bold'>{data.thoigian_trai}</div></div>
              <div className='flex  '> Tại địa chỉ: &nbsp; </div>
              <div className='text-center noto-serif font-bold'>{data.diachi_trai}</div>
              <a href="https://maps.app.goo.gl/DgvoNkLGkqV9efWN7" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
                Địa chỉ nhà trai
              </a>
            </div>
          </div>
        </div>
        {/* Tiệc thành hôn */}
        <div className="w-full sm:w-1/2 p-4 border border-white flex flex-col items-center justify-center space-y-4">
          <div className="text-lg font-semibold noto-serif">Tiệc thành hôn</div>
          <div className="w-48 h-48 relative">
            <img src="images/chure.jpg" className="absolute object-cover w-full h-full" alt="Lễ cưới nhà trai" />
          </div>
          <div className='flex  '> Tổ chức lúc: &nbsp; <div className='noto-serif text-center font-bold'>{data.thoigian_gai}</div></div>
          <div className='flex font-bold '> Tại địa chỉ: &nbsp; </div>
          <div className='text-center noto-serif '>{data.diachi_gai}</div>
          <a href="https://g.co/kgs/6UptFBr" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
            Địa chỉ tiệc cưới
          </a>
        </div>
      </div>

      {/* Album */}
      <div id="weddingAlbum"></div>
      <WeddingAlbum></WeddingAlbum>
      <div id="congratulations" className="w-full flex flex-col items-center justify-center bg-[#F6F1F3] py-8">
        <img src="images/rose.png" className='h-24 w-auto'></img>
        <div className="text-center text-3xl font-bold dancing-script">Hộp mừng cưới</div>
        <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 text-center">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Left */}
            <div className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold">Mừng cưới đến cô dâu</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_codau.jpg" className="absolute object-cover w-full h-full" alt="Mã cô dâu" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_codau.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_codau.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_codau.sotaikhoan}</div></div>
              <div className='text-center flex gap-1'> Chi nhánh: <div className="font-medium">{data.nganhang_codau.chinhanh}</div></div>
            </div>
            {/* Right */}
            <div className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold">Mừng cưới đến chú rể</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_codau.jpg" className="absolute object-cover w-full h-full" alt="Mã chú rể" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_chure.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_chure.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_chure.sotaikhoan}</div></div>
              <div className='text-center flex gap-1'> Chi nhánh: <div className="font-medium">{data.nganhang_chure.chinhanh}</div></div>
            </div>
          </div>
        </div>
      </div>
      <footer style={{ width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
        Designed by <span className="font-medium">em Sơn</span>
      </footer>
    </main>
  );
}
