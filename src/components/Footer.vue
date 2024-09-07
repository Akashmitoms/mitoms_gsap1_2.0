<template>
    <footer class="hom2">
        <div class="sec1">
            <h2>MiToms</h2>
        </div>
        <div class="sec1">
            <h2>EXPLORE</h2>
            <p>RESOURCES</p>
            <p>CAREERS</p>
            <p>TESTIMONIAL</p>
            <p>HELP CENTER</p>
        </div>
        <div class="sec1">
            <H2>ABOUT</H2>
            <p>PROMOTIONS</p>
            <p>PARTNERS</p>
            <p>DIRECTIONS</p>
            <p>FAQS</p>
        </div>
        <div class="sec1">
            <H2>Subscribe to our newsletter</H2>
            <p>Suspendisse netus proin eleifend fusce sollicitudin potenti vel magnis nascetur</p>
        </div>
    </footer>
</template>

<style scoped>
footer{
    display: flex;
    justify-content: space-evenly;
    background-color: #1D2A34;
    color: white;
    padding: 5% 0;
}
.sec1{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.sec1 h2{
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.sec1 p{
    font-size: 1rem;
    font-weight: 500;
    opacity: 0.7;
}
</style>