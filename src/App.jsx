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

  useEffect(() => {
    if (reviews.length === 0 || currentIndex >= reviews.length) return; // Stop if no data or reached end

    // Show notification
    setIsVisible(true);

    // Hide after 5 seconds
    const hideTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next notification after 3 seconds delay
    const nextTimeout = setTimeout(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 8000);

    // Clear timeouts on cleanup
    return () => {
      clearTimeout(hideTimeout);
      clearTimeout(nextTimeout);
    };
  }, [currentIndex, reviews]);

  // Stop cycling when all reviews have been shown
  if (currentIndex >= reviews.length || reviews.length === 0) return null;

  const { title, content, time, image } = reviews[currentIndex];
  return (
    <div className="w-[420px] lg:w-full min-h-screen">
      <div
        className={`w-[250px] h-24 lg:w-[300px] fixed top-1 left-4 p-4 rounded-lg shadow-lg transition-opacity z-50 duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        } bg-white`}
      >
        <div className="flex items-center">
          <img
            src={image}
            alt={title}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex flex-col gap-1">
            <p className="font-semibold">{title}</p>
            <p className="text-gray-600 text-sm">{content}</p>
            <p className="text-gray-400 text-xs">{time}</p>
          </div>
        </div>
      </div>
      <div className="w-[420px] mx-auto relative">
        <Home />
      </div>
    </div>
  );
}

export default App;
