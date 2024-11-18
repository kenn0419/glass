import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import image1 from "../image/51a33e50d09b6bc5328a.jpg";
import image2 from "../image/93f980126ad9d18788c8.jpg";
import image3 from "../image/400aa5964f5df403ad4c.jpg";
import image4 from "../image/526a081de2d6598800c7.jpg";
import image5 from "../image/fcae5149b98202dc5b93.jpg";
import image6 from "../image/4c3ab147598ce2d2bb9d.jpg";
import image7 from "../image/6ced21f0ca3b7165282a.jpg";
import image8 from "../image/5bdee3b0-59fe-41a9-81a1-96b9d72487ae.jpg";
import image9 from "../image/306c27dacf11744f2d00.jpg";
import image10 from "../image/vn-11134207-7qukw-licxggfgy6z659-20240517110742-wreci.jpg";
import image11 from "../image/vn-11134207-7qukw-licxggfgtz9u48-20240517110742-2we2v.jpg";
import image12 from "../image/vn-11134207-7r98o-llxa54dvm127f0-20240517114039-b9oqk.jpg";
import image13 from "../image/vn-11134207-7r98o-lmsl0hng78inb5_tn-20240517114011-g08fb.jpg";
import image14 from "../image/vn-11134208-7r98o-llxa5i2n41y71c-20240517133101-22iuu.jpg";
import image15 from "../image/9df215a9-7bcc-4f6e-810d-74933e131df4-20240517131143-55crr.jpg";
import image16 from "../image/91c8c04e-6f06-46c0-a586-ab4cd2277ccd-20240517125958-ztsax.jpg";
import image17 from "../image/710cc991-cca1-49c8-b919-ac4886a3e706-20240517131926-bew9u.jpg";
import image18 from "../image/938e5e8c-7884-4637-9a8a-de9ea6c73783-20240517131926-ioeuj.jpg";
import image19 from "../image/256fcbe7-e6df-4aeb-96b9-75516ae62006-20240517125958--qfn2.png";
import image20 from "../image/6e0c8ea6-ee27-4628-9574-b5361166678d-20240517223820-fihk-.png";
import image21 from "../image/a68938b71770bd2ee46115-20240130232841-s1coe.jpg";
import image22 from "../image/th-11134103-7r98o-lvblooqzena7-20240517135048-snult.jpg";
import image23 from "../image/f3723a2d-f335-4fbe-a992-5f5d93660390-20240517224627-memni.jpg";
import image24 from "../image/kinh-20240517110752-_l1dp.jpg";
import image25 from "../image/vn-11134103-22080-2c1y9v4mj3fv7d-20220812020342.jpg";
import image26 from "../image/5fd378cb-6fd7-48f5-964e-ea5c36acdfc9-20240517224627-l--yj.jpg";
import image27 from "../image/vn-11134103-7qukw-lft5xemena7-20240517135006-_zuub.jpg";
import image28 from "../image/vn-11134103-7qukw-lgk4pzqxapy-02-20230902085705-lpis8.jpg";
import image29 from "../image/vn-11134103-7qukw-lft5xemena7-20240517135006-_zuub.jpg";
import image30 from "../image/vn-11134103-7qukw-lft5woex5ena7-20240517135006-cvgai.jpg";

import discount from "../image/dvgadvas-20201013084516.png";
import check from "../image/check.png";
import icon from "../image/icon-20200914085434.png";
import delivery from "../image/delivery.png";
import returnImg from "../image/return.png";
import guarantee from "../image/guarantee.png";
import instruct from "../image/instruct.png";
import like from "../image/df-20191029092328.png";

import visa from "../image/visa.svg";
import mastercard from "../image/mastercard.svg";
import bct from "../image/bo-cong-thuong.svg";

import { useForm } from "react-hook-form";
import InputForm from "../component/InputForm";
import axios from "axios";
import Swal from "sweetalert2";
import { FaCamera, FaPhoneAlt, FaRegStar, FaStar } from "react-icons/fa";
import { IoIosLock, IoMdHome } from "react-icons/io";
import { TbNotes } from "react-icons/tb";
import { MdOutlineMessage } from "react-icons/md";

