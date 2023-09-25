import React, { useRef, useState } from "react";
import mainImage from 'C:/Users/terdo/newsletter/src/assets/illustration-sign-up-mobile.svg';
import largeMainImage from 'C:/Users/terdo/newsletter/src/assets/illustration-sign-up-desktop.svg'
import check from 'C:/Users/terdo/newsletter/src/assets/icon-list.svg';

export const Main = () => {
    const [isvalid, setIsValid] = useState(true);
    const [istyped, setIsTyped] = useState(false);
    const [isempty, setIsEmpty] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const [subsSuccess, setSubSuccess] = useState(false);

    const emailRef = useRef(null);

    const checkValid = () => {
        const emailRegex =  /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        const valid = emailRegex.test(emailRef.current.value);
        setIsValid(valid)  
    }
    
    const checkTyping = () => {
        if (emailRef.current.value.length > 0) {
            setIsTyped(true);
        } 
    }

    const handleBlur = () => {
        checkValid()
        checkTyping()
        checkEmpty()
    }

    const checkEmpty = () => {
        if (emailRef.current.value.length == 0) {
        setIsEmpty(true);
    } else if (emailRef.current.value.length > 0) {
        setIsEmpty(false);
    }}

    const checkSubscribeSuccess = () => {
        if (isvalid && !isempty) {
            setSubSuccess(!subsSuccess);
        }
    }

    const checkDismiss = () => {
        setDismissed(!dismissed);
        setSubSuccess(!subsSuccess);
    }

    return (
        <div className="justify-center flex flex-col" id="main-wrapper">
            <div 
            className={`
            flex flex-col md:flex-row-reverse m-auto justify-center bg-white pb-7
            md:rounded-[30px] md:px-5 md:py-3 md:mt-[9.5rem] mt-[1.6rem] align-middle
            ${subsSuccess ? 'hidden' : 'block'}`} 
            id="main-table">
                <div className="flex justify-center" id="images">
                    <img src={mainImage} className="md:hidden"/>
                    <img src={largeMainImage} className="hidden md:block ml-5" />
                </div>
                <div className="flex flex-col" id="under-image-content">
                    <div
                    className="
                    text-start ml-[1.2rem] md:ml-[0] w-[21.3rem] md:w-[22rem] mt-[2rem]" 
                    id="hero-texts">
                        <h1 className="text-blueish-dark text-[37px] font-semibold pb-3 ml-1">
                            Stay Updated!
                        </h1>
                        <h4 className="text-blueish-light">
                            Join 60,000+ product managers receiving monthly updates on:
                        </h4>
                        <div className="text-blueish-light text-medium mt-[2rem]" id="under-texts">
                            <ul className="space-y-4">
                                <li className="flex flex-row">
                                    <div className="" id="check-icons">
                                        <img src={check} alt="" />
                                    </div>
                                    <span className="opacity-0">_-</span>Product discovery and building what matters
                                </li>
                                <li className="flex flex-row">
                                    <div className="" id="check-icons">
                                        <img src={check} alt="" />
                                    </div>
                                    <span className="opacity-0">_-</span>Measuring to ensure updates are a success
                                </li>
                                <li className="flex flex-row">
                                    <div className="" id="check-icons">
                                        <img src={check} alt="" />
                                    </div>
                                    <span className="opacity-0">-_</span>And much more!
                                </li>
                            </ul>
                        </div>    
                    </div>
                    <div
                    className="
                    flex flex-col text-start ml-[1.2rem] md:ml-[0] w-[21.5rem] m-auto
                    mt-[3rem] md:mt-[2rem]" 
                    id="footer">
                        <div className="" id="email-input">
                            <label htmlFor="email" className="text-blueish-dark text-sm font-medium">
                                Email address
                            </label>
                            <input type="text" placeholder="email@company.com"
                            ref={emailRef} onBlur={handleBlur} className={`
                            border-[1px] border-[#b1b0b0] border-solid
                            w-[21.4rem] h-[3.3rem] m-auto rounded-lg
                            focus:border-2 focus:border-[#777777]
                            pl-6 mt-3 focus:outline-none focus:border-solid
                            hover:shadow-lg hover:shadow-[#9b9a9a] duration-200
                            ${!isvalid ? 'bg-red-100 border-red-300 border-solid border-[1px] text-[#c07979]'
                            : !istyped ? 'border-[#b1b0b0] bg-white' : 'border-[green] bg-white'}`}/>

                            {!isvalid && !isempty && (
                                <h4 className="text-red-400 text-sm font-medium m-auto relative left-[13.5rem] top-[-5.3rem]">
                                    Valid email required
                                </h4>
                            )}
                            {isempty && (
                                <h4 className="text-red-400 text-sm font-medium m-auto relative left-[15.5rem] top-[-5.3rem]">
                                Email required
                                </h4>
                            )}
                        </div>
                        <br />
                        <div id="subs-btn">
                            <button type="submit"
                            onClick={checkSubscribeSuccess} className="
                            bg-blueish-dark w-[21.4rem] h-[3.3rem]
                            m-auto font-medium text-white rounded-lg
                            active:bg-gradient-to-r active:from-[#9e2960]
                            active:to-orange-600 active:w-[21rem]
                            active:h-[2.9rem] hover:bg-[#131353] 
                            transition-all ease-linear duration-150">
                            Subscribe to monthly newsletter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {subsSuccess && (
            <div className="m-auto md:mt-[12rem]" id="container">
            <div
            className={`
            bg-white justify-center flex m-auto" 
            md:mt-[0rem] md:rounded-2xl md:w-[33rem]
            md:h-[auto] md:ml-[0rem]
            ${dismissed ? 'hidden' : 'block'}`} 
            id="table-container">
                <div className="flex flex-col justify-center pb-[10rem] w-[21.5rem] md:h-[30rem] px-0 bg-white m-auto" id="table-content">
                    <div className="md:mt-[8rem] m-auto" id="item-container">
                    <div className="px-4" id="check-icon">
                        <img src={check} className="w-[3.5rem] mt-[13rem] md:mt-0"></img>
                    </div>
                    <div className="" id="text-container">
                        <h1 className="text-blueish-dark text-3xl font-bold ml-1 px-4">Thanks for subscribing!</h1>
                        <p className="text-blueish-light font-medium leading-6 px-4 md:pb-10">
                        A confirmation email has been sent to <span className="font-bold text-blueish-light">{emailRef.current.value}. </span>
                        Please open it And click the button inside to confirm your subscription
                        </p>
                    </div>
                    <div className="text-center justify-center flex" id="dismiss-button">
                        <button 
                        className="
                        bg-blueish-dark text-white font-medium rounded-lg py-[1.1rem] px-[5.3rem]
                        hover:bg-[#22225a] active:bg-gradient-to-r active:from-[#9e2960]
                        active:to-orange-600 active:py-[1rem] active:px-[5.8rem] mt-[14.7rem]
                        md:mt-[0rem] transition-all ease-linear duration-150"
                        onClick={checkDismiss} type="submit">
                        Dismiss message
                        </button>

                        {dismissed && (
                            window.location.reload()
                        )}
                    </div>
                    </div>
                </div>
            </div>
            </div>
            )}
        </div>
        
    )
}