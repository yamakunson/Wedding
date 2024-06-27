"use client"
import React, { useState, useEffect } from 'react';
import Calendar from './calendar';
import LoveRain from './LoveRain';
import MusicPlayer from './music_player';
import WeddingAlbum from './weddingAlbum';
import Aos from 'aos';
import CountdownTimer from './timer';
import 'aos/dist/aos.css';
export default function Home() {
  const data = {
    codau: "Nguyệt Hà",
    chure: "Đăng Chung",
    tencodau: "Nguyễn Thị Nguyệt Hà",
    tenchure: "? Đăng Chung",
    chacodau: "Nguyễn Văn Khang",
    mecodau: "Sầm Thị Thủy",
    chachure: "Lê Đăng Quang",
    mechure: "Nguyễn Thị Hướng",
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
    thoigian_gai: "18:00 14/07/2024",
    diachi_trai: "Quận 7, Thành Phố Hồ Chí Minh",
    diachi_gai: "Trung tâm tiệc cưới Louis Center Sảnh Diamond 1, 38 Lâm Văn Bền, phường Tân Thuận Tây, Quận 7, Thành Phố Hồ Chí Minh",
    videodescription:`Qua video clip này, chúng tôi muốn gửi đến mọi người những hình ảnh đẹp nhất của ngày cưới của chúng tôi.`,
    nganhang_codau: {
      nganhang: "Techcombank",
      tentaikhoan: "Nguyễn Thị Nguyệt Hà",
      sotaikhoan: "19035471883017",
    },
    nganhang_chure: {
      nganhang: "Vietcombank",
      tentaikhoan: "Lê Đăng Chung",
      sotaikhoan: "0181003653169",
    }
  }
  const albumImages = [
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719457601/_3_sua_uxpo1l.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719457605/_11_sua_ehbbky.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719457605/_12_sua_njsupy.jpg",
    "https://res.cloudinary.com/dzm879qpm/image/upload/v1719457603/_13_sua_jurkwx.jpg",
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

      <div className="flex flex-col w-full items-center px-2 sm:px-4 bg-[#ffd1dc] py-2 quicksand">
        {/* header */}
        <div className="flex text-lg px-2 sm:px-0 mt-4">
          <span className="dancing-script text-4xl sm:text-3xl header-text">{data.chure}</span>
          <img src="images/heart_top.png" className="w-auto h-6 mx-2"></img>
          <span className="dancing-script text-4xl sm:text-3xl header-text">{data.codau}</span>
        </div>
        <div className='flex flex-row items-center justify-center my-4 parisienne'>
          <div className='flex-grow border border-[#000] mr-2 sm:mr-5'></div>
          <div className='text-[#000000] text-3xl px-2 marry-text'>Just Married</div>
          <div className='flex-grow border border-[#000] ml-2 sm:ml-5'></div>
        </div>
      </div>
      <div className='border border-[#C5C5CF] w-full'></div>
      {/* Navigation */}
      <div className="w-full flex justify-center items-center ">
        <div className="flex flex-nowrap justify-center font-bold text-[#6D3E28] ">
          {/* <img src="images/rose.png" className="w-auto h-12" style={{ transform: 'scaleX(-1)' }}></img> */}
          <a href="#couple" className="px-4 py-2 text-center hover:text-[#f4cbc6] rounded-md transition-colors duration-300">Cặp đôi</a>
          <a href="#time" className="px-4 py-2 text-center hover:text-[#f4cbc6] rounded-md transition-colors duration-300">Thời gian tổ chức</a>
          <a href="#weddingEvent" className="px-4 py-2 text-center hover:text-[#f4cbc6] rounded-md transition-colors duration-300">Sự kiện cưới</a>
          <a href="#weddingAlbum" className="px-4 py-2 text-center hover:text-[#f4cbc6] rounded-md transition-colors duration-300">Album hình cưới</a>

          <a href="#congratulations" className="px-4 py-2 text-center hover:text-[#f4cbc6] rounded-md transition-colors duration-300">Mừng cưới</a>
          {/* <img src="images/rose.png" className="w-auto h-12"></img> */}
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
        transition: 'background-image 2s ease-in-out',
        opacity: 1,
        // filter: 'brightness(0.5)',
      }} className='fade-animation'>
  <div style={{ color: 'white', textAlign: 'center'}} className='flex flex-col items-center justify-center'>
    <img src="https://res.cloudinary.com/dzm879qpm/image/upload/v1719503029/Picture1_tvilbe.png" className='w-full h-auto sm:w-1/2'></img>
  </div>