const listImages = [
  // image1,
  image5,
  image2,
  image3,
  image4,
  // image6,
  // image7,
  // image8,
  // image9,
  // image10,
  // image11,
];

const reviews = [
  {
    id: 1,
    name: "Vũ Nguyên",
    avatar: image21,
    comment:
      "giao hàng nhanh, kính đẹp, shop còn có cả hộp kính và khăn lau kính, tuy lần trước mua hàng không thành công lắm ung mà shop có trả lời tư vấn nhiệt tình, cách phục vụ của shop cảm thấy ok.",
    images: [image22, image23],
    like: 4,
    time: "3 tiếng trước",
    response: {
      avatar: image24,
      name: "BOLAN EYEWEAR",
      comment: "Cảm ơn bạn rất nhiều đã ủng hộ BOLAN EYEWEAR !",
      time: "2 tiếng trước",
    },
  },
  {
    id: 2,
    name: "Lê Huỳnh Như",
    avatar: image25,
    comment:
      "gói cận thận, giao hàng nhanh - mới test đổi màu r mới đánh giá 😗 không còn j để chê 10₫",
    images: [image26, image27],
    like: 2,
    time: "1 ngày trước",
  },
  {
    id: 3,
    name: "Trung Bùi",
    avatar: image28,
    comment:
      "Kính giá 99k là xứng đáng , đeo ko đau tai , kính nhìn rõ nha. Có vẻ đi ngoài nắng và dưới đèn xe là đc nha ở ngoài nhìn đẹp lắm màu đeo sang nha. Có cái kính hơi to hơn mình nghĩ , đặc biệt shop tư vấn rất nhiệt tình",
    images: [image29, image30],
    like: 4,
    time: "1 tuần trước",
  },
];

