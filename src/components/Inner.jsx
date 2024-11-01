import assets_imgssmoke_bg from '../assets/imgs/smoke-bg.jpg';

import React from 'react';
import { Link } from 'react-router-dom';

const Inner = ({ title, first, secend, paragraph, links }) => {
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
      <div className="bg-img" data-background={assets_imgssmoke_bg} />
    </header>
  );
};

export default Inner;