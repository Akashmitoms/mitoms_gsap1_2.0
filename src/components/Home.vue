<template>
  <section class="hom1">
    <div class="sec1">
      <TheHeader />
      <div class="sec1_con">
        <h1>INNOVATING IDEAS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit, gravida morbi
          lacus pulvinar libero litora elementum urna
        </p>
        <h2>EXPLORE NOW</h2>
      </div>
    </div>
  </section>
  <section class="hom2">
    <div class="sec2">
      <div class="sec2a">
        <div>
          <img src="/image/digital-printing.png" alt="" />
        </div>
        <div>
          <h2>Digital Printing</h2>
          <p><a href="#">LEARN MORE</a></p>
        </div>
      </div>
      <div class="sec2b">
        <div>
          <img src="/image/graphics-design.png" alt="" />
        </div>
        <div>
          <h2>Graphics Design</h2>
          <p><a href="#">LEARN MORE</a></p>
        </div>
      </div>
      <div class="sec2c">
        <div>
          <img src="/image/social-media.png" alt="" />
        </div>
        <div>
          <h2>Social Media</h2>
          <p><a href="#">LEARN MORE</a></p>
        </div>
      </div>
    </div>
  </section>
  <div class="sec3">
    <h2>WHY CHOOSE US</h2>
    <h1>
      Lorem ipsum dolor sit amet consectetur adipiscing elit molestie urna,
      bibendum vitae feugiat quam cubilia nec enim nisl sagittis habitasse.
    </h1>
  </div>
  <section class="hom1">
    <div class="sec4">
      <h3>MARKETING</h3>
      <h1>
        IDENTITY <br />
        DEVELOPMENT
      </h1>
      <p>
        Magna enim lobortis laoreet id cras ad tincidunt aliquam, quisque
        torquent posuere facilisis mus nisi velit, mattis vehicula sociis nullam
        penatibus eros nunc.
      </p>
      <h2>LEARN MORE</h2>
    </div>
  </section>
  <section class="hom1">
    <div class="sec5">
      <h3>BRANDING</h3>
      <h1>
        MARKET RESEARCH <br />
        AND ANALYSIS
      </h1>
      <p>
        Massa senectus aptent facilisis hendrerit accumsan et, felis nam
        venenatis tincidunt suspendisse mattis, donec rhoncus vivamus magnis
        morbi.
      </p>
      <h2>LEARN MORE</h2>
    </div>
  </section>
  <section class="hom1">
    <div class="sec6">
      <h3>MARKETING</h3>
      <h1>
        REPUTATION <br />
        MANAGEMENT
      </h1>
      <p>
        Imperdiet ullamcorper varius platea curae etiam tincidunt dapibus, erat
        feugiat inceptos netus morbi volutpat fusce natoque, mauris class
        molestie risus at mi.
      </p>
      <h2>LEARN MORE</h2>
    </div>
  </section>
  <section class="hom1">
    <div class="sec7">
      <h1>DREAM . CREATE</h1>
    </div>
  </section>
  <section class="hom2">
    <div class="sec8">
      <h2>OUR PORTFOLIO</h2>
      <h1>CREATIVE PORTFOLIO</h1>
      <div class="sec8_1">
        <h3>GRAPHIC</h3>
        <h3>DIGITAL</h3>
        <h3>MEDIA</h3>
      </div>
    </div>
  </section>
  <section class="hom3">
    <div class="sec8a">
      <div class="sec8a1">
        <span id="sp1"><b>01</b> <h2>GRAPHIC</h2></span>
        <h1>LOGO–IDENTITY</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit nascetur curae senectus, 
          dui arcu eu convallis fringilla primis tincidunt neque ac dictum</p>
          <h3>LEARN MORE</h3>
      </div>
      <div class="sec8a2"><img src="/image/image11.jpg" alt=""></div>
    </div>
  </section>
  <section class="hom3">
    <div class="sec8a">
      <div class="sec8a1">
        <span id="sp1"><b>02</b> <h2>GRAPHIC</h2></span>
        <h1>BUSINESS & ADVERTISING</h1>
        <p>Curae risus sociis ultricies scelerisque libero malesuada primis, 
          ligula aptent morbi enim nisi aenean blandit eu, placerat feugiat sagittis volutpat</p>
          <h3>LEARN MORE</h3>
      </div>
      <div class="sec8a2"><img src="/image/image12.jpg" alt=""></div>
    </div>
  </section>
  <section class="hom3">
    <div class="sec8a">
      <div class="sec8a1">
        <span id="sp1"><b>03</b> <h2>WEB & APP</h2></span>
        <h1>WEB & APP</h1>
        <p>Laoreet urna quis torquent tortor blandit auctor nam rhoncus ut fames, 
          suscipit turpis vestibulum sem vel habitant lectus duis sagittis netus</p>
          <h3>LEARN MORE</h3>
      </div>
      <div class="sec8a2"><img src="/image/image13.jpg" alt=""></div>
    </div>
  </section>
  <section class="hom3">
  <div class="sec9">
    <div class="sec9a">
      <h1>DISCOVERY THE WORLD</h1>
      <p>Feugiat hendrerit cubilia curae ultricies vivamus nisl quisque viverra, 
        praesent faucibus.</p>
      <h3>LEARN MORE</h3>
    </div>
    <div class="sec9b">
      <img src="/image/world1.jpg" alt="">
      <img src="/image/world2.jpg" alt="">
      <img src="/image/world3.jpg" alt="">
    </div>
  </div>
