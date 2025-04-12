import React, { useState } from 'react';
import Style from "./ResidentialContract.module.css";
import logo from '../../assets/logo/new-logo-horizontal-removebg-preview1.png';

export default function ResidentialContract() {
    const [step, setStep] = useState(1);  

    const handleNextClick = () => {
        setStep(step + 1); 
    };

    const handlePrevClick = () => {
        setStep(step - 1);    
    };

    return (
        <section className={Style.residentialContract}>
            <div className={Style.imageWrapper}>
                <img src={logo} alt="logo" className={Style.logo} />
            </div>
            <div className={Style.stepper}>
                <div className={Style.steps}>
                    <div className={`${Style.step} ${step === 1 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 1 ? '' : 'بداية'}</span>
                        1
                    </div>
                    <div className={Style.line}></div>
                    <div className={`${Style.step} ${step === 2 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 2 ? '' : 'المؤجر'}</span>
                        2
                    </div>
                    <div className={Style.line}></div>
                    <div className={`${Style.step} ${step === 3 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 3 ? '' : 'المستأجر'}</span>
                        3
                    </div>
                    <div className={Style.line}></div>
                    <div className={`${Style.step} ${step === 4 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 4 ? '' : 'الصك'}</span>
                        4
                    </div>
                    <div className={Style.line}></div>
                    <div className={`${Style.step} ${step === 5 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 5 ? '' : 'العقد'}</span>
                        5
                    </div>
                    <div className={Style.line}></div>
                    <div className={`${Style.step} ${step === 6 ? Style.active : ''}`}>
                        <span className={Style.stepLabel}>{step === 6 ? '' : 'عنوان'}</span>
                        6
                    </div>
                </div>
            </div>
            {step === 1 && (
                <div className={Style.card}>
                    <h1>هل أنت المؤجر أو المستأجر؟</h1>
                    <select className="form-control text-center" name="applicant" id="applicant">
                        <option value="">اختر ...</option>
                        <option value="owner">أنا المؤجر</option>
                        <option value="tanent">أنا المستأجر</option>
                        <option value="owner">انا الوكيل الشرعي للمؤجر</option>
                        <option value="owner">انا الوكيل الشرعي للمستأجر</option>
                    </select>
                    <select className="form-control mt-3 text-center" name="suckType" id="suckType">
                        <option value="">حدد نوع الصك</option>
                        <option value="digital">صك إلكتروني</option>
                        <option value="bank">العقار من خلال البنك / شركة</option>
                        <option value="old">صك قديم مكتوب بخط اليد</option>
                        <option value="none">لايوجد صك</option>
                        <option value="help">ايش السالفة ؟</option>
                    </select>
                    <select className="form-control mt-3 text-center mb-3" name="waratha" id="waratha">
                        <option value="">هل مالك الصك متوفي؟</option>
                        <option value="1">نعم متوفي ونحن الورثة</option>
                        <option value="0">حي يرزق الله يطول في عمره</option>
                    </select>
                    <button className={Style.next} onClick={handleNextClick}>التالي</button>
                </div>
            )}
            {step === 2 && (
                <div className={Style.card}>
                    <h1> معلومات المؤجر / المالك</h1>
                    <p className={`text-center ${Style.info}`}>لازم يكون المؤجر هو نفسه مالك الصك</p>
                    <input type="text" placeholder='رقم هوية المؤجر ' className={`form-control mt-3 text-center mb-3 ${Style.specialInput}`}/>
                    <div className="move d-flex justify-center align-items-center w-100">
                        <button className={`${Style.prev}`} onClick={handlePrevClick}>{"\u2192"} السابق</button>
                        <button className={`${Style.next}`} onClick={handleNextClick}>التالي</button>
                    </div>
                </div>
            )}
            {step === 3 && (
                <div className={Style.card}>
                    <h1> معلومات المستأجر</h1>
                    <input type="text" placeholder='رقم هوية المستأجر ' className={`form-control mt-3 text-center mb-3 ${Style.specialInput}`}/>
                    <div className="move d-flex justify-center align-items-center w-100">
                        <button className={`${Style.prev}`} onClick={handlePrevClick}>{"\u2192"} السابق</button>
                        <button className={`${Style.next}`} onClick={handleNextClick}>التالي</button>
                    </div>
                </div>
            )}
            {step === 4 && (
                <div className={Style.card}>
                    <h1> معلومات الصك</h1>
                    <input type="text" placeholder='رقم الصك' className={`form-control mt-3 text-center mb-3 ${Style.specialInput}`}/>
                    <div className="move d-flex justify-center align-items-center w-100">
                        <button className={`${Style.prev}`} onClick={handlePrevClick}>{"\u2192"} السابق</button>
                        <button className={`${Style.next}`} onClick={handleNextClick}>التالي</button>
                    </div>
                </div>
            )}
            {step === 5 && (
                <div className={Style.card}>
                    <h1> معلومات العقد</h1>
                    <input type="text" placeholder='رقم العقد' className={`form-control mt-3 text-center mb-3 ${Style.specialInput}`}/>
                    <div className="move d-flex justify-center align-items-center w-100">
                        <button className={`${Style.prev}`} onClick={handlePrevClick}>{"\u2192"} السابق</button>
                        <button className={`${Style.next}`} onClick={handleNextClick}>التالي</button>
                    </div>
                </div>
            )}
            {step === 6 && (
                <div className={Style.card}>
                    <h1> عنوان العقار</h1>
                    <input type="text" placeholder='عنوان العقار' className={`form-control mt-3 text-center mb-3 ${Style.specialInput}`}/>
                    <div className="move d-flex justify-center align-items-center w-100">
                        <button className={`${Style.prev}`} onClick={handlePrevClick}>{"\u2192"} السابق</button>
                        <button className={`${Style.next}`} onClick={handleNextClick}>إرسال</button>
                    </div>
                </div>
            )}
        </section>
    );
}