const privacyList = [
  {
    imgage: returnImg,
    title: "ĐỔI TRẢ",
    desc: "Trả hàng miễn phí trong 7 ngày",
  },
  {
    imgage: guarantee,
    title: "BẢO HÀNH",
    desc: "Chính hãng 100% cam kết hoàn tiền",
  },
  {
    imgage: delivery,
    title: "VẬN CHUYỂN",
    desc: "Toàn quốc, thanh toán khi nhận hàng",
  },
];
const Home = () => {
  const stars = Array(5).fill("⭐");
  const text = "Mua ngay"; // Chuỗi gốc
  const [displayedText, setDisplayedText] = useState(text); // State cho chuỗi đang hiển thị
  const [isErasing, setIsErasing] = useState(true);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [typeList, setTypeList] = useState([]);
  const [quantity, setQuantity] = useState(null);
  const [myopia, setMyopia] = useState(null);
  const [message, setMessage] = useState(null);
  const renderStar = (starNumbers, size) => {
    const stars = [];
    starNumbers = Math.round(starNumbers);
    for (let i = 0; i < starNumbers; i++) {
      stars.push(<FaStar key={`star ${i}`} color="orange" size={size || 16} />);
    }
    for (let j = 0; j < 5 - starNumbers; j++) {
      stars.push(
        <FaRegStar key={`regstar ${j}`} color="orange" size={size || 16} />
      );
    }
    return stars;
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
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

  const handleCheckbox = (value) => {
    console.log(value);
    setTypeList((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleRegister = async (data) => {
    data.quantity = quantity;
    data.myopia = myopia;
    data.message = message;
    data.type = typeList.join(", ");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycby41nOjhGAXQBJM_kvrlgPVz06_RQYdmrm2VDws4zRjfBZO55HPTq-cm5a4zZgLBUBScg/exec";
    axios
      .post(scriptURL, data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
      .then(() => {
        reset({
          name: "",
          phone: "",
          address: "",
        });
        Swal.fire({
          icon: "success",
          title: "GỬI THÔNG TIN THÀNH CÔNG",
          text: "Cảm ơn bạn đã quan tâm. Bạn vui lòng đợi giây lát, chúng tôi sẽ liên hệ bạn để xác nhận đặt hàng",
        }).then(() => {
          window.location.reload();
        });
      })
      .catch((error) => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra khi gửi dữ liệu, vui lòng thử lại sau.");
      });
  };
  return (
    <>
      <div className="bg-[#6A2F8D] px-2 fixed w-[420px] top-0 z-30">
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <h3 className="text-base font-sriracha drop-shadow-header text-white">
              Sale sốc
            </h3>
            <span className="text-[45px] font-oswald text-white font-bold animate-pulse-scale">
              50%
            </span>
          </div>
          <div className="">
            <button className="uppercase font-quicksand py-1 px-6 text-[18px] bg-white rounded-[20px] font-bold animate-flash">
              Mua ngay
            </button>
          </div>
        </div>
        <div className="pb-2">
          <h2 className="font-roboto text-white">
            SỐ LƯỢNG QUÀ TẶNG CHỈ CÒN{" "}
            <span id="stock" className="text-[#e8b730] animate-flash">
              150
            </span>{" "}
            SẢN PHẨM
          </h2>
        </div>
      </div>
      <div className="relative mt-[100px]">
        <div className="w-[145px] h-[185px] bg-purple-700 relative">
          <div className="w-4 h-4 absolute top-0 left-1/4 bg-white"></div>
        </div>
        <div className="absolute left-1 top-5">
          <div className="relative bg-purple-500 px-3 pt-2 pb-6 mx-3">
            <h3 className="text-[27px] text-white font-bold w-[365px]">
              LILYFRESH
            </h3>
            <div className="absolute bottom-[-25px] left-3 bg-inherit bg-banner-image py-2 px-4">
              <h3 className="text-sm font-sriracha text-black capitalize">
                CÔNG TY TNHH PHÁT TRIỂN SỨC KHỎE CỘNG ĐỒNG QUỐC GIA VIỆT NAM
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
          <h2 className="font-noto text-xl font-bold">
            BỘ MUỐI DUNG DỊCH VỆ SINH PHỤ NỮ
          </h2>
          <div className="pl-3">
            <h4 className="font-quicksand text-[17px] text-center font-bold mb-2">
              Hộp 1 lọ và 1 bình rửa
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
          <div className="flex justify-center pb-2">
            <button className="text-[19px] h-[52px] bg-button-background text-white py-3 px-8 font-bold rounded-[60px] mt-3 flex gap-1">
              {displayedText}
              <div className="h-full w-1 bg-white"></div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-3 px-1">
        <h3 className="text-[22px] font-bold underline underline-offset-4">
          Đau đầu vì ?
        </h3>
        <h4 className="text-sub-main font-bold text-lg pl-2">
          Chưa tìm được dung dịch vệ sinh phù hợp
        </h4>
        <div className="mx-4 flex flex-col items-center text-sm relative mt-3">
          <h4>Mùi hôi, nhiễm khuẩn, khó chịu thân thể</h4>
          <h4>............LILYFRESH.............</h4>
          <h4 className="uppercase">Tự tin - tươi trẻ mọi thời điểm</h4>
          <h3 className="absolute top-[-20  px] right-[-10px] text-[57px] font-bold text-gradient">
            ?
          </h3>
        </div>
        <div className="w-[277px] h-[50px] mx-auto relative bg-main rounded-3xl mt-3">
          <div className="w-full h-full capitalize text-xl font-bold flex justify-center items-center text-white rotate-[-3deg] border border-white rounded-3xl">
            Đại diện thương hiệu
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-3">
          {/* <div className="flex flex-col gap-4 w-1/2">
            <div className="relative">
              <img
                src={image12}
                alt="Kính thời trang"
                className="rounded-lg w-full"
              />
            </div>
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />
                Mắt kính được sử dụng vật liệu cao cấp đem lại độ nét cao với 4
                lớp giúp thay đổi màu sắc nhanh chóng phù hợp địa hình thời tiết
              </li>
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />
                Chống tia UV400, tia xanh
              </li>
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />2 màu sắc cực dễ
                phối đồ
              </li>
            </ul>
          </div>
          <div className="width-1px h-[412px] bg-gray-custom"></div>
          <div className="flex flex-col gap-4 w-1/2">
            <ul className="list-none space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />
                Khung kính được làm từ kim loại Titanium chắc chắn bền bỉ (17mm)
              </li>
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />
                Gọng kính làm từ nhựa TR90 dẻo dai (150mm)
              </li>
              <li className="flex items-start gap-2 text-[13px]">
                <img src={check} className="w-5 h-5" alt="" />
                Thân kính ôm sát tạo cảm giác dễ chịu
              </li>
            </ul>
            <br />
            <div className="relative">
              <img
                src={image13}
                alt="Gọng thời trang"
                className="rounded-lg w-full"
              />
            </div>
          </div> */}
          <img src={image1} alt="" />
        </div>
        <div className="mt-2 w-full height-1px bg-gray-custom"></div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-[277px] h-[50px] mx-auto relative bg-main rounded-3xl my-3">
          <div className="w-full h-full capitalize text-[24px] font-bold flex justify-center items-center text-white rotate-[-3deg] border border-white   rounded-3xl">
            Mô Tả Chi Tiết
          </div>
        </div>
        <img src={image8} alt="image-8" />
        {/* <img src={image10} alt="image-10" /> */}
        <div className="mt-3 flex flex-col items-center">
          <h4 className="text-[28px] font-play-fair font-bold text-main">
            Chính sách
          </h4>
          <img src={icon} className="w-[187px] h-[26px]" alt="" />
          <div className="flex gap-4 justify-center p-4 mt-3">
            {privacyList.map((item, index) => (
              <div
                className="flex flex-col items-center border px-2 py-6 relative"
                key={index}
              >
                <div className="bg-main w-10 h-10 text-white rounded-full flex justify-center items-center absolute top-[-20px] left-1/2 translate-x-[-50%] z-20 mb-4">
                  <img className="w-[25px] h-[25px]" src={item.imgage} alt="" />
                </div>
                <h3 className="font-bold text-gray-custom mb-2 text-[13px] mt-2">
                  {item.title}
                </h3>
                <p className="text-center text-gray-custom text-xs p-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-1 px-1">
            <img src={image9} alt="" />
            {/* <img src={image16} alt="" />
            <img src={image17} className="h-[230px] w-full" alt="" />
            <img src={image18} className="h-[230px]" alt="" /> */}
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex gap-2 items-baseline">
          <div className="w-10 h-3 bg-main"></div>
          <h4 className="text-3xl font-bold text-white text-stroke">ĐẶT MUA</h4>
        </div>
        <div className="px-12">
          <h3 className="text-main text-3xl font-bold">NHẬN NGAY ƯU ĐÃI</h3>
          <div className="flex items-center gap-2 h-full">
            <img
              src={discount}
              className="w-1/2 object-contain"
              alt="discount"
            />
            <div className="h-[50px] w-[1px] bg-gray-400"></div>
            <div className="flex flex-col">
              <span className="font-bold text-[17px] line-through">
                150.000 VNĐ
              </span>
              <span className="text-[23px] font-bold animate-flash text-main">
                75.000 VNĐ
              </span>
            </div>
          </div>
          <div className="text-center mt-3">
            <span className="bg-main text-white py-2 px-8 rounded-3xl">
              Miễn phí ship hàng toàn quốc
            </span>
          </div>
        </div>
        <div className="flex justify-between relative">
          {/* <div className="h-[300px] w-5 bg-main"></div>
          <div className="absolute left-0 top-[-10px]">
            <div className="relative">
              <img src={image19} className="w-[217px] h-[333px]" alt="" />
              <div className="w-full h-6 bg-main absolute bottom-[-17px] left-0"></div>
            </div>
          </div> */}
          <img src={image6} className="w-full my-3 h-auto" alt="" />
        </div>
      </div>
      <div className="bg-[#6A2F8D] rounded-3xl">
        <div className="flex flex-col items-center py-2 px-5 ">
          <h1 className="uppercase font-tino text-gradient-white">
            Đăng ký nhận ưu đãi
          </h1>
          <span className="font-trirong font-bold text-sm text-white">
            DUY NHẤT HÔM NAY
          </span>
        </div>
        <div className="bg-[#F9F8F8] flex items-center justify-between px-3 py-2">
          <span className="text-[15px] line-through">150.000đ</span>
          <span className="text-xl text-red-custom font-bold">
            Chỉ còn 75.000đ
          </span>
          <div className="bg-main-custom p-2 text-white font-bold text-sm rounded-tl-2xl rounded-br-2xl animate-pulse-scale">
            Giảm tới 50%
          </div>
        </div>
        <div className="px-3 py-1">
          <div>
            <h4 className="text-sm text-white font-bold">
              Giá khuyến mãi sẽ kết thúc
            </h4>
          </div>
          <div>
            <form className="" onSubmit={handleSubmit(handleRegister)}>
              <div className="flex gap-4 mt-5 items-center">
                <InputForm
                  register={register}
                  errors={errors}
                  id="name"
                  validate={{
                    required: "Yêu cầu nhập trường này",
                  }}
                  style={`flex-auto`}
                  placeholder="Họ và tên"
                  type="text"
                />
                <InputForm
                  register={register}
                  errors={errors}
                  id="phone"
                  validate={{
                    required: "Yêu cầu nhập trường này",
                  }}
                  style={`flex-auto`}
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="flex gap-4 mt-2 items-center flex-wrap">
                <InputForm
                  register={register}
                  errors={errors}
                  id="address"
                  style={`flex-auto`}
                  placeholder="Địa chỉ cụ thể(Số nhà/Thôn/Xóm...)"
                  validate={{
                    required: "Yêu cầu nhập trường này",
                  }}
                />
              </div>
              <div className="flex gap-4 my-3 items-center flex-wrap">
                <select
                  name="quantity"
                  id="quantity"
                  className="w-full p-2 rounded-lg text-xs"
                  required
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option value="" disabled defaultValue hidden>
                    Số lượng
                  </option>
                  <option value="1 Kính + Fullbox : 75k + 25k Ship">
                    {"1 Kính + Fullbox : 75k + 25k Ship"}
                  </option>
                  <option value="2 Kính + Fullbox : 149k + Miễn phí Ship">
                    2 Kính + Fullbox : 149k + Miễn phí Ship
                  </option>
                </select>
              </div>
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                <div className="col-span-1 row-span-1 flex flex-col gap-2 mt-2 flex-wrap px-2 justify-center bg-white rounded-lg h-full">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Trắng gọng Đen"
                      className="mr-2 text-black border-gray-400 focus:ring-0"
                      checked={typeList.includes("Trắng gọng Đen")}
                      onChange={() => handleCheckbox("Trắng gọng Đen")}
                    />
                    <label
                      htmlFor="Trắng gọng Đen"
                      className="text-black text-xs cursor-pointer"
                    >
                      Trắng gọng Đen
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="Trắng gọng Xám"
                      checked={typeList.includes("Trắng gọng Xám")}
                      onChange={() => handleCheckbox("Trắng gọng Xám")}
                      className="mr-2 text-white border-gray-400 focus:ring-0"
                    />
                    <label
                      htmlFor="Trắng gọng Xám"
                      className="text-black text-xs cursor-pointer"
                    >
                      Trắng gọng Xám
                    </label>
                  </div>
                </div>
                <div className="col-span-1 row-span-2 mt-2 items-center flex-wrap">
                  <textarea
                    name="message"
                    id="message"
                    className="h-full rounded-lg text-sm placeholder:text-xs text-black placeholder:text-black p-2 w-full"
                    placeholder="Để lại lời nhắn cho chúng tôi"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-span-1 row-span-1 flex gap-4 mt-2 items-center flex-wrap">
                  <select
                    name="myopia"
                    id="myopia"
                    className="w-full h-full p-2 rounded-lg text-xs"
                    required
                    onChange={(e) => setMyopia(e.target.value)}
                  >
                    <option value="" disabled defaultValue hidden>
                      Độ cận
                    </option>
                    <option value="( Chống ánh sáng xanh ) 0°">
                      {"( Chống ánh sáng xanh ) 0°"}
                    </option>
                    <option value="Cận thị 1°">Cận thị 1°</option>
                    <option value="Cận thị 1.5°">Cận thị 1.5°</option>
                    <option value="Cận thị 2°">Cận thị 2°</option>
                    <option value="Cận thị 2.5°">Cận thị 2.5°</option>
                    <option value="Cận thị 3°">Cận thị 3°</option>
                    <option value="Cận thị 3.5°">Cận thị 3.5°</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-center items-center w-[300px] mx-auto bg-main-custom py-3 px-8 rounded-tl-3xl rounded-br-3xl mt-4 animate-pulse-scale">
                <button
                  type="submit"
                  className="text-white font-tino font-bold text-[23px] animate-flash"
                >
                  NHẬN ƯU ĐÃI
                </button>
              </div>
              <p className="w-[297px] mx-auto text-white mt-3 mb-4 text-xs text-center">
                Sau khi các bạn đặt hàng, chúng tôi sẽ liên hệ sớm, tư vấn xác
                nhận đơn hàng
              </p>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-white p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Khách hàng nhận xét</h2>
            <span className="text-blue-500 text-base font-bold">
              Xem tất cả
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="text-center w-1/3">
              <p className="text-5xl text-gray-800">4.9</p>
              <div className="flex justify-center mt-1">
                <span className="flex">
                  {renderStar(5, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
              </div>
              <p className="text-gray-500 text-xs mt-1">3,315 đánh giá</p>
            </div>
            <div className="w-[1px] h-[120px] bg-gray-500"></div>
            <div className="flex flex-col justify-center w-full">
              <div className="flex items-center text-sm mb-1">
                <span className="flex">
                  {renderStar(5, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                    style={{ width: "95%" }}
                  ></div>
                </div>
                <span className="text-gray-600">3,214</span>
              </div>
              <div className="flex items-center text-sm mb-1">
                <span className="flex">
                  {renderStar(4, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="text-gray-600">54</span>
              </div>
              <div className="flex items-center text-sm mb-1">
                <span className="flex">
                  {renderStar(3, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <span className="text-gray-600">34</span>
              </div>
              <div className="flex items-center text-sm mb-1">
                <span className="flex">
                  {renderStar(2, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
                <span className="text-gray-600">12</span>
              </div>
              <div className="flex items-center text-sm mb-1">
                <span className="flex">
                  {renderStar(1, 18).map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </span>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-2 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full"
                    style={{ width: "5%" }}
                  ></div>
                </div>
                <span className="text-gray-600">1</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-gray-500 text-sm mt-4 pb-3 border-b border-gray-300">
            Đây là thông tin người mua đánh giá shop bán sản phẩm này có đúng mô
            tả không.
          </p>
        </div>
        <div className="px-3 py-2 bg-white">
          {/* Header */}
          <div className="flex flex-col mb-2">
            <h3 className="text-lg font-semibold">Tất cả bình luận</h3>
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-[#5c5c5c] font-bold">176 Bình luận</p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">Sắp xếp theo</span>
                <span className="flex gap-1 items-center text-[15px] text-[#5f5f5f] bg-[#eee] border border-[#bfbfbf] px-2 py-1 rounded-md">
                  Hàng đầu
                  <img src={instruct} className="w-4 h-8" alt="instruct" />
                </span>
              </div>
            </div>
          </div>
          <div>
            {reviews.map((item) => (
              <div className="flex items-start gap-2 mb-5" key={item.id}>
                <img
                  src={item.avatar}
                  alt="User Avatar"
                  className="rounded-full w-12 h-12"
                />
                <div className="w-[90%]">
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-gray-700 mt-1 text-sm">{item.comment}</p>
                  <div className="flex items-center mt-2">
                    <span className="flex gap-1">
                      {renderStar(5, 16).map((item, index) => (
                        <span key={index}>{item}</span>
                      ))}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    {item.images?.map((el, index) => (
                      <img
                        key={index}
                        src={el}
                        alt="Review Image 1"
                        className="w-28 h-28 rounded-md object-cover"
                      />
                    ))}
                  </div>
                  <div className="flex items-center mt-3 text-gray-500 text-sm">
                    <button className="mr-4 text-[#4366b0] text-[13px]">
                      Thích - Phản hồi
                    </button>
                    <span className="flex items-center gap-1">
                      <img src={like} alt="like" className="w-6 h-6" />{" "}
                      {item.like}
                    </span>
                    <span className="ml-4">{item.time}</span>
                  </div>

                  {item?.response && (
                    <div className="flex items-start gap-4 mt-4 pl-2 border-l border-gray-200">
                      <img
                        src={item.response.avatar}
                        alt="Shop Avatar"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold">{item.response.name}</h4>
                        <p className="text-gray-700 mt-1 text-sm">
                          {item.response.comment}
                        </p>
                        <span className="text-[13px] mt-1 text-[#4366b0] ">
                          Phản hồi -{" "}
                          <span className="text-gray-400">
                            {item.response.time}
                          </span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#6A2F8D] text-white py-8 px-4">
        <h2 className="text-3xl font-bold">LILYFRESH</h2>
        <p className="text-lg mt-1 pl-6 font-bold">Uy tín tạo thương hiệu</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-end gap-2">
            <span>
              <IoMdHome size={24} />
            </span>
            <p className="text-sm">Address: 15 La Khê, Hà Đông, Hà Nội</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaPhoneAlt size={20} />
            </span>
            <p className="text-sm">Hotline: +84382562666</p>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <FaCamera size={24} />
            </span>
            <p className="text-sm">INS : BolenEyewear</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-6">
          Luôn Luôn đi đầu về CHẤT LƯỢNG
        </h3>
        <div className="mt-4 grid grid-cols-6 gap-2">
          <div className="flex items-center gap-2 col-span-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              viewBox="0 0 100 100"
              x="0px"
              y="0px"
              preserveAspectRatio="none"
              width="23px"
              height="23px"
              fill="rgba(255, 255, 255, 1.0)"
            >
              <title>Artboard 26</title>
              <path d="M98.85,61.58a4.85,4.85,0,0,1-3.52,5.89L40.13,81.36A9.78,9.78,0,1,1,29.35,76.9c.31-.08.63-.14.94-.19L17.06,24.11,2.78,12.44A4.85,4.85,0,1,1,8.92,4.93L24.44,17.62a4.85,4.85,0,0,1,1.63,2.57L39,71.64,93,58.06A4.85,4.85,0,0,1,98.85,61.58Zm-65.08-40a3.57,3.57,0,0,1,2.59-4.33l8.46-2.13,6.26-1.57L60,11.33l6.66-1.67,7.68-1.93a3.57,3.57,0,0,1,4.33,2.59l9.55,37.94a3.57,3.57,0,0,1-2.59,4.33L47.65,62.13a3.57,3.57,0,0,1-4.33-2.59ZM50.89,31.77c1,3.85,4.37,5.11,9,5.47,3.19.25,4.7.89,5.08,2.4s-.93,2.85-3.19,3.42a13.79,13.79,0,0,1-4.48.34,2.43,2.43,0,0,0-.8.06,2.32,2.32,0,0,0-1.77,2.23v.2a2.37,2.37,0,0,0,2.22,2.38,18.93,18.93,0,0,0,5-.35l.46,1.83a2,2,0,1,0,3.89-1l-.53-2.11c4.37-1.94,6.11-5.59,5.22-9.13s-3.36-5.28-8.51-5.76c-3.7-.42-5.3-.91-5.63-2.22-.28-1.11.27-2.44,2.86-3.08a12.59,12.59,0,0,1,3.64-.38A2.29,2.29,0,0,0,64,26a2.37,2.37,0,0,0-.55-4.67,17.49,17.49,0,0,0-3.76.39l-.39-1.55a2,2,0,0,0-3.89,1L55.82,23C51.78,24.91,50,28.27,50.89,31.77Z"></path>
            </svg>
            <p className="text-sm ">Kiểm tra hàng trước khi nhận</p>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <IoIosLock size={23} />
            <p className="text-sm">Bảo Mật</p>
          </div>
          <div className="flex items-center gap-2 col-span-4">
            <TbNotes size={23} />
            <p className="text-sm">Uy tín hàng đầu</p>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <MdOutlineMessage size={23} />
            <p className="text-sm">24/7 Hỗ trợ</p>
          </div>
        </div>
        <div className="mt-6 flex gap-1 bg-white p-2 w-[180px] justify-center">
          <img src={visa} alt="Visa" className="w-10" />
          <img src={mastercard} alt="MasterCard" className="w-10" />
          <img src={bct} alt="Registered" className="w-16" />
        </div>
      </div>
    </>
  );
};

export default Home;