</section>
<!-- <section class="hom1">
  <img src="/image/zoom-image.jpg" alt="" style="object-fit: contain; width: 100%;">
</section> -->
</template>

<script>
import TheHeader from "./TheHeader.vue";

export default {
  name: "Home",
  components: {
    TheHeader,
  },
};
</script>

<style scoped>
.sec1 {
  background-image: url(/image/hero.jpg);
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background-size: cover;
  padding: 1%;
}
.sec1_con {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 10%;
}
.sec1 h1 {
  color: white;
  font-size: 5rem;
  font-weight: 700;
  text-align: center;
}
.sec1 p {
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  padding: 0 15%;
}
.sec1 h2 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 1%;
}
.sec2 {
  margin: 1%;
  display: flex;
  align-items: center;
}
.sec2a,
.sec2b,
.sec2c {
  width: 33.33%;
  display: flex;
  gap: 2%;
  justify-content: center;
}
.sec2a a,
.sec2b a,
.sec2c a {
  color: lightgray;
  font-size: 0.9rem;
}
.sec2a img,
.sec2b img,
.sec2c img {
  width: 70%;
  padding: 1rem;
  background-color: #eeeeee;
  border-radius: 50%;
}
.sec2b,
.sec2c {
  border-left: 1px solid lightgray;
}
.sec3 {
  background-color: #1d2a34;
  margin: 1%;
  border-radius: 1.5rem;
  padding: 10%;
}
.sec3 h2 {
  color: white;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  opacity: 0.7;
}
.sec3 h1 {
  color: white;
  font-size: 5rem;
  font-weight: 1400;
  text-align: center;
}
.sec4,
.sec5,
.sec6 {
  margin: 1%;
  height: 100%;
  padding: 7%;
  border-radius: 1.5rem;
}
.sec4 h3,
.sec5 h3,
.sec6 h3 {
  color: #1d2a34;
  font-size: 1.5rem;
  font-weight: 700;
  opacity: 0.5;
}

.sec5 h3,
.sec6 h3{
  color: white;
}

.sec4 h1,
.sec5 h1,
.sec6 h1 {
  color: #1d2a34;
  font-size: 4rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1em;
  margin: 1rem 0;
}
.sec5 h1,
.sec6 h1 {
  color: white;
}

.sec4 p,
.sec5 p,
.sec6 p {
  color: #1d2a34;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.7;
  padding-right: 30%;
  margin: 1.5rem 0;
}
.sec5 p,
.sec6 p {
  color: white;
}
.sec4 h2,
.sec5 h2,
.sec6 h2 {
  color: #1d2a34;
  font-size: 1rem;
  font-weight: 700;
}
.sec5 h2,
.sec6 h2 {
  color: white;
}
.sec5 {
  background-color: #1d2a34;
  color: white;
}
.sec6 {
  background-color: #f96227;
  color: white;
}
.sec7{
  background-color: #1d2a34;
  color: white;
  height: 100%;
  border-radius:1.5rem;
}
.sec7 h1{
  font-size: 10rem;
  font-weight: 700;
  text-align: center;
  padding: 7%;
}
.sec8{
  margin-top: 3%;
 display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.sec8 h2{
  color: #1d2a34;
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.5;
}
.sec8 h1{
  color: #1d2a34;
  font-size: 4rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1em;
  margin: 1rem 0;
}
.sec8_1{
  display: flex;
  gap: 2rem;
  justify-content: center;
  padding: 1rem 2rem;
  border: 1px solid lightgray;
  border-radius: 20rem;
}
.sec8_1 h3{
  color: #1d2a34;
  font-size: 1rem;
  font-weight: 700;
  opacity: 0.7;
}
.sec8_1 :nth-child(2){
  border-left: 2px solid lightgray;
  border-right: 2px solid lightgray;
  padding: 0 1.5rem;
}
.sec8a{
  display: flex;
}
.sec8a1, .sec8a2{
  width: 50%;
  height: 100%;
}
.sec8a1{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5% 0;
}
.sec8a1 h1{
  color: #1d2a34;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1em;
  margin: 1rem 0;
}
.sec8a2 img{
  width: 100%;
  border-radius: 1.5rem;
  height: 95vh;
  object-fit: cover;
}
#sp1{
  display: flex;
  gap: 1rem;
  margin-bottom: 12%;
}
#sp1 b{
  font-size: 1rem;
  font-weight: 700;
  border: 1px solid lightgray;
  padding: 1rem 1.2rem;
  border-radius: 50%;
  background-color: lightgray;
}
#sp1 h2{
  color: #1d2a34;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 0;
}
.sec9{
  display: flex;
  gap: 1rem;
}
.sec9a{
  width: 30%;
  padding: 5% 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.sec9a h1{
  color: #1d2a34;
  font-size: 3rem;
  font-weight: 700;
  font-family: "Poppins", sans-serif;
  line-height: 1em;
  margin: 1rem 0;
}
.sec9a p{
  color: #1d2a34;
  font-size: 1.2rem;
  font-weight: 500;
  opacity: 0.7;
}
.sec9b{
  width: 70%;
  display: flex;
  gap: 1%;
}
.sec9b img{
  width: 80%;
  border-radius: 1.5rem;
  object-fit: cover;
}
</style>
