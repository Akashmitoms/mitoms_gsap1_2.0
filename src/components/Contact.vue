<template>
   <div class="body">
<header id="header" class="header header-dark">
    <div class="header-middle">
        <div class="runic-menu-wapper"></div>
        <div class="header-middle-inner">
            <div class="header-logo">
                <router-link to="/">
                    <div class="logo_style">
                <img
                  src="/assets/images/Logo-01001.png" width="50px"
                  class="logo-white"
                /><span>Mitoms</span>
              </div>
                </router-link>
            </div>
            <div class="header-nav">
                <div class="box-header-nav">
                    <ul id="menu-primary-menu"
                        class="clone-main-menu runic-clone-mobile-menu main-menu">
                        <li class="menu-item"><router-link to="/community">Community</router-link></li>
                        <li class="menu-item"><router-link to="/explore">Explore</router-link></li>
                        <li class="menu-item"><router-link to="/features">Features</router-link></li>
                        <li class="menu-item"><router-link to="/blog">Blog</router-link></li>
                        <li class="menu-item"><router-link to="/about">About</router-link></li>
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
                <router-link to="/contact" class="button-primary header-button">Contact</router-link>
            </div>
        </div>
    </div>
</header>
<main class="site-main">
    <div class="contact-section">
        <div class="contact-inner bg-light">
            <div class="contact-heading">
                <div class="text-run text-big">Get in touch</div>
                <div class="text-desc">
                    Lorem ipsum dolor sit amet consectetur adipiscing
                    <br> elit in suscipit ad himenaeos magnis per.
                </div>
            </div>
            <div class="contact-form">
                <form class="wpcf7-form">
                    <p>
                        <label>First Name <span class="required">*</span><br>
                            <span class="wpcf7-form-control-wrap">
                                <input name="first-name" value="" size="40" class="wpcf7-form-control wpcf7-text"
                                      type="text" required>
                            </span>
                        </label>
                    </p>
                    <p>
                        <label>Last Name <span class="required">*</span><br>
                            <span class="wpcf7-form-control-wrap">
                                <input name="last-name" value="" size="40" class="wpcf7-form-control wpcf7-text"
                                       type="text" required>
                            </span>
                        </label>
                    </p>
                    <p>
                        <label>Email <span class="required">*</span><br>
                            <span class="wpcf7-form-control-wrap">
                                <input name="email" value="" size="40" class="wpcf7-form-control wpcf7-text"
                                       type="email" required>
                            </span>
                        </label>
                    </p>
                    <p>
                        <label>Phone Number <span class="required">*</span><br>
                            <span class="wpcf7-form-control-wrap">
                                <input name="phone" value="" size="40" class="wpcf7-form-control wpcf7-text" type="text"
                                       required>
                            </span>
                        </label>
                    </p>
                    <p>
                        <label>Message <span class="required">*</span><br>
                            <span class="wpcf7-form-control-wrap">
                                <textarea name="your-message" cols="40" rows="10"
                                          class="wpcf7-form-control wpcf7-textarea" required></textarea>
                            </span>
                        </label>
                    </p>
                    <p><input value="Submit" class="wpcf7-form-control wpcf7-submit button-primary" type="Submit"></p>
                    <div class="wpcf7-response-output" aria-hidden="true">
                        Thank you for your message. It has been sent.
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="info-section">
        <div class="info-wrapper bg-light">
            <div class="info-heading">
                <div class="text-opacity">learn more</div>
                <h2 class="text-run">Bibendum donec parturient</h2>
                <p class="text-desc">Integer hendrerit eu egestas ultricies laoreet eleifend class curae, nibh
                    ullamcorper bibendum platea urna cubilia montes.</p>
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
    <div class="cta-section">
        <div class="cta-wrapper bg-orange">
            <div class="cta-block">
                <div class="text-run">Special offers are waiting for you!</div>
                <form class="mc4wp-form" method="post">
                    <div class="mc4wp-form-fields">
                        <input type="email" name="EMAIL" placeholder="Enter your email" required>
                        <input type="submit" value="Subscribe">
                        <div class="mc4wp-response">
                            <div class="mc4wp-alert mc4wp-success" role="alert"><p>Thank you, your sign-up
                                request was successful! Please check your email inbox to confirm.</p></div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</main>


</div>
</template>

<script>
// import TheHeader from "./TheHeader.vue";
import { initJQueryFunctions } from '@/assets/js/functions.js'; // adjust the path as needed


export default {
  name: "Contact",

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