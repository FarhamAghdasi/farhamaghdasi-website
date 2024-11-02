import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        // بعد از 1 ثانیه تایپ کردن را آغاز کن
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 1000); // زمان تاخیر به میلی‌ثانیه (1000 میلی‌ثانیه = 1 ثانیه)

        // پاک کردن تایمر در صورت unmount شدن کامپوننت
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className="header-personal h-100">
            <div className="container ontop">
                <div className="caption text-center">
                    <h1>
                        Farham <br /> Aghdasi
                    </h1>
                </div>
                <div className="row justify-content-center text">
                    <div className="col-lg-7 col-md-10">
                        <div className="text-center">
                            <h2>
                                {startTyping && (
                                    <Typewriter
                                        words={["Junior Front-End Developer", "Junior SEO", "Junior React Developer" , "Junior PHP Developer"]}
                                        loop={true}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1500}
                                    />
                                )}
                            </h2>
                            <div className="social-icons new">
                                <a href="https://t.me/farhamaghdasi">
                                    <i className="fa-brands fa-telegram" />{" "}
                                </a>
                                <a href="https://instagram.com/farhamaghdasi">
                                    <i className="fa-brands fa-instagram" />{" "}
                                </a>
                                <a href="https://github.com/FarhamAghdasi/">
                                    <i className="fa-brands fa-github" />{" "}
                                </a>
                            </div>
                            <p>
                                I am always seeking to learn and improve my skills, and I plan to
                                study advanced technologies like mongoDB, Node.js soon. With
                                attention to detail, I have successfully completed small projects,
                                using them as a foundation for further growth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
