import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import image1 from "../image/snapedit_1715944993398-20240517112645-6h-le.jpeg";
import image2 from "../image/snapedit_1715945004320-20240517112645-rwdes.jpeg";
import image3 from "../image/vn-11134207-7r98o-luln935u23vp44-20240517112645-frax8.jpg";
import image4 from "../image/vn-11134207-7qukw-lfkq2cmodfn949-20240517110742-kglxr.jpg";
import image5 from "../image/vn-11134207-7qukw-licxggfgskpede-20240517110742-m_odc.jpg";
import image6 from "../image/vn-11134202-7qukw-leqy4j6n24s316-20240517110742-cszoa.jpg";
import image7 from "../image/vn-11134202-7qukw-leppll150x4i3e-20240517110742-zsjao.jpg";
import image8 from "../image/vn-11134202-7qukw-lepplkxj675eb3-20240517110742-8dbpm.jpg";
import image9 from "../image/vn-11134207-7qukw-licwa26ke02a3d-20240517110742-rarg9.jpg";
import image10 from "../image/vn-11134207-7qukw-licxggfgy6z659-20240517110742-wreci.jpg";
import image11 from "../image/vn-11134207-7qukw-licxggfgtz9u48-20240517110742-2we2v.jpg";

import discount from "../image/dvgadvas-20201013084516.png";

const listImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
];
const Home = () => {
  const stars = Array(5).fill("⭐");
  const text = "Mua ngay"; // Chuỗi gốc
  const [displayedText, setDisplayedText] = useState(text); // State cho chuỗi đang hiển thị
  const [isErasing, setIsErasing] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    var stockInterval = setInterval(function () {
      var e = document.querySelector("#stock");
      var e1 = document.querySelector("#stock-second");
      var num = parseFloat(e.outerText);
      if (num > 1) {
        e.innerText = num - 1;
        e1.innerHTML = num - 1;
      }
    }, 3000);
    var viewerInterval = setInterval(function () {
      var minNumber = 300;
      var maxNumber = 900;
      var randomnumber = Math.floor(
        Math.random() * (maxNumber - minNumber + 1) + minNumber
      );
      var e = document.querySelector("#viewer");
      e.innerText = randomnumber;
    }, 3000);

    return () => {
      clearInterval(stockInterval);
      clearInterval(viewerInterval);
    };
  }, []);

  useEffect(() => {
    let timer;

    if (isErasing) {
      // Xóa từng chữ
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1)); // Xóa 1 ký tự từ cuối chuỗi
        }, 100); // 200ms giữa mỗi lần xóa
      } else {
        // Khi xóa xong, đổi sang chế độ hiển thị lại từng chữ
        setIsErasing(false);
      }
    } else {
      // Hiển thị lại từng chữ
      if (displayedText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayedText((prev) => text.slice(0, prev.length + 1)); // Thêm 1 ký tự
        }, 100); // 200ms giữa mỗi lần hiển thị thêm ký tự
      } else {
        // Khi đã hiển thị xong, đợi 1 giây rồi bắt đầu lại quá trình xóa
        timer = setTimeout(() => {
          setIsErasing(true);
        }, 500);
      }
    }

    return () => clearTimeout(timer); // Xóa timer khi component thay đổi
  }, [displayedText, isErasing]);
  return (
    <>
      <div className="bg-custom-radial-header px-2">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <h3 className="text-base font-sriracha drop-shadow-header text-white">
              Sale sốc
            </h3>
            <span className="text-[45px] font-oswald text-white font-bold animate-pulse-scale">
              50%
            </span>
          </div>
          <div>
            <button className="uppercase font-quicksand py-1 px-6 text-[18px] bg-white rounded-[20px] font-bold animate-flash">
              Mua ngay
            </button>
          </div>
        </div>
        <div className="pb-2">
          <h2 className="font-roboto text-white">
            SỐ LƯỢNG QUÀ TẶNG CHỈ{" "}
            <span id="stock" className="text-[#e8b730] animate-flash">
              150
            </span>{" "}
            CÒN KÍNH
          </h2>
        </div>
      </div>
      <div className="relative">
        <div className="w-[145px] h-[185px] bg-main relative">
          <div className="w-4 h-4 absolute top-0 left-1/4 bg-white"></div>
        </div>
        <div className="absolute left-1 top-5">
          <div className="relative bg-sub-main px-3 pt-2 pb-6 mx-3">
            <h3 className="text-[27px] text-white font-bold">
              Kính Mắt Đổi Màu Bolan
            </h3>
            <div className="absolute bottom-[-25px] left-3 bg-inherit bg-banner-image py-2 px-4">
              <h3 className="text-base font-sriracha text-black">
                Đẹp Mọi Góc Nhìn - Sang Mọi Khoảng Khắc
              </h3>
            </div>
          </div>
          <div className="text-[19px] mt-9 pl-8 text-white font-bold">
            KHUYẾN M<span className="text-sub-main">ÃI GIẢM</span>
          </div>
          <div className="pl-4 pr-1 relative">
            <img
              src={discount}
              alt="discount"
              className="w-[250px] h-[160px]"
            />
            <h3 className="absolute top-0 right-0 py-1 px-4 text-[#323232] border-[#b8b8b8] border animate-rotate-word">
              Duy nhất hôm nay
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-36">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {listImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {listImages.map((image) => (
            <SwiperSlide key={image}>
              <img src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="shadow-custom-bottom">
        <div className="flex gap-1 justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23px"
            height="23px"
            preserveAspectRatio="none"
            viewBox="0 0 1792 1896.0833"
            fill="rgba(58, 58, 58, 1.0)"
          >
            <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5T896 1280t-316.5-131.5T448 832q0-121 61-225-229 117-381 353 133 205 333.5 326.5T896 1408t434.5-121.5T1664 960zM944 576q0-20-14-34t-34-14q-125 0-214.5 89.5T592 832q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5T896 1536t-499.5-139T20 1029Q0 994 0 960t20-69q140-229 376.5-368T896 384t499.5 139T1772 891q20 35 20 69z"></path>{" "}
          </svg>
          <h3 className="text-xs text-[#3a3a3a] font-bold">
            Đang có{" "}
            <span
              id="viewer"
              className="text-red-custom animate-swing-custom text-base"
            >
              900
            </span>{" "}
            người đang xem sản phẩm này
          </h3>
        </div>
        <div className="px-3">
          <h2 className="font-noto text-[23px] font-bold">
            Kính Mắt Đổi Màu Cao Cấp
          </h2>
          <div className="pl-3">
            <h4 className="font-quicksand text-[17px] font-bold mb-2">
              Thời trang - Cá Tính - Phong Cách
            </h4>
            <div className="flex gap-1">
              <div className="flex gap-1">
                <span className="text-base underline text-[#AA1F1F]">4.9</span>
                <div>
                  {stars.map((star, index) => (
                    <span key={index}>{star}</span>
                  ))}
                </div>
              </div>
              <div>|</div>
              <div className="flex gap-1 text-sm text-[#6f6f6f] items-center">
                <span className="text-base underline text-black">1200</span>
                Đánh giá
              </div>
              <div>|</div>
              <div className="flex gap-1 text-sm text-[#6f6f6f] items-center">
                <span className="text-base underline text-black">650 194</span>
                Đã bán
              </div>
            </div>
            <div className="text-[15px] text-[#585858] mt-2 mb-4">
              Sắp hết hàng chỉ còn{" "}
              <span
                id="stock-second"
                className="text-[#ea744d] font-bold text-xl"
              >
                150
              </span>{" "}
              sản phẩm cuối cùng
            </div>
            <div className="text-[17px] text-gray-custom font-bold">
              Đặt mua hôm nay
              <br />
              Nhận ngay giảm giá 50%
            </div>
          </div>
          <div className="ml-2 mt-3 p-2 bg-gray-100">
            <div className=" flex justify-between flex-nowrap items-center">
              <span className="line-through text-sm text-gray-custom pl-3">
                150.000VND
              </span>
              <span className="text-[18px] font-bold text-[#f96e40] animate-flash">
                75.000Đ
              </span>
              <button className="border-none bg-orange-custom text-white font-bold text-sm py-1 px-4 rounded-2xl flex gap-1">
                Giảm giá 50%
                <span className="animate-flash">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9px"
                    height="18px"
                    preserveAspectRatio="none"
                    viewBox="0 0 974.0545 1896.0833"
                    fill="rgba(255, 236, 147, 1.0)"
                  >
                    {" "}
                    <path d="M885 566q18 20 7 44L352 1767q-13 25-42 25-4 0-14-2-17-5-25.5-19t-4.5-30l197-808-406 101q-4 1-12 1-18 0-31-11-18-15-13-39l201-825q4-14 16-23t28-9h328q19 0 32 12.5t13 29.5q0 8-5 18L443 651l396-98q8-2 12-2 19 0 34 15z"></path>{" "}
                  </svg>
                </span>
              </button>
            </div>
            <p className="text-center text-gray-custom text-sm">
              Miễn phí ship hàng toàn quốc
            </p>
          </div>
          <div className="flex justify-center">
            <button className="text-[19px] h-[52px] bg-button-background text-white py-3 px-8 font-bold rounded-[60px] mt-3 flex gap-1">
              {displayedText}
              <div className="h-full w-1 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
