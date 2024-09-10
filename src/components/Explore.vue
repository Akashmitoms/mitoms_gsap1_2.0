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
        <div class="main-banner">
            <div class="banner-wrapper">
                <div class="text-slide">
                    <h1 class="heading-wrap">Innovating ideas</h1>
                    <p class="sub-heading">Lorem ipsum dolor sit amet consectetur adipiscing elit, gravida morbi lacus
                        pulvinar libero litora elementum urna</p>
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
                            <img src="/assets/images/digital-printing.png" alt="img">
                        </div>
                    </div>
                    <div class="box-text">
                        <h3 class="box-title">digital printing</h3>
                        <a href="#" class="box-link">Learn more</a>
                    </div>
                </div>
                <div class="box">
                    <div class="box-icon">
                        <div class="icon-inner dark">
                            <img src="/assets/images/graphics-design.png" alt="img"></div>
                    </div>
                    <div class="box-text">
                        <h3 class="box-title">graphics design</h3>
                        <a href="#" class="box-link">Learn more</a>
                    </div>
                </div>
                <div class="box">
                    <div class="box-icon">
                        <div class="icon-inner dark">
                            <img src="/assets/images/social-media.png" alt="img">
                        </div>
                    </div>
                    <div class="box-text">
                        <h3 class="box-title">social media</h3>
                        <a href="#" class="box-link">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="video-section style-01">
        <div class="video-inner bg-light">
            <div class="new-space">
                <div class="text-opacity">get started</div>
                <div class="text-run">Himenaeos rutrum sociis pharetra</div>
                <p class="text-desc">Parturient vivamus nunc aliquet bibendum odio feugiat sem, vulputate per est etiam
                    ad mauris torquent viverra quis</p>
            </div>
            <div class="video">
                <div class="video-control">
                    <h3 class="video-title">Montes dis sodales platea ultrices </h3>
                    <p class="video-desc">Pretium tristique laoreet habitant ut turpis elementum pulvinar cum ac urna
                        volutpat, fermentum ultrices maecenas varius ligula sociosqu in scelerisque</p>
                    <a href="#" data-videosite="vimeo" data-videoid="312418774" tabindex="0" class="slide-video"><i class="fa-solid fa-play fa-fw"></i></a>
                </div>
            </div>
        </div>
    </div>
    <div class="world-section">
        <div class="world-inner bg-light">
            <div class="row">
                <div class="col-md-4 col-sm-12">
                    <div class="text-run text-left mobile-center">Discovery The World</div>
                    <div class="text-desc text-left mobile-center">
                        Feugiat hendrerit cubilia curae ultricies vivamus nisl quisque viverra, praesent faucibus.
                    </div>
                    <a href="#" class="button-arrow">
                        <span class="arrow-text">Learn more</span>
                        <span class="arrow-icon"></span>
                    </a>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="swiper-container swiper-slider world-slide">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide world-item">
                                <div class="world-box">
                                    <div class="box-image">
                                        <img src="/assets/images/world1.jpg" alt="img">
                                    </div>
                                    <div class="world-content">
                                        <h4 class="world-title">Curabitur magnis</h4>
                                        <div class="world-desc">
                                            Lorem ipsum dolor sit amet consectetur adipiscing elit senectus,
                                            nam hendrerit cum elementum magna etiam fermentum tincidunt.
                                        </div>
                                    </div>
                                    <a class="world-detail-link" href="#"></a>
                                </div>
                            </div>
                            <div class="swiper-slide world-item">
                                <div class="world-box">
                                    <div class="box-image">
                                        <img src="/assets/images/world2.jpg" alt="img">
                                    </div>
                                    <div class="world-content">
                                        <h4 class="world-title">Nullam rhoncu</h4>
                                        <div class="world-desc">
                                            Enim penatibus venenatis ligula iaculis interdum risus lacinia,
                                            potenti curabitur urna turpis nec tempus nulla
                                        </div>
                                    </div>
                                    <a class="world-detail-link" href="#"></a>
                                </div>
                            </div>
                            <div class="swiper-slide world-item">
                                <div class="world-box">
                                    <div class="box-image">
                                        <img src="/assets/images/world3.jpg" alt="img">
                                    </div>
                                    <div class="world-content">
                                        <h4 class="world-title">Taciti rutrum</h4>
                                        <div class="world-desc">
                                            Justo dui massa fusce metus nunc libero rhoncus torquent, iaculis
                                            fringilla ante aenean est vestibulum ornare.
                                        </div>
                                    </div>
                                    <a class="world-detail-link" href="#"></a>
                                </div>
                            </div>
                            <div class="swiper-slide world-item">
                                <div class="world-box">
                                    <div class="box-image">
                                        <img src="/assets/images/world4.jpg" alt="img">
                                    </div>
                                    <div class="world-content">
                                        <h4 class="world-title">Habitant eros</h4>
                                        <div class="world-desc">
                                            Nascetur auctor molestie gravida natoque turpis posuere, vivamus
                                            iaculis velit pharetra ad vulputate vel tempor.
                                        </div>
                                    </div>
                                    <a class="world-detail-link" href="#"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="blog-section">
        <div class="blog-inner bg-dark">
            <div class="blog-heading">
                <h3 class="text-run text-left">Latest News</h3>
                <a href="blog.html" class="button-primary">view all</a>
            </div>
            <div class="blog-list-wrapper">
                <div class="blog-list">
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
            </div>
        </div>
    </div>
    <div class="rwb-section">
        <div class="rwb-inner bg-light">
            <div class="rwb-container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="text-opacity text-left mobile-center">Tempus gravida</div>
                        <div class="text-run text-left mobile-center">Rhoncus risus dis dui iaculis</div>
                        <div class="text-desc text-left mobile-center">Feugiat hendrerit cubilia curae ultricies vivamus
                            nisl quisque viverra, praesent faucibus fusce nisi tristique nulla vel.
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <a href="#" class="link-block-custom">
                            <span class="link-text">Orci urna dictumst</span>
                            <span class="link-block-icon">
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </a>
                        <a href="#" class="link-block-custom">
                            <span class="link-text">tristique taciti</span>
                            <span class="link-block-icon">
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </a>
                        <a href="#" class="link-block-custom">
                            <span class="link-text">tellus quisque</span>
                            <span class="link-block-icon">
                                <i class="fa-solid fa-arrow-right-long"></i>
                            </span>
                        </a>
                        <a href="#" class="link-block-custom">
                            <span class="link-text">mollis habitasse</span>
                            <span class="link-block-icon">
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

</div>
</template>

<script>
// import TheHeader from "./TheHeader.vue";
import { initJQueryFunctions } from '@/assets/js/functions.js'; // adjust the path as needed


export default {
  name: "Explore",
  
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