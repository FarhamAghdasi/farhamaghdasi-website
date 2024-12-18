import common_imgs_iconsarrow_top_right from '../assets/imgs/icons/arrow-top-right.svg';
import common_imgsLogo_light from '../assets/imgs/Logo-light.png';

import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Header = () => {
    const [isHovered, setIsHovered] = useState(false);
    const svgRef = useRef(null);
    const cursorRef = useRef(null);
    const linkRef = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProgressActive, setIsProgressActive] = useState(false);
    const [strokeDashoffset, setStrokeDashoffset] = useState(307.919);

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subSubMenuOpen, setSubSubMenuOpen] = useState(false);

    useEffect(() => {
        const updateProgress = () => {
            const scroll = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const pathLength = 307.919; // مقدار طول مسیر
    
            if (height > 0) {
                const progressValue = pathLength - (scroll * pathLength / height);
                setStrokeDashoffset(progressValue); // بروزرسانی offset
                setIsProgressActive(scroll > 150); // فعال‌سازی کلاس بر اساس اسکرول
            }
        };

        window.addEventListener('scroll', updateProgress);
        updateProgress(); // برای به‌روزرسانی اولیه

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const logo = document.querySelector('.navbar.change .logo > img');
            const bodyScroll = window.scrollY;

            if (bodyScroll > 300) {
                navbar.classList.add('nav-scroll');
                if (logo) {
                    logo.src = 'assets/imgs/logo-dark.png';
                }
            } else {
                navbar.classList.remove('nav-scroll');
                if (logo) {
                    logo.src = 'assets/imgs/logo-light.png';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
        const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

        // انیمیشن loader
        tl.to(".loader-wrap-heading .load-text, .loader-wrap-heading", {
            delay: 1,
            y: -100,
            opacity: 0,
            onComplete: () => {
                // انیمیشن header .container تنها پس از اتمام loader آغاز می‌شود
                const headerContainer = document.querySelector("header .container");
                if (headerContainer) {
                    // تنظیم حالت اولیه
                    gsap.set(headerContainer, { y: 100, opacity: 0 });

                    // انیمیشن header .container
                    gsap.to(headerContainer, {
                        y: 0,
                        opacity: 1,
                        duration: 1, // می‌توانید این مقدار را تغییر دهید تا سرعت انیمیشن را تنظیم کنید
                    });
                }
            }
        })
            .to(svgRef.current, {
                duration: 0.5,
                attr: { d: curve },
                ease: "power2.easeIn",

            })
            .to(svgRef.current, {
                duration: 0.5,
                attr: { d: flat },
                ease: "power2.easeOut",

            })
            .to(".loader-wrap", {
                y: -1500,
            })
            .to(".loader-wrap", {
                zIndex: -1,
                display: "none",
            });



    }, []);

    useEffect(() => {
        const animateit = (e) => {
            const hoverAnim = e.currentTarget.querySelector('.hover-anim');
            const { offsetX: x, offsetY: y } = e;
            const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
            const move = 25;
            const xMove = (x / width) * (move * 2) - move;
            const yMove = (y / height) * (move * 2) - move;
            hoverAnim.style.transform = `translate(${xMove}px, ${yMove}px)`;
            if (e.type === 'mouseleave') hoverAnim.style.transform = '';
        };

        const editCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            cursorRef.current.style.left = `${x}px`;
            cursorRef.current.style.top = `${y}px`;
        };

        linkRef.current.forEach(link => {
            link.addEventListener('mousemove', animateit);
            link.addEventListener('mouseleave', animateit);
        });
        window.addEventListener('mousemove', editCursor);

        return () => {
            linkRef.current.forEach(link => {
                link.removeEventListener('mousemove', animateit);
                link.removeEventListener('mouseleave', animateit);
            });
            window.removeEventListener('mousemove', editCursor);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleSubMenuToggle = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const handleSubSubMenuToggle = () => {
        setSubSubMenuOpen(!subSubMenuOpen);
    };

    const scrollToTop = () => {
        const start = window.scrollY; // موقعیت شروع
        const duration = 800; // زمان کل انیمیشن بر حسب میلی‌ثانیه
        const startTime = performance.now(); // زمان شروع انیمیشن

        const animateScroll = (currentTime) => {
            const timeElapsed = currentTime - startTime; // زمان گذشته
            const progress = Math.min(timeElapsed / duration, 1); // محاسبه پیشرفت

            // استفاده از تابع easing برای حرکات نرم‌تر
            const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

            const scrollY = start * (1 - easeInOutQuad(progress)); // موقعیت جدید بر حسب easing
            window.scrollTo(0, scrollY);

            if (progress < 1) {
                requestAnimationFrame(animateScroll); // ادامه انیمیشن
            }
        };

        requestAnimationFrame(animateScroll); // شروع انیمیشن
    };



    return (

        <>
            <div className="loader-wrap">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path ref={svgRef} d="M0,1005S175,995,500,995s500,5,500,5V0H0Z" />
                </svg>
                <div className="loader-wrap-heading">
                    <div className="load-text">
                        <span>L</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>
                </div>
            </div>
            <div ref={cursorRef} className="cursor" />
            <canvas className="banner_canvas" id="canvas_banner" />
            <div className={`progress-wrap cursor-pointer ${isProgressActive ? 'active-progress' : ''}`} onClick={scrollToTop}>
    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
                transition: 'stroke-dashoffset 10ms linear',
                strokeDasharray: '307.919, 307.919',
                strokeDashoffset: strokeDashoffset,
            }}
        />
    </svg>
</div>

            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="logo" to="#">
                        <img src={common_imgsLogo_light} alt="logo" />
                    </a>
                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about/">About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services/">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/portfolio/">Portfolio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/html-templates/">HTML Templates</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog/">Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="topnav d-flex align-items-center">
                        <Link to="/contact/" className="butn butn-rounded">
                            <div className="d-flex align-items-center">
                                <span>Start Project</span>
                                <span className="icon ml-10">
                                    <img src={common_imgs_iconsarrow_top_right} alt="" />
                                </span>
                            </div>
                        </Link>
                        <div className="menu-icon cursor-pointer" onClick={toggleMenu}>
                            <span className={`icon ${isHovered ? 'ti-align-center' : 'ti-align-right'}`} />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`hamenu ${isMenuOpen ? 'open' : ''}`} style={{ left: isMenuOpen ? '0' : '-100%' }}>
                <div className="close-menu cursor-pointer" onClick={toggleMenu}>✕</div>
                <div className="container-fluid rest d-lg-flex">
                    <div className="menu-links">
                        <ul className="main-menu rest">
                            {['Home', 'About Me', 'Portfolio', 'Contact Me', 'Blog'].map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={hoveredIndex !== null && hoveredIndex !== index ? 'hoverd' : ''}
                                >
                                    <div className="o-hidden">
                                        {item === 'Portfolio' ? (
                                            <div className="link cursor-pointer dmenu" onClick={handleSubMenuToggle}>
                                                <span className="fill-text" data-text={item}>{item}</span>
                                                <i />
                                            </div>
                                        ) : item === 'Home' ? (
                                            <Link to="/" className="link">
                                                <span className="fill-text" data-text={item}>{item}</span>
                                            </Link>
                                        ) : (
                                            <Link to={`/${item.replace(' Me', '').toLowerCase().replace(' ', '')}/`} className="link">
                                                <span className="fill-text" data-text={item}>{item}</span>
                                            </Link>
                                        )}
                                    </div>
                                    {item === 'Portfolio' && (
                                        <div className={`sub-menu ${subMenuOpen ? 'sub-open' : ''}`} style={{ display: subMenuOpen ? 'block' : 'none' }}>
                                            <ul>
                                                <li>
                                                    <Link to="/html-templates/" className="sub-link">HTML Templates</Link>
                                                </li>
                                                <li>
                                                    <Link to="/portfolio/" className="sub-link">Works</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="cont-info valign">
                        <div className="text-center full-width">
                            <div className="logo">
                                <img src={common_imgsLogo_light} alt="" />
                            </div>
                            <div className="social-icon mt-40">
                                <a to="https://github.com/FarhamAghdasi/"><i className="fab fa-github" /></a>
                                <a to="https://t.me/farhamaghdasi"><i className="fab fa-telegram" /></a>
                                <a to="https://instagram.com/farhamaghdasi"><i className="fab fa-instagram" /></a>
                            </div>
                            <div className="item mt-30">
                                <h5>Amol , Mazandaran Province, <br /> Iran</h5>
                            </div>
                            <div className="item mt-10">
                                <h5><a to="tel:+989391213094">+98 939 1213094</a></h5>
                            </div>
                            <div className="item mt-10">
                                <h5><a to="mailto:farhamaghdasi08@gmail.com">farhamaghdasi08@gmail.com</a></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* سایر کدها مانند منوی همبرگر و لینک‌ها */}
        </>
    );
};

export default Header;