</div>

      <div id="couple" className="w-full flex flex-col items-center justify-center bg-transparent mt-12">
      <img src="images/rose.png" className='h-auto w-16'></img>
        <span className="text-xl sm:text-xl font-bold text-black noto-serif ">GIỚI THIỆU </span>
        <span className="text-xl sm:text-3xl font-bold  noto-serif text-[#6D3E28] mt-4">CÔ DÂU VÀ CHÚ RỂ</span>
      </div>
      <div className="w-full flex items-center justify-center bg-transparent py-8 sm:py-16 px-4 sm:px-48" style={{ height: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full justify-between items-center px-4 sm:px-12 quicksand'>
          {/* Left */}
          <div className='flex-1 p-4 h-full bg-white bg-opacity-10'>
            <div className=' h-full rounded-xl bg-white bg-opacity-100 flex flex-col justify-end'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719457602/_2_sua_cliwdh.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 20%' }}>
              <div data-aos='fade-in' className='flex flex-col text-[#fff] items-center space-y-1 p-4'>
              <div className="text-lg sm:text-xl inter">NGUYỆT HÀ</div>
                <div className='flex text-sm sm:text-md'> Con ông:&nbsp;<div className="noto-serif">{data.chacodau}</div></div>
                <div className='flex text-sm sm:text-md'> Con bà:&nbsp;<div className="noto-serif">{data.mecodau}</div></div>
      
              </div>
            </div>
          </div>
          <img src='images/heart_top.png' className='self-center px-4' style={{ maxWidth: '100px', maxHeight: '100px' }}></img>
          {/* Right */}
          <div className='flex-1 p-4  h-full bg-white bg-opacity-10'>
            <div className=' h-full rounded-xl bg-white bg-opacity-100 flex flex-col justify-end'
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719457602/_1_sua_w5kdrv.jpg')", backgroundSize: 'cover', backgroundPosition: 'center 10%' }}>
              <div data-aos='fade-in' className='flex flex-col text-[#fff] items-center space-y-1 p-4'>
                <div className="text-lg sm:text-xl inter ">ĐĂNG CHUNG</div>
                <div className='flex text-sm sm:text-md'> Con ông:&nbsp;<div className=" noto-serif">{data.chachure}</div></div>
                <div className='flex text-sm sm:text-md'> Con bà:&nbsp;<div className=" noto-serif">{data.mechure}</div></div>
        
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Countdown */}
      <div id="time" className="w-full flex items-center justify-center bg-[#F6F1F3] pt-8">
        <div className='flex flex-col items-center'>
          <img src="images/rose.png" className='h-auto w-24'></img>
        <span className="text-xl sm:text-2xl font-bold text-gray-800 noto-serif ">THỜI GIAN ĐÁM CƯỚI</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-4 sm:py-8 px-4 sm:px-48 my-0" style={{ height: 'auto', minHeight: '80vh' }}>
        <div className='flex flex-col sm:flex-row w-full h-full space-y-4 sm:space-y-0 sm:space-x-4'>
                    {/* Right */}
                    <div className='w-full sm:p-12 p-4 border border-white'>
            <div className=' bg-white h-full flex flex-col items-center justify-center rounded-xl' style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719496436/z5580215834491_e07381ce51f9295df3293715dd61fc2b_xyncjb.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <Calendar></Calendar>
            </div>
          </div>
          {/* Left */}
          <div className='w-full sm:p-12 p-4 border border-white text-[#fff]' >
            <div className=' bg-white h-full flex flex-col items-center justify-center space-y-4 p-4 rounded-xl '
              style={{ backgroundImage: "url('https://res.cloudinary.com/dzm879qpm/image/upload/v1719413792/calendar_bg_fu3noc.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                           <div className='noto-serif text-xl'>
                CÙNG ĐẾM NGƯỢC THỜI GIAN NHÉ
              </div>
              <div className='parisienne text-3xl'>
                Save the Date
              </div>
              {/* <div className='dancing-script text-3xl'>
                {data.chure} & {data.codau}
              </div> */}
              <img src="https://res.cloudinary.com/dzm879qpm/image/upload/v1719497094/people_qmtqrm.png " className='w-32 animate-pulse'></img>
              <CountdownTimer></CountdownTimer>
           
            </div>
          </div>

        </div>
      </div>
      {/* Love Story */}
      {/* Timeline */}
      {/* <div id="loveStory" className="w-full flex flex-col items-center justify-center py-8">
        <h2 className="text-2xl font-bold mb-4 dancing-script">Our Love Story</h2>
        <div className="flex flex-col items-center justify-center">
          {data.timeline.map((event, index) => (
            <div key={index} className={`flex ${index % 2 === 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} items-stretch justify-center mb-8 w-full px-4 flex-wrap`}>
              <img src={event.image} alt={`Event ${index + 1}`} data-aos="fade-up" className="w-full md:w-1/4 h-auto object-cover rounded-lg" />
              <div data-aos="fade-up" className={`flex flex-col justify-center items-center text-center p-4 w-full md:w-1/4 ${index % 2 === 0 ? 'border-l pl-4' : 'border-r pr-4'}`}>
                <p className="text-lg font-semibold">{event.date}</p>
                <p className="text-md">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Sự kiện cưới */}
      <div id="weddingEvent" className="w-full flex flex-col items-center justify-center bg-[#F6F1F3] py-8">
        <img src="images/rose.png" className='h-24 w-auto'></img>
        <div data-aos='fade-in' className="text-center text-3xl font-bold noto-serif ">Sự kiện cưới</div>
        <p data-aos='fade-in' className="text-center mt-4 px-4 quicksand">Rất mong sự hiện diện của các bạn trong ngày vui của chúng mình ^^</p>
        {/* Tiệc thành hôn */}
        <div className="w-full sm:w-1/2 p-4 border border-[#FFC0CB] rounded-xl flex flex-col items-center justify-center space-y-2 mt-4">
          <div className="text-lg font-semibold noto-serif">TIỆC THÀNH HÔN</div>

            <img src="/images/diachi.jpg" className="w-1/2 rounded-lg" alt="Tiệc cưới" />
          <div className='flex  '> Tổ chức lúc: &nbsp; <div className='noto-serif text-center font-bold text-[#6D3E28] '>{data.thoigian_gai}</div></div>
          <div className='flex  '> Tại địa chỉ: &nbsp; </div>
          <div className='text-center noto-serif font-bold w-full text-[#6D3E28] '>Trung tâm tiệc cưới Louis Center - Sảnh Diamond 1<br></br> 38 Lâm Văn Bền, phường Tân Thuận Tây, Quận 7, Thành Phố Hồ Chí Minh</div>
          <a href="https://maps.app.goo.gl/4xAnobPCpxLuuAPD6" className="rounded-full px-4 py-2 border border-[#C89D9C] hover:bg-[#FFFEEE]">
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
        <div className="w-full flex items-center justify-center bg-[#F6F1F3] py-8 sm:py-16 px-4 text-center ">
          <div className="flex flex-col sm:flex-row w-full max-w-4xl space-y-4 sm:space-y-0 sm:space-x-4">
            {/* Left */}
            <div data-aos="fade-up" className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold text-[#6D3E28]">Mừng cưới đến cô dâu</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_codau.jpg" className="absolute object-cover w-full h-full" alt="Mã cô dâu" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_codau.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_codau.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_codau.sotaikhoan}</div></div>
            </div>
            {/* Right */}
            <div data-aos="fade-up" className="w-full sm:w-1/2 p-4 border border-[#C89D9C] rounded-xl flex flex-col items-center justify-center space-y-4 text-sm sm:text-base">
              <div className="text-lg font-semibold text-[#6D3E28]">Mừng cưới đến chú rể</div>
              <div className="w-48 h-48 relative">
                <img src="images/qrcode_chure.jpg" className="absolute object-cover w-full h-full" alt="Mã chú rể" />
              </div>
              <div className='text-center flex gap-1'> Ngân hàng: <div className="font-medium">{data.nganhang_chure.nganhang}</div></div>
              <div className='text-center flex gap-1'> Tên tài khoản: <div className="font-medium">{data.nganhang_chure.tentaikhoan}</div></div>
              <div className='text-center flex gap-1'> Số tài khoản: <div className="font-medium">{data.nganhang_chure.sotaikhoan}</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center' style={{ 
  position: 'relative', // Ensure zIndex is effective
  height: '70vh',
  backgroundImage: `url("https://res.cloudinary.com/dzm879qpm/image/upload/v1719502294/Picture3_mf8tn3.png")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: 1, // Lower zIndex for the parent
}}>
  <div className="animate-pulse" style={{
    position: 'relative',
    width: '300px',
    height: '300px',
    backgroundImage: `url("https://res.cloudinary.com/dzm879qpm/image/upload/v1719225116/_26_o6wyjw.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center 50%',
    zIndex: 2, // Higher zIndex for the inner div to be in front
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-image 2s ease-in-out',
    opacity: 1,
    borderRadius: '50%',
  }}>
  </div>
  <div className='flex flex-row items-center justify-center my-4 parisienne'>
    <div className='text-[#000000] text-4xl px-2'>Thank you !</div>
  </div>
</div>
{/* Video */}
<div className='flex flex-col mt-4 items-center w-full'>
      <h2 className="w-full text-2xl font-bold text-center noto-serif mb-4 ">Wedding Video</h2>
      </div>
      <div id="weddingVideo"></div>
      <div className="w-full h-screen">
  <iframe src="https://www.youtube.com/embed/YQJnHBSGd6A" title="Đám Cưới Nguyệt Hà - Đăng Chung" 
    className="w-full h-full" frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
</div>
<div className='flex flex-col items-center w-full'>
      <div className="album-description w-full text-center p-4">
        <p className="text-lg">Tắt một nhạc nếu bị trùng nhau nhé {"<3"} </p>
      </div>
      </div>
      <footer style={{ width: '100%', textAlign: 'center', padding: '10px', backgroundColor: '#f0f0f0' }}>
        Designed by <span className="font-medium">em Sơn</span>
      </footer>
    </main>
  );
}
