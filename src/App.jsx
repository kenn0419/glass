import Home from "./page/Home";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const handleCallReview = async () => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxi5Cvjb1T9Nvq4ZlWbg81Ylr7u_voEjAvudMu6fC6Cwld2IMfj5WZMWxipFKV6hyXU/exec";
    axios
      .get(scriptURL, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      })
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Có lỗi xảy ra khi gửi dữ liệu, vui lòng thử lại sau.");
      });
  };

  useEffect(() => {
    handleCallReview();
  }, []);
  return (
    <div className="w-[420px] lg:w-full min-h-screen">
      <div className="w-[420px] mx-auto relative">
        <Home />
      </div>
    </div>
  );
}

export default App;
