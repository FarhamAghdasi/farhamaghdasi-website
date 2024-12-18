import React, { useEffect, useState } from 'react';

const Work = () => {
  const [htmlTemplates, setHtmlTemplates] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  // تابع برای دریافت نمونه کارها
  const fetchPortfolios = async () => {
    try {
      const response = await fetch('https://api.farhamaghdasi.ir/portfolios');
      const data = await response.json();
      setPortfolios(data.portfolio || []); // دسترسی به آرایه‌ی اصلی
    } catch (error) {
      console.error('Error fetching portfolios:', error);
    }
  };

  // تابع برای دریافت قالب‌های HTML
  const fetchHtmlTemplates = async () => {
    try {
      const response = await fetch('https://api.farhamaghdasi.ir/templates');
      const data = await response.json();
      setHtmlTemplates(data.templates || []); // دسترسی به آرایه‌ی اصلی
    } catch (error) {
      console.error('Error fetching HTML templates:', error);
    }
  };

  // درخواست داده‌ها در اولین رندر
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchPortfolios(), fetchHtmlTemplates()]);
      setLoading(false); // بارگذاری پایان یافته
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="work-min ontop bord-thin-top-light">
      <div className="container pt-30 bord-thin-top-light">
        <div className="sec-head mb-80">
          <h2>My Projects and Templates</h2>
        </div>
        <div className="row">
          {/* نمایش نمونه کارها */}
          {portfolios.length > 0 ? (
            portfolios.slice(0, 2).map((portfolio) => (
              <div className="col-lg-6" key={portfolio.url}>
                <div className="item md-mb50">
                  <div className="img fit-img">
                    <img src={`https://api.farhamaghdasi.ir/backend/${portfolio.thumbnail}`} alt={portfolio.title} />
                  </div>
                  <div className="cont mt-30">
                    <div className="info">
                      <span className="date">{new Date(portfolio.date).getFullYear()}</span>
                      <span className="tag">{portfolio.category || 'Portfolio'}</span>
                    </div>
                    <h5><a href={`http://farhamaghdasi.ir/portfolio/${portfolio.url}/`}>{portfolio.title}</a></h5>
                    <p>{portfolio.Shortdescription}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No portfolios available at the moment.</p>
            </div>
          )}
          {/* نمایش قالب‌های HTML */}
          {htmlTemplates.length > 0 ? (
            htmlTemplates.slice(0, 2).map((template) => (
              <div className="col-lg-6" key={template.url}>
                <div className="item md-mb50">
                  <div className="img fit-img">
                    <img src={`https://api.farhamaghdasi.ir/backend/${template.thumbnail}`} alt={template.title} />
                  </div>
                  <div className="cont mt-30">
                    <div className="info">
                      <span className="date">{new Date(template.date).getFullYear()}</span>
                      <span className="tag">{template.category || 'HTML Template'}</span>
                    </div>
                    <h5><a href={`http://farhamaghdasi.ir/html-templates/${template.url}/`}>{template.title}</a></h5>
                    <p>{template.Shortdescription}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No HTML templates available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
