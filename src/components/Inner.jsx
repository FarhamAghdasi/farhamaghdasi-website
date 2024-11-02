import assets_imgssmoke_bg from '../assets/imgs/smoke-bg.jpg';

import React from 'react';
import { Link } from 'react-router-dom';

const Inner = ({ title, first, secend, paragraph, links, contact }) => {
  return (
    <header className="header-pg">
      <div className="container">
        <div className="text-center">
          <div className="caption mb-100">
            <h1>{title}</h1>
            <h6>
              ( <Link to="/">{first}</Link> - <span>{secend}</span> )
            </h6>
            {paragraph && links && (
              <p>
                {paragraph} <Link to="/html-templates/">{links}</Link>
              </p>
            )}
          </div>
        </div>
      </div>
      {contact ? (
        <div className="google-map">
          <iframe
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=hollwood&t=&z=11&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      ) : (
        <div className="bg-img" data-background={assets_imgssmoke_bg} />
      )}
    </header>
  );
};

export default Inner;
