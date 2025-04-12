

import { useState } from "react";
import Style from "./Contract-request.module.css";
import newres from "../../assets/contract/newres.png";
import newcom from "../../assets/contract/newcom.png";
import { useNavigate } from 'react-router-dom';
const Contract_request = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [selectedContract, setSelectedContract] = useState(null);


  const handleCardClick = (contractType) => {
    setShowPopup(true);
    setSelectedContract(contractType);
  };
  const handleStart = () => {
    if (selectedContract === "residential") {
      navigate('/residential-contract');
    } else if (selectedContract === "commercial") {
      navigate('/commerical-contract');
    }
  };
  return (
    <section className={` ${Style.mainSection}`}>
      <div className="main">
        <h1 className={`text-white ${Style.head}`}>حدد نوع عقد الايجار</h1>
        <div className={Style.typeOfContract}>
          <div className={Style.card} onClick={() => handleCardClick("residential")}>
            <img src={newres} alt="residential contract" />
            <div className={Style.data}>
              <p className="fw-bold m-0 p-2">سكني</p>
              <p className="m-0">299 ريال</p>
            </div>
          </div>
          <div className={Style.card} onClick={() => handleCardClick("commercial")}>
            <img src={newcom} alt="commercial contract" />
            <div className={Style.data}>
              <p className="fw-bold m-0 p-2">تجاري</p>
              <p className="m-0">495 ريال</p>
            </div>
          </div>
        </div>
        <p className={Style.reviews}>شاهد تقييمات العملاء</p>
      </div>
      {showPopup && (
        <div className={Style.popupOverlay}>
          {selectedContract === "residential" && (
             <div className={Style.popup}>
             <h2>طلبات قبل نبدأ 😊</h2>
             <p className="m-0">لخدمتك بشكل سريع جهز الأتي:</p>

             <ul className="p-3 ">
               <li className={`mb-2 ${Style.list}`}>معلومات هوية المؤجر والمستأجر</li>
               <li className={`mb-2 ${Style.list}`}>جوال الطرفين المسجل في أبشر</li>
               <li className={`mb-2 ${Style.list}`}>رقم الحساب البنكي (آيبان) للمؤجر</li>
               <li className={`mb-2 ${Style.list}`}>رقم الصك الإلكتروني من المؤجر</li>
               <li className={`mb-2 ${Style.list}`}>الدور، عدد الغرف، عدد أدوار المبنى</li>
               <li className={`mb-2 ${Style.list}`}>مساحة الوحدة العقارية</li>
               <li className={`mb-2 ${Style.list}`}>وأخيراً 299 رس رسوم الخدمة 😁</li>
             </ul>
             <button onClick={handleStart} className={`  mt-3 d-block text-center m-auto ${Style.Btnclose}`}>
               يلا بسم الله 👍
             </button>
           </div>

          )
          }
          {selectedContract === "commercial" && (
            <div className={Style.popup}>
            <h2>طلبات قبل نبدأ 😊</h2>
            <p className="m-0">لخدمتك بشكل سريع جهز الأتي:</p>

            <ul className="p-3 ">
              <li className={`mb-2 ${Style.list}`}>معلومات هوية المؤجر والمستأجر</li>
              <li className={`mb-2 ${Style.list}`}>جوال الطرفين المسجل في أبشر</li>
              <li className={`mb-2 ${Style.list}`}>صورة السجل التجاري للمستأجر  </li>
              <li className={`mb-2 ${Style.list}`}>رقم الحساب البنكي (آيبان) للمؤجر</li>
              <li className={`mb-2 ${Style.list}`}>رقم الصك الإلكتروني من المؤجر</li>
              <li className={`mb-2 ${Style.list}`}>الدور، عدد الغرف، عدد أدوار المبنى</li>
              <li className={`mb-2 ${Style.list}`}>وأخيراً 495 رس رسوم الخدمة 😁</li>
            </ul>
            <button onClick={handleStart} className={`  mt-3 d-block text-center m-auto ${Style.Btnclose}`}>
              يلا بسم الله 👍
            </button>
          </div>

          )}
        </div>
      )}
    </section>
  );
};

export default Contract_request;

