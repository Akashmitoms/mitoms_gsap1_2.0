<template>
  <div class="body">
    <header id="header" class="header">
      <div class="header-middle">
        <div class="runic-menu-wapper"></div>
        <div class="header-middle-inner">
          <div class="header-logo">
            <router-link to="/">
              <div class="logo_style">
                <img
                  src="/assets/images/Logo-01001.png"
                  width="50px"
                  class="logo-white"
                /><span>Mitoms</span>
              </div>
            </router-link>
          </div>
          <div class="header-nav">
            <div class="box-header-nav">
              <ul
                id="menu-primary-menu"
                class="clone-main-menu runic-clone-mobile-menu main-menu"
              >
                <li class="menu-item">
                  <router-link to="/community">Community</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/explore">Explore</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/features">Features</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/blog">Blog</router-link>
                </li>
                <li class="menu-item">
                  <router-link to="/about">About</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="header-control">
            <div class="block-menu-bar">
              <a class="menu-bar menu-toggle" href="#">
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <router-link to="/contact" class="button-primary header-button"
              >Contact</router-link
            >
          </div>
        </div>
      </div>
    </header>
    <main class="site-main">
      <div class="banner-section">
        <div class="main-banner">
          <div class="banner-wrapper">
            <div class="text-slide">
              <h1 class="heading-wrap">Effective Solutions</h1>
              <p class="sub-heading">
                We prioritize understanding your unique business needs, helping
                you achieve operational excellence and delivering impactful
                results.
              </p>
              <a href="explore.html" class="button-arrow">
                <span class="arrow-text">Explore now</span>
                <span class="arrow-icon"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="box-section">
        <div class="three-box-content">
          <div class="box-wrapper">
            <div class="box">
              <div class="box-icon">
                <div class="icon-inner dark">
                  <img src="/assets/images/digital-printing.png" alt="img" />
                </div>
              </div>
              <div class="box-text">
                <h3 class="box-title">Web Development</h3>
                <!-- <a href="#" class="box-link">Learn more</a> -->
              </div>
            </div>
            <div class="box">
              <div class="box-icon">
                <div class="icon-inner dark">
                  <img src="/assets/images/graphics-design.png" alt="img" />
                </div>
              </div>
              <div class="box-text">
                <h3 class="box-title">Graphics Design</h3>
                <!-- <a href="#" class="box-link">Learn more</a> -->
              </div>
            </div>
            <div class="box">
              <div class="box-icon">
                <div class="icon-inner dark">
                  <img src="/assets/images/social-media.png" alt="img" />
                </div>
              </div>
              <div class="box-text">
                <h3 class="box-title">SEO and Google Ads</h3>
                <!-- <a href="#" class="box-link">Learn more</a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="platform-section">
        <div class="platform-wrapper bg-light">
            <div class="platform-heading">
                <div class="text-run">
                    Tempus eget nullam sed urna
                </div>
                <p class="text-desc">Parturient sociis habitant leo praesent risus proin purus accumsan arcu ullamcorper fermentum</p>
            </div>
            <div class="platform-container">
                <div class="platform-columns clearfix">
                    <div class="platform-column col-md-4 col-sm-12">
                        <div class="platform-box">
                            <h4 class="platform-title">23K</h4>
                            <p class="platform-content">Project Done</p>
                        </div>
                    </div>
                    <div class="platform-column col-md-4 col-sm-12">
                        <div class="platform-box">
                            <h4 class="platform-title">1.25M</h4>
                            <p class="platform-content">Happy Client</p>
                        </div>
                    </div>
                    <div class="platform-column col-md-4 col-sm-12">
                        <div class="platform-box">
                            <h4 class="platform-title">1.2K</h4>
                            <p class="platform-content">Award Winner</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
      <div class="block-setion">
        <div class="block-wrapper bg-light">
          <div class="block-heading">
            <div class="text-opacity">What We Do</div>
            <div class="text-run">Accelerating Your Business Growth</div>
            <p class="text-desc">
              Mitoms empowers businesses by providing innovative IT solutions
              that improve efficiency, enhance customer engagement, and deliver
              tangible growth. Our expertise ranges from building robust
              websites to developing sophisticated mobile applications, helping
              you scale your business.
            </p>
          </div>
          <div class="block-container">
            <div class="block-columns clearfix">
              <div class="block-column col-md-4 col-sm-12">
                <div class="column-inner">
                  <div class="box-icon">
                    <div class="icon-inner title-icon">
                      <i class="fa-solid fa-shield-heart"></i>
                    </div>
                  </div>
                  <h4 class="block-title">Web Development</h4>
                  <p class="block-desc">
                    We build dynamic and user-centric websites that reflect your
                    business vision, providing seamless experiences that drive
                    long-term success.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
              <div class="block-column col-md-4 col-sm-12">
                <div class="column-inner">
                  <div class="box-icon">
                    <div class="icon-inner title-icon">
                      <i class="fa-solid fa-truck-fast"></i>
                    </div>
                  </div>
                  <h4 class="block-title">Graphics Design</h4>
                  <p class="block-desc">
                    We design visually stunning graphics that capture your
                    brand's essence, delivering impactful visuals that enhance
                    engagement and support long-term success.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
              <div class="block-column col-md-4 col-sm-12">
                <div class="column-inner">
                  <div class="box-icon">
                    <div class="icon-inner title-icon">
                      <i class="fa-solid fa-ticket"></i>
                    </div>
                  </div>
                  <h4 class="block-title">SEO and Google Ads</h4>
                  <p class="block-desc">
                    We develop strategic SEO and Google Ads campaigns that
                    elevate your online presence, driving targeted traffic and
                    maximizing your digital impact for sustained growth.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="overview-section">
        <div class="overview-wrap bg-light">
          <div class="overview-heading">
            <div class="text-run">Services We Offer</div>
            <p class="text-desc">
              Mitoms Technologies Private Limited is your trusted partner in
              digital transformation. We offer a wide range of IT services.
            </p>
          </div>
          <div class="overview-container overview-pin first">
            <div class="overview-block clearfix first reverse">
              <div class="col-info col-md-6 col-sm-12">
                <div class="overview-box">
                  <div class="box-icon">
                    <div class="icon-inner">
                      <i class="fa-solid fa-feather"></i>
                    </div>
                  </div>
                  <h4 class="overview-title">
                    Web Development & Web Application Development
                  </h4>
                  <p class="overview-p">
                    <i>Custom Websites Tailored for Your Business</i>
                    <br /><br />
                    We build fast, secure, and scalable websites designed to
                    make an impact. Our web development services ensure a
                    powerful online presence with responsive designs, enhanced
                    user experience, and search engine optimization. From
                    e-commerce platforms to corporate websites, we deliver
                    solutions that drive results.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
              <div class="col-list col-md-6 col-sm-12">
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Responsive Design</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Performance Optimization</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Scalable Architecture</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">User-Centric Features</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Security Measures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-container overview-pin">
            <div class="overview-block clearfix">
              <div class="col-list dark col-md-6 col-sm-12">
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Cross-Platform Compatibility</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Scalable Solutions</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Performance Enhancement</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Business Alignment</p>
                  </div>
                </div>
              </div>
              <div class="col-info info-right col-md-6 col-sm-12">
                <div class="overview-box box-right">
                  <div class="box-icon">
                    <div class="icon-inner bg-orange">
                      <i class="fa-solid fa-sun"></i>
                    </div>
                  </div>
                  <h4 class="overview-title light">
                    Mobile Application Development & Software Development
                  </h4>
                  <p class="overview-p light">
                    <i>Apps that Deliver Engaging User Experiences </i
                    ><br /><br />
                    Mitoms develops feature-rich, user-friendly mobile
                    applications for iOS and Android that boost engagement and
                    efficiency, ensuring optimal performance across platforms.
                    We also offer comprehensive software development services,
                    delivering custom solutions to automate processes and drive
                    growth tailored to your business needs.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-container overview-pin dark">
            <div class="overview-block clearfix reverse">
              <div class="col-info col-md-6 col-sm-12">
                <div class="overview-box">
                  <div class="box-icon">
                    <div class="icon-inner">
                      <i class="fa-solid fa-rocket"></i>
                    </div>
                  </div>
                  <h4 class="overview-title">Website Revamping</h4>
                  <p class="overview-p">
                    <i>Transform Your Website with a Fresh Look</i><br /><br />
                    If your website needs a makeover, we offer complete
                    revamping services. We redesign outdated websites with a
                    modern, sleek look that aligns with the latest trends,
                    ensuring fast load times, mobile responsiveness, and
                    improved functionality.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
              <div class="col-list col-md-6 col-sm-12">
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Mobile Optimization</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Performance Enhancements</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Content Updates</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Technical Upgrades</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-container overview-pin">
            <div class="overview-block clearfix">
              <div class="col-list dark col-md-6 col-sm-12">
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Engaging Visuals</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Responsive Design</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">User-Centric Approach</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon bg-orange">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Accessibility</p>
                  </div>
                </div>
              </div>
              <div class="col-info info-right col-md-6 col-sm-12">
                <div class="overview-box box-right">
                  <div class="box-icon">
                    <div class="icon-inner bg-orange">
                      <i class="fa-solid fa-leaf"></i>
                    </div>
                  </div>
                  <h4 class="overview-title light">UI and UX Design</h4>
                  <p class="overview-p light">
                    <i>Creating Intuitive and Engaging User Experiences </i
                    ><br /><br />
                    Our UI/UX design services focus on creating seamless
                    interactions that prioritize user engagement and
                    satisfaction. We blend aesthetics with functionality,
                    designing interfaces that are visually appealing and easy to
                    navigate.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="overview-container gray">
            <div class="overview-block clearfix reverse">
              <div class="col-info col-md-6 col-sm-12">
                <div class="overview-box">
                  <div class="box-icon">
                    <div class="icon-inner icon-trading">
                      <i class="fa-solid fa-award"></i>
                    </div>
                  </div>
                  <h4 class="overview-title">Digital marketing</h4>
                  <p class="overview-p">
                    <i>Boost Your Visibility and Drive Organic Traffic </i
                    ><br /><br />
                    Our SEO & Google Ads services ensure that your website ranks
                    high on search engines, helping you attract more visitors
                    and convert them into customers. We cover on-page SEO,
                    technical audits, keyword research, content optimization,
                    and link building, maximizing your online visibility.
                  </p>
                  <a href="#" class="button-arrow">
                    <span class="arrow-text">Learn more</span>
                    <span class="arrow-icon"></span>
                  </a>
                </div>
              </div>
              <div class="col-list col-md-6 col-sm-12">
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">SEO Optimization</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Content Creation</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Social Media Management:</p>
                  </div>
                </div>
                <div class="list-check">
                  <div class="list-icon">
                    <i class="fa-solid fa-check"></i>
                  </div>
                  <div class="list-content">
                    <p class="list-p">Targeted Campaigns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="video-section">
        <div class="video-inner bg-light">
          <div class="new-space">
            <div class="text-opacity">get started</div>
            <div class="text-run">Himenaeos rutrum sociis pharetra</div>
            <p class="text-desc">
              Parturient vivamus nunc aliquet bibendum odio feugiat sem,
              vulputate per est etiam ad mauris torquent viverra quis
            </p>
          </div>
          <div class="video">
            <div class="video-control">
              <h3 class="video-title">Montes dis sodales platea ultrices</h3>
              <p class="video-desc">
                Pretium tristique laoreet habitant ut turpis elementum pulvinar
                cum ac urna volutpat, fermentum ultrices maecenas varius ligula
                sociosqu in scelerisque
              </p>
              <a
                href="#"
                data-videosite="vimeo"
                data-videoid="312418774"
                tabindex="0"
                class="slide-video"
                ><i class="fa-solid fa-play fa-fw"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="info-section">
        <div class="info-wrapper bg-dark">
          <div class="info-heading">
            <div class="text-opacity">learn more</div>
            <h2 class="text-run">Bibendum donec parturient</h2>
            <p class="text-desc">
              Integer hendrerit eu egestas ultricies laoreet eleifend class
              curae, nibh ullamcorper bibendum platea urna cubilia montes.
            </p>
          </div>
          <div class="info-container">
            <div class="info-columns clearfix">
              <div class="info-column col-md-6 col-sm-12">
                <a href="#" class="info-box">
                  <span>Place of worship</span>
                  <span class="info-icon">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
              <div class="info-column col-md-6 col-sm-12">
                <a href="#" class="info-box">
                  <span>Workplace</span>
                  <span class="info-icon">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
              <div class="info-column col-md-6 col-sm-12">
                <a href="#" class="info-box">
                  <span>Child care center</span>
                  <span class="info-icon">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
              <div class="info-column col-md-6 col-sm-12">
                <a href="#" class="info-box">
                  <span>Association</span>
                  <span class="info-icon">
                    <i class="fa-solid fa-arrow-right-long"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="faqs-section">
        <div class="faqs-wrapper bg-light">
          <div class="faqs-container">
            <div class="row">
              <div class="faqs-col-heading col-md-6 col-sm-12">
                <div class="faqs-heading">
                  <div class="text-opacity text-left mobile-center">faqs</div>
                  <div class="text-run text-left mobile-center">
                    frequently asked questions
                  </div>
                </div>
              </div>
              <div class="faqs-col-content col-md-6 col-sm-12">
                <div class="dropdown-accordion">
                  <div class="dropdown">
                    <div class="dropdown-toggle">
                      <div class="dropdown-icon"></div>
                      <div class="dropdown-title">
                        What features does we offer?
                      </div>
                    </div>
                    <div class="dropdown-list">
                      We offer a wide array of IT services, including web
                      development, mobile applications, software development,
                      SEO, and Google Ads management.
                    </div>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-toggle">
                      <div class="dropdown-icon"></div>
                      <div class="dropdown-title">Our Mission & Vissioin</div>
                    </div>
                    <div class="dropdown-list">
                      Our mission is to help businesses achieve their goals
                      through innovative technology solutions. Our vision is to
                      be a global leader in IT services, known for our
                      commitment to quality, innovation, and client
                      satisfaction.
                    </div>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-toggle">
                      <div class="dropdown-icon"></div>
                      <div class="dropdown-title">
                        Work Eticks & Complimency
                      </div>
                    </div>
                    <div class="dropdown-list">
                      We adhere to the highest standards of work ethics and
                      compliance, ensuring that every project we undertake is
                      aligned with industry regulations and best practices
                    </div>
                  </div>
                  <div class="dropdown">
                    <div class="dropdown-toggle">
                      <div class="dropdown-icon"></div>
                      <div class="dropdown-title">Strategy to Achive Goal</div>
                    </div>
                    <div class="dropdown-list">
                      We use a data-driven, results-oriented approach to help
                      businesses achieve their objectives efficiently. Our
                      strategic planning and execution are designed to deliver
                      measurable results that align with your long-term goals.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cta-section">
        <div class="cta-wrapper bg-orange">
          <div class="cta-block">
            <div class="text-opacity">Get started</div>
            <div class="text-run">A reflection of you in Every Dimension</div>
            <a href="#" class="button-arrow">
              <span class="arrow-text">Learn more</span>
              <span class="arrow-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </main>
    <footer class="main-footer">
      <div class="content-inner bg-dark">
        <div class="top-footer">
          <div class="col-logo">
            <a class="link-block" href="#"
              ><img src="/assets/images/logo-white.png"
            /></a>
            <div class="footer-socials">
              <a href="#" class="link-icon"
                ><span class="fa-brands fa-facebook-f"></span
              ></a>
              <a href="#" class="link-icon"
                ><span class="fa-brands fa-x-twitter"></span
              ></a>
              <a href="#" class="link-icon"
                ><span class="fa-brands fa-google-plus-g"></span
              ></a>
              <a href="#" class="link-icon"
                ><span class="fa-brands fa-pinterest-p"></span
              ></a>
            </div>
          </div>
          <div class="col-menu">
            <h4 class="footer-menu-title">EXPLORE</h4>
            <ul class="footer-menu-list">
              <li><a href="#" class="footer-menu-link">Resources</a></li>
              <li><a href="#" class="footer-menu-link">Careers</a></li>
              <li><a href="#" class="footer-menu-link">Testimonial</a></li>
              <li><a href="#" class="footer-menu-link">Help Center</a></li>
            </ul>
          </div>
          <div class="col-menu">
            <h4 class="footer-menu-title">ABOUT</h4>
            <ul class="footer-menu-list">
              <li><a href="#" class="footer-menu-link">Promotions</a></li>
              <li><a href="#" class="footer-menu-link">Partners</a></li>
              <li><a href="#" class="footer-menu-link">Directions</a></li>
              <li><a href="#" class="footer-menu-link">FAQs</a></li>
            </ul>
          </div>
          <div class="form-block">
            <h3>Subscribe to our newsletter</h3>
            <div class="form-desc">
              Suspendisse netus proin eleifend fusce sollicitudin potenti vel
              magnis nascetur
            </div>
            <form class="mc4wp-form" method="post">
              <div class="mc4wp-form-fields">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email address"
                  required
                />
                <input type="submit" value="Sign up" />
                <div class="mc4wp-response">
                  <div class="mc4wp-alert mc4wp-success" role="alert">
                    <p>
                      Thank you, your sign-up request was successful! Please
                      check your email inbox to confirm.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="bottom-footer">
          <div>© 2024 Runic. All Rights Reserved</div>
          <ul class="list-bottom-footer">
            <li>
              <a href="#" class="link-bottom-footer">Terms &amp; Conditions</a>
            </li>
            <li><a href="#" class="link-bottom-footer">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import TheHeader from "./TheHeader.vue";
import { initJQueryFunctions } from "@/assets/js/functions.js"; // adjust the path as needed

export default {
  name: "Features",

  mounted() {
    // Reinitialize jQuery functions when component is mounted
    initJQueryFunctions();
  },
};
</script>

<style scoped>
.logo_style {
  display: flex;
  gap: 1rem;
}
.logo_style span {
  color: white;
  font-size: 2rem;
  font-weight: 600;
  padding: 1rem 0;
}
</style>
