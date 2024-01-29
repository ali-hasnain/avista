"use client";
import Header from "@/component/header/header";
import styles from './page.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}
import Slider from "react-slick";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Footer from "@/component/footer/footer";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});



export default function page() {

    const [slideIndex, setSlideIndex] = useState({
        slideIndex: 0,
        updateCount: 0
    })

    const [sliderIndex, setSliderIndex] = useState(0)

    const [step, setStep] = useState(0)

    const [industryContent, setIndustryContent] = useState([
        {
            id: 1,
            img1: "/banner/retail.svg",
            img2: "/banner/Retail.gif",
            content: "Consumer & Retailer"
        }, {
            id: 2,
            img1: "/banner/Private-Equity.svg",
            img2: "/banner/Private-Equity.gif",
            content: "Private Equity"
        }
        , {
            id: 3,
            img1: "/banner/Professional-Services.svg",
            img2: "/banner/Professional-Services.gif",
            content: "Professional Services"
        }, {
            id: 4,
            img1: "/banner/Technology.svg",
            img2: "/banner/Technology.gif",
            content: "Techonology"
        }, {
            id: 5,
            img1: "/banner/Oil-Gas.svg",
            img2: "/banner/Oil-Gas.gif",
            content: "Oil & Gas"
        }, {
            id: 6,
            img1: "/banner/Healthcare.svg",
            img2: "/banner/Healthcare.gif",
            content: "Health Care"
        },
        {
            id: 7,
            img1: "/banner2/auto.svg",
            img2: "/banner2/auto.gif",
            content: "Logistics & Supply chain"
        }, {
            id: 8,
            img1: "/banner2/Defence-Government-Services.svg",
            img2: "/banner2/Defence-Government-Services.gif",
            content: "Defence & Government Services"
        }
        , {
            id: 9,
            img1: "/banner2/Financial-Services.svg",
            img2: "/banner2/Financial-Services.gif",
            content: "Insurance & Financial Services"
        }, {
            id: 10,
            img1: "/banner2/Machinery-Manufacturing.svg",
            img2: "/banner2/Machinery-Manufacturing.gif",
            content: "Robotics & Manufacturing"
        }, {
            id: 11,
            img1: "/banner2/Media-Entertainment.svg",
            img2: "/banner2/Media-Entertainment.gif",
            content: "Media & Entertainment"
        }, {
            id: 12,
            img1: "/banner2/Travel.svg",
            img2: "/banner2/Travel.gif",
            content: "Travel"
        }])

    const [bannerCard, setBannerCard] = useState(0)

    const [banner2, setBenner2] = useState([
        'Fulfill a software vision',
        'Overhaul Legacy IT Systems',
        'Cut Operational Costs',
        'Validate a Business Idea',
        'Scale-up Operations',
        'Plug a Talent / Resource Gap',
        'Bolster Security & Compliance'])

    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        fade: true,
        arrows: true,

    };

    const setting2 = {
        focusOnSelect: true,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        centerPadding: "60px",
        variableWidth: true,
        afterChange: () =>
            setSlideIndex(state => ({ updateCount: state.updateCount + 1 })),
        beforeChange: (current, next) => setSlideIndex({ slideIndex: next })
    };

    useEffect(() => {
        if (slideIndex?.slideIndex != undefined) {
            setSliderIndex(slideIndex?.slideIndex)
        }
    }, [slideIndex?.slideIndex])

    useEffect(() => {

        console.log(bannerCard)
    }, [bannerCard])

    return <div>
        <Header></Header>

        <Slider {...settings}>
            <div>
                <div className="positon-relative">
                    <img className='h-100 w-100' src="/Slider-1.png" alt="" />
                </div>
                <span className="position-absolute" style={{ color: "#73A133", fontSize: "40px", fontWeight: 500, top: "175px", left: "100px" }}>Transform</span>
                <span className="position-absolute" style={{ color: "white", fontWeight: "bold", fontSize: "60px", top: "250px", left: "100px" }}>Digital Health</span>
                <button style={{ top: "375px", left: "100px" }} className={`position-absolute ${styles.button}`}>Learn More</button>
            </div>
            <div>
                <div className="positon-relative">

                    <img className='h-100 w-100' src="/Slider-2.png" alt="" />
                </div>
                <span className="position-absolute" style={{ color: "#73A133", fontSize: "40px", fontWeight: 500, top: "175px", left: "100px" }}>Design Thinking</span>
                <span className="position-absolute" style={{ color: "white", fontWeight: "bold", fontSize: "60px", top: "250px", left: "100px" }}>A Social Techonology</span>
                <button style={{ top: "375px", left: "100px" }} className={`position-absolute ${styles.button}`}>Learn More</button>

            </div>
            <div>
                <div className="positon-relative">
                    <img className='h-100 w-100' src="/Slider-3.png" alt="" />
                </div>
                {/* <div className="positon-relative">
                    <img className='h-100 w-100' src="/Slider-3.png" alt="" />
                </div> */}
                <span className="position-absolute" style={{ color: "#73A133", fontSize: "40px", fontWeight: 500, top: "175px", left: "100px" }}>Artificial Inteligence</span>
                <span className="position-absolute" style={{ color: "white", fontWeight: "bold", fontSize: "60px", top: "250px", left: "100px" }}>Influences Desisions</span>
                <button style={{ top: "375px", left: "100px" }} className={`position-absolute ${styles.button}`}>Learn More</button>

            </div>
        </Slider>

        <div className={`row ${styles.heplusBanner}`}>
            <span className={`text-center ${styles.fontsize}`}>
                Help Us `{"<->"}` Help <span style={{ color: "#73A133" }}>You</span></span>
            <span style={{ color: "#73A133", fontSize: "25px", textAlign: "center" }}>Align our subject matter experts with your needs</span>
            <div className="d-flex justify-content-center my-5">
                <div style={{ border: "2px solid #73A133", height: "25px", width: "25px", borderRadius: "50%", margin: "10px 10px", backgroundColor: '#73A133' }}></div>
                <div style={{ border: "2px solid #73A133", height: "25px", width: "25px", borderRadius: "50%", margin: "10px 10px" }}></div>
                <div style={{ border: "2px solid #73A133", height: "25px", width: "25px", borderRadius: "50%", margin: "10px 10px" }}></div>
                <div style={{ border: "2px solid #73A133", height: "25px", width: "25px", borderRadius: "50%", margin: "10px 10px" }}></div>
            </div>
            <span style={{ fontSize: "35px", fontWeight: "bold", textAlign: "center", margin: "30px 10px" }}>What is your industry?</span>
        </div>
        {step == 0 && <div className="row d-flex justify-content-center" style={{ padding: "0px 70px" }}>
            {industryContent.map((industry) => (
                <div className={` btn ${styles.bannerCard} `} onMouseEnter={() => setBannerCard(industry.id)} onMouseLeave={() => setBannerCard(0)} onClick={() => setStep(1)}>
                    <div className={`row text-center mx-auto`} style={{ height: "80px", width: "80px" }}>
                        <img src={industry?.img1} hidden={bannerCard == industry.id} />
                        <img src={industry?.img2} className="py-2" hidden={bannerCard != industry.id} />
                    </div>
                    <div className="text-center mx-auto">
                        {industry?.content}
                    </div>
                </div>
            ))}
        </div>}
        {step == 1 && <div className="row d-flex justify-content-center" style={{ padding: "0px 180px" }}>
            {banner2.map((industry) => (
                <div onClick={() => setStep(2)} className={`btn ${styles.bannerCard2}`} >
                    {industry}
                </div>
            ))}
        </div>}

        {step == 2 && <div>
            <div className="row d-flex justify-content-center" onClick={() => setStep(0)} style={{ padding: "0px 180px" }}>
                <div className={`btn ${styles.bannerCard2}`} >
                    Short-Term Engagement
                </div>
                <div className={`btn ${styles.bannerCard2}`} >
                    Long-Term Engagement
                </div>
            </div>
            <div className="row d-flex justify-content-center" style={{ padding: "0px 150px" }}>
                <div style={{ backgroundColor: 'white', margin: "20px", height: "130px", width: "200px" }} >
                    For customers seeking quick wins for short-term goals.
                </div>
                <div style={{ backgroundColor: 'white', margin: "20px", height: "130px", width: "200px" }}  >
                    For clients hoping to achieve an overarching vision, or those looking for a long-term partner.
                </div>
            </div></div>}

        <div className={`${styles.introduceBanner2} text-center`}>
            <div>
                <div className="" style={{ margin: "60px" }}>
                    <h2 style={{ color: "black", fontSize: "80px", fontWeight: "bolder" }}>Multishore</h2>
                </div>
                <p style={{ color: "black", fontWeight: 'normal', fontFamily: 'sans-serif', fontSize: "30px", marginTop: "-20px" }}>HIRING MULTISHORE TALENT HAS NEVER BEEN THIS EASY!</p>
                <div>
                    <button className={styles.button}>Learn More</button>
                </div>
            </div>
        </div>

        <div className={`row ${styles.heplusBanner}`}>
            <span className={`text-center ${styles.fontsize}`}>
                Our Latest <span style={{ color: "#73A133" }}>Insights</span></span>
            <span style={{ color: "#73A133", fontSize: "25px", textAlign: "center" }}> We explore some of the latest trends and strategies</span>
        </div>
        <div >
            <Slider {...setting2} >
                <div className={`px-3 ${sliderIndex != 3 && "py-5"}`}>
                    <div className="card shadow" style={{ width: sliderIndex != 3 ? "22rem" : "20rem" }}>
                        <img className="card-img-top" src="/Globalization.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title " style={{
                                fontSize: "25px",
                                fontWeight: "bolder"
                            }}>Globalization Challenges for Japanese Multinationals</h5>
                            {sliderIndex == 3 && <p className="card-text">The rise of globalization has presented both opportunities and challenges..</p>}
                            {sliderIndex == 3 && <a href="#" className={styles.button2}>Read More..</a>}
                        </div>
                    </div>
                </div>
                <div className={`px-3 ${sliderIndex != 0 && "py-5"}`}>
                    <div className="card shadow" style={{ width: sliderIndex != 0 ? "22rem" : "20rem" }}>
                        <img className="card-img-top" src="Futuristic.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title" style={{
                                fontSize: "25px",
                                fontWeight: "bolder"
                            }}>How Futuristic Technology would Help the Newer Generation</h5>
                            {sliderIndex == 0 && <p className="card-text">The world is rapidly changing, and so is technology. Every..</p>}
                            {sliderIndex == 0 && <a href="#" className={styles.button2}>Read More..</a>}
                        </div>
                    </div>
                </div>
                <div className={`px-3 ${sliderIndex != 1 && "py-5"}`}>
                    <div className="card shadow" style={{ width: sliderIndex != 1 ? "22rem" : "20rem" }}>
                        <img className="card-img-top" src="Group.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title " style={{
                                fontSize: "25px",
                                fontWeight: "bolder"
                            }}>Hiring Trends in the U.S.</h5>
                            {sliderIndex == 1 && <p className="card-text">Over 186 million workers in the U.S. have LinkedIn profiles..</p>}
                            {sliderIndex == 1 && <a href="#" className={styles.button2}>Read More..</a>}
                        </div>
                    </div>
                </div>
                <div className={`px-3 ${sliderIndex != 2 && "py-5"}`}>
                    <div className="card shadow" style={{ width: sliderIndex != 2 ? "22rem" : "20rem" }}>
                        <img className="card-img-top" src="Technology.jpg" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title" style={{
                                fontSize: "25px",
                                fontWeight: "bolder"
                            }}>Technology Played a Critical Role in the Covid-19 Pandemic Response</h5>
                            {sliderIndex == 2 && <p className="card-text">The Covid-19 pandemic has been a challenging time for the..</p>}
                            {sliderIndex == 2 && <a href="#" className={styles.button2}>Read More..</a>}
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
        <div className="justify-content-center d-flex mt-2">
            <button className={styles.button}>Let's Connect</button>
        </div>
        <div className={`row ${styles.introduceBanner}`} >
            <div className="position-relative">
                <img className="w-100 p-5" src="/introduce.png" />
            </div>
            <div className="row position-absolute">
                <div className="col-lg-6 text-center p-5"> What can we help you achieve?
                    <button className={styles.button}>Let's Connect</button></div>
                <div className="col-lg-6 text-center p-5"> Where will your career take you?
                    <button className={styles.button} >Let's Find Out</button></div>
            </div>
        </div>
        <Footer />
    </div >
}