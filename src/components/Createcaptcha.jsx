import React, { useState, useEffect } from 'react';

const CreateCaptcha = ({ onCaptchaChange }) => {
  const [captchaCode, setCaptchaCode] = useState('');
  const [captchaImage, setCaptchaImage] = useState('');

  // تابع برای تولید کد CAPTCHA
  const generateCaptchaCode = () => {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
  };

  // تابع برای تولید تصویر CAPTCHA
  const generateCaptchaImage = (code) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const width = 200;
    const height = 60;
    canvas.width = width;
    canvas.height = height;

    // رنگ‌های پس‌زمینه و متن
    const backgroundColor = '#f0f0f0';
    const textColor = '#333';
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, width, height);

    // افزودن نویز (خطوط تصادفی)
    const lineColor = '#ccc';
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * width, Math.random() * height);
      ctx.lineTo(Math.random() * width, Math.random() * height);
      ctx.strokeStyle = lineColor;
      ctx.stroke();
    }

    // افزودن متن CAPTCHA به تصویر
    ctx.font = '30px Arial';
    ctx.fillStyle = textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(code, width / 2, height / 2);

    // تبدیل تصویر Canvas به URL برای نمایش
    const imageUrl = canvas.toDataURL('image/png');
    return imageUrl;
  };

  // ایجاد کد CAPTCHA و تصویر آن
  const getCaptcha = () => {
    const newCaptchaCode = generateCaptchaCode();
    const newCaptchaImage = generateCaptchaImage(newCaptchaCode);
    setCaptchaCode(newCaptchaCode);
    setCaptchaImage(newCaptchaImage);
  };

  // بارگذاری CAPTCHA هنگام بارگذاری کامپوننت
  useEffect(() => {
    getCaptcha();
  }, []);

  // هنگام تغییر ورودی CAPTCHA توسط کاربر
  const handleCaptchaInputChange = (e) => {
    onCaptchaChange(e.target.value);
  };

  // بررسی صحت کد CAPTCHA وارد شده توسط کاربر
  const isCaptchaValid = (input) => {
    return input === captchaCode;
  };

  return (
    <div className="col-12">
      <div className="form-group d-flex align-items-center">
        <img
          src={captchaImage}
          alt="Captcha"
          style={{ cursor: "pointer", marginRight: "10px" }}
          onClick={getCaptcha}  // برای بارگذاری مجدد تصویر CAPTCHA
        />
        <input
          type="text"
          name="captcha"
          placeholder="Enter CAPTCHA"
          onChange={handleCaptchaInputChange} // ارسال ورودی به والد
          required
        />
      </div>

      {/* بررسی و نمایش پیام خطا برای کد نادرست */}
      {captchaCode && !isCaptchaValid(captchaCode) && (
        <div style={{ color: 'red', fontSize: '12px' }}>
          Incorrect CAPTCHA code. Please try again.
        </div>
      )}
    </div>
  );
};

export default CreateCaptcha;
