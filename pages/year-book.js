import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';
import Link from 'next/link';
import finalists from "../public/finalists";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import yb from '../styles/index.module.css';

function yearBook() {
    const ref = useRef(null);
    const [lists, setlists] = useState(null);
    const [data, setData] = useState(null);
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        setlists(finalists);
        const elements = document.querySelectorAll(`.${yb.section}`);
        const screenSize = window.innerWidth;
        const container = document.querySelector(`.${yb.container}`);
        const elemWidth = 250;
        const width = elements.length * elemWidth;
        container.style.width = `${width}px`;
        container.style.maxWidth = `${width}px`;
        document.querySelector(".scrollTop").addEventListener("click", function() {
            window.scrollTop = 0;
            alert(0)
        });
        elements.forEach(element => {
            element.style.width = `${width}px`;
        });
        let xRange = 0;
        if (screenSize < 430) {
            xRange = -elemWidth * (elements.length - 1) + 150;
        } else if (screenSize > 430 && screenSize < 800) {
            xRange = -elemWidth * (elements.length - 2) + 150;
        } else if (screenSize > 800 && screenSize < 1024) {
            xRange = -elemWidth * (elements.length - 3) + 150;
        } else {
            xRange = -elemWidth * (elements.length - 4) + 150;
        }
        gsap.to(elements, {
            x: xRange,
            ease: "none",
            scrollTrigger: {
                start: "top 270px",
                trigger: "." + yb.container,
                pin: true,
                scrub: 1,
                markers: false,
                // snap: 1 / (elements.length - 1),
                end: () => "+=" + elemWidth * (elements.length - 1) + "px"
            }
        });

    }, []);

    function showOverlayBox(index) {
        document.querySelector(`.${yb.overlay}`).classList.add(yb.show);
        document.querySelector("#email").textContent = finalists[index].Email_address;
        setData(finalists[index]);
    }
    function hideOverlayBox(e) {
        console.log(e.target.id);
        if (e.target.id == "overlay") {
            e.target.classList.remove(yb.show);
        }
    }

    return (
        <div className="relative">
            <div className={yb.overlay} id="overlay" onClick={hideOverlayBox}>
                <div className={`${yb.overlayBox} w-full md:w-4/5 h-4/5 md:h-3/4 block md:flex rounded md:rounded-xl ...`}>
                    <div className="bg-black w-full h-52 flex items-center justify-center md:w-1/2 md:h-full relative overflow-hidden ...">
                        <picture>
                            <source media="(min-width:650px)" srcset={data && `https://drive.google.com/uc?id=${data.Avatar}`}></source>
                            <source media="(max-width:650px)" srcset={data && `https://drive.google.com/thumbnail?id=${data.Avatar}`}></source>
                            <img src={data && `${data.Avatar}`} alt="image" className="" />
                        </picture>
                    </div>
                    <div className="md:w-1/2 px-3 py-8 md:pt-8 ...">
                        <div className="block md:flex justify-between">
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Name</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Full_Name}</h5>
                            </div>
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Email Address</p>
                                <h5 id="email" className="text-xs font-thin">{data && data.Email_address}</h5>
                            </div>
                        </div>
                        <div className="block md:flex justify-between">
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Fav Lecturer</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Best_Lecturer}</h5>
                            </div>
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Fav Technologist</p>
                                <h5 id="email" className="text-xs font-thin">{data && data.Best_Technologist}</h5>
                            </div>
                        </div>
                        <div className="block md:flex justify-between">
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Fav Course</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Best_Course}</h5>
                            </div>
                            <div className="w-1/2 mb-4 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Worst Course</p>
                                <h5 id="email" className="text-xs font-thin">{data && data.Worst_Course}</h5>
                            </div>
                        </div>
                        <div className="block md:flex justify-between">
                            <div className="w-1/2 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Course Initially picked</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Course_Initially_picked}</h5>
                            </div>
                            <div className="w-1/2 mt-4 md:mt-0 ...">
                                <p className="mb-1 text-gray-400 text-xs font-thin">Class Crush</p>
                                <h5 id="email" className="text-xs font-thin">{data && data.Class_Crushes}</h5>
                            </div>
                        </div>
                        <div className="flex justify-between my-4">
                            <div>
                                <p className="mb-1 text-gray-400 text-xs font-thin">Men I Trust</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Men_I_trust}</h5>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="mb-1 text-gray-400 text-xs font-thin">Nickname</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Nickname}</h5>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="mb-1 text-gray-400 text-xs font-thin">Shout Out</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Shout_out}</h5>
                            </div>
                        </div>
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="mb-1 text-gray-400 text-xs font-thin">Parting Words</p>
                                <h5 id="name" className="text-xs font-thin">{data && data.Parting_words}</h5>
                            </div>
                        </div>
                        <div className="flex">
                            <Link href={data ? `${data.Twitter_url}` : "/"}>
                                <a className="w-10 h-10 flex items-center justify-center shadow-lg rounded-full mr-4">
                                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="15.5" stroke="#F66311" />
                                        <g clip-path="url(#clip0)">
                                            <path d="M25.0254 8.61531C24.2397 9.16954 23.3697 9.59345 22.449 9.87069C21.9548 9.30249 21.2981 8.89977 20.5676 8.71699C19.8371 8.53421 19.0681 8.58018 18.3645 8.8487C17.661 9.11722 17.0569 9.59533 16.634 10.2184C16.2111 10.8414 15.9897 11.5793 15.9998 12.3322V13.1527C14.5578 13.1901 13.129 12.8703 11.8406 12.2218C10.5522 11.5733 9.44412 10.6162 8.61515 9.43582C8.61515 9.43582 5.3331 16.8204 12.7177 20.1025C11.0279 21.2495 9.01487 21.8247 6.97412 21.7435C14.3587 25.8461 23.3844 21.7435 23.3844 12.3076C23.3836 12.0791 23.3616 11.8511 23.3187 11.6266C24.1562 10.8007 24.7471 9.75805 25.0254 8.61531V8.61531Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="19.6923" height="19.6923" fill="white" transform="translate(6.15381 6.15381)" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                            </Link>
                            <Link href={data ? `${data.IG_url}` : "/"}>
                                <a className="w-10 h-10 flex items-center justify-center shadow-lg rounded-full ">
                                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="15.5" stroke="#F66311" />
                                        <path d="M20.1026 7.7948H11.8975C9.6317 7.7948 7.79492 9.63158 7.79492 11.8974V20.1025C7.79492 22.3683 9.6317 24.2051 11.8975 24.2051H20.1026C22.3684 24.2051 24.2052 22.3683 24.2052 20.1025V11.8974C24.2052 9.63158 22.3684 7.7948 20.1026 7.7948Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.282 15.483C19.3833 16.1659 19.2666 16.8633 18.9487 17.476C18.6308 18.0888 18.1277 18.5857 17.5111 18.8961C16.8944 19.2064 16.1956 19.3145 15.5141 19.2048C14.8325 19.0951 14.2029 18.7733 13.7147 18.2852C13.2266 17.797 12.9048 17.1674 12.7951 16.4858C12.6854 15.8043 12.7935 15.1055 13.1038 14.4889C13.4142 13.8722 13.9111 13.3692 14.5239 13.0512C15.1366 12.7333 15.834 12.6166 16.5169 12.7179C17.2134 12.8212 17.8583 13.1457 18.3562 13.6437C18.8542 14.1416 19.1787 14.7865 19.282 15.483Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M20.5127 11.4872H20.5209" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </a>
                            </Link>
                            <Link href={data ? `${data.LinkedIn_url}` : "/"}>
                                <a className="w-10 h-10 flex items-center justify-center shadow-lg rounded-full  ml-4">
                                    <svg width="40" height="40" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="16" cy="16" r="15.5" stroke="#F66311" />
                                        <path d="M11.077 13.5385H7.79492V23.3846H11.077V13.5385Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M19.282 12.7179C20.5876 12.7179 21.8398 13.2366 22.7631 14.1598C23.6864 15.0831 24.205 16.3353 24.205 17.641V23.3846H20.923V17.641C20.923 17.2057 20.7501 16.7883 20.4423 16.4806C20.1346 16.1728 19.7172 15.9999 19.282 15.9999C18.8467 15.9999 18.4293 16.1728 18.1216 16.4806C17.8138 16.7883 17.6409 17.2057 17.6409 17.641V23.3846H14.3589V17.641C14.3589 16.3353 14.8776 15.0831 15.8008 14.1598C16.7241 13.2366 17.9763 12.7179 19.282 12.7179V12.7179Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.43595 11.0769C10.3423 11.0769 11.077 10.3421 11.077 9.43583C11.077 8.52951 10.3423 7.7948 9.43595 7.7948C8.52963 7.7948 7.79492 8.52951 7.79492 9.43583C7.79492 10.3421 8.52963 11.0769 9.43595 11.0769Z" stroke="#F66311" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${yb.header} left-0 px-8`}>
                <div className={`${yb.headerInner} top-0 left-4 right-4`}>
                    <div className="h-16 flex justify-between items-center px-4 lg:px-32">
                        <h1 className={`${yb.brandname} text-xl font-bold`}>CPE</h1>
                        <button className="bg-gradient-to-b rounded-full from-yellow-400 to-red-400 py-2 px-6 text-white text-sm">Gallery</button>
                    </div>
                    <h3 className={`${yb.title} font-bold text-3xl lg:text-4xl text-center mt-10 md:mt-12`}>CPE Class of 2020</h3>
                    <p className={`${yb.subtitle} px-3 lg:px-0 lg:w-1/2 font-thin mx-auto text-center mt-5 md:mt-6 ...`}>Congratulations to all the students of computer engineering class of 2020, for the successful completion of their B.Eng. Degree programme in University of Ilorin. We wish everyone success in our next phase of life.</p>
                </div>
            </div>

            <div className={`${yb.container} sections flex pt-12 bg-white h-screen px-8 lg:pl-44`} ref={ref}>
                {
                    finalists && finalists.map((finalist, index) => {
                        if (index % 12 == 0) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-40 w-40 lg:h-40 lg:w-40 rounded-full ml-8 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        }
                        else if (index % 12 == 1) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-32 w-32 lg:h-28 lg:w-28 rounded-full ml-8 mt-32 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 2) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-28 w-28 lg:h-32 lg:w-32 rounded-full ml-12 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 3) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-24 w-24 lg:h-28 lg:w-28 rounded-full ml-8 mt-32 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 4) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-32 w-32 lg:h-36 lg:w-36 rounded-full ml-8 mt-8 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 5) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-24 w-24 lg:h-32 lg:w-32 rounded-full ml-12 mt-36 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 6) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-40 w-40 lg:h-36 lg:w-36 rounded-full ml-8 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 7) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-32 w-32 lg:h-28 lg:w-28 rounded-full ml-8 mt-32 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 8) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-28 w-28 lg:h-32 lg:w-32 rounded-full ml-12 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 9) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-32 w-32 lg:h-28 lg:w-28 rounded-full ml-8 mt-32 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 10) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-36 w-36 lg:h-36 lg:w-36 rounded-full ml-8 mt-8 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        } else if (index % 12 == 11) {
                            return (
                                <div className={`${yb.section}`}>
                                    <div className="bg-black h-32 w-32 lg:h-32 lg:w-32 rounded-full ml-12 mt-36 flex justify-center items-center relative overflow-hidden" onClick={() => showOverlayBox(index)}>
                                        <picture>
                                            <source media="(min-width:650px)" srcset={`https://drive.google.com/uc?id=${finalist.Avatar}`}></source>
                                            <source media="(max-width:650px)" srcset={`https://drive.google.com/thumbnail?id=${finalist.Avatar}`}></source>
                                            <img src={`${finalist.Avatar}`} alt="image" className="" />
                                        </picture>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

            </div>
            <div className="w-full h-80 bg-white relative ...">
                <h3 className="w-1/2 relative text-4xl mx-auto md:text-6xl text-center ...">
                    It was an amazing time with you all
                    <svg height="74" className="w-96 absolute right-0 top-24" viewBox="0 0 634 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 53C80 35.3333 270 0.700014 414 3.50001C558 6.30001 618.667 19.6667 631 26" stroke="#F66311" strokeWidth="5" strokeLinecap="round" />
                        <path d="M13.9999 71C91.0059 53.3596 255.596 2.07575 414.009 3.53308C499.203 4.31683 618.67 19.7695 631.001 26.1071" stroke="#F66311" strokeWidth="5" strokeLinecap="round" />
                    </svg>
                </h3>
                <p className={`${yb.subtitle} px-3 lg:px-0 lg:w-1/2 font-thin mx-auto text-center mt-5 md:mt-8 ...`}>Congratulations to all the students of computer engineering class of 2020, for the successful completion of their B.Eng. Degree programme in University of Ilorin. We wish everyone success in our next phase of life.</p>

                <svg width="54" height="54" className="scrollTop absolute bottom-10 right-10" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="46" cy="46" r="45.5" stroke="black" />
                    <path d="M55.3332 46H36.6665" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M45.9998 55.3334L36.6665 46L45.9998 36.6667" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

            </div>
        </div>
    )
}

export default yearBook
