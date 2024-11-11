import { useEffect } from "react";
import discount from "../image/dvgadvas-20201013084516.png";
const Home = () => {
  useEffect(() => {
    setInterval(function () {
      var e = document.querySelector("#stock");
      var num = parseFloat(e.outerText);
      if (num > 1) {
        e.innerText = num - 1;
      }
    }, 1000);
  }, []);
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
    </>
  );
};

export default Home;
