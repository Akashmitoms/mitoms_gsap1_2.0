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
    <div class="banner-section">
        <div class="main-banner banner-features">
            <div class="banner-wrapper">
                <div class="text-slide">
                    <h1 class="heading-wrap">The Blog</h1>
                    <p class="sub-heading">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit, gravida morbi lacus
                        pulvinar libero litora elementum urna, auctor accumsan vulputate
                    </p>
                    <form class="search-category">
                        <input type="search" class="search-input" placeholder="Search all things" required>
                        <button type="submit" class="search-button"><span class="fa-brands fa-searchengin"></span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="filter-section">
        <div class="filter-inner bg-light">
            <div class="blog-list-wrapper">
                <div class="blog-list">
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog1.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">News &amp; Updates</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Lorem ipsum dolor sit amet consectetur adipiscing elit</a></h3>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog2.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">Design</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Massa nulla et ac tempus purus facilisis ridiculus</a></h3>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog3.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">Business</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Vitae cras turpis condimentum sagittis augue</a></h3>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog4.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">News &amp; Updates</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Dis aliquam donec habitasse elementum pharetra rhoncus</a></h3>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog5.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">Business</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Gravida faucibus platea nascetur semper habitant</a></h3>
                        </div>
                    </div>
                    <div class="blog-item">
                        <div class="blog-image">
                            <figure>
                                <img src="/assets/images/blog6.jpg" alt="img" class="blog-thumb">
                            </figure>
                        </div>
                        <div class="blog-content">
                            <div class="blog-top-content">
                                <div class="blog-cat">Design</div>
                            </div>
                            <h3 class="blog-title"><a href="single.html">Cubilia taciti tempor nam libero blandit odio lectus</a></h3>
                        </div>
                    </div>
                </div>
                <nav class="navigation pagination">
                    <div class="nav-links">
                        <span class="page-numbers current">1</span>
                        <a class="page-numbers" href="#">2</a>
                        <a class="next page-numbers" href="#"><i class="fa-solid fa-angle-right fa-fw"></i></a>
                    </div>
                </nav>
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
  name: "Blog",
  
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