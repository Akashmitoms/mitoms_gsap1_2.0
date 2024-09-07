<template>
    <header>
       <div class="nav1">
        <img src="/image/Logo-01001.png" alt="">
        <h2>MiToms</h2>
       </div>
       <div class="nav2">
              <ul>
                <li>COMMUNITY</li>
                <li>EXPLORE</li>
                <li>FEATURES</li>
                <li>BLOG</li>
                <li>ABOUT</li>
              </ul>
       </div>
       <div class="nav3">
        <h3>CONTACT</h3>
       </div>
    </header>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1% 5%;
    color: white;
}
.nav1{
    display: flex;
    gap: 0.5rem;
}
.nav1 img{
    width: 15%;
    border-radius: 50%;
    background-color: white;
    border: 5px solid white;
   
}
.nav2 ul{
    display: flex;
    gap: 2rem;
    list-style: none;
    opacity: 0.9;
}
.nav3{
    color: black;
    background-color: white;
    padding: 1% 2%;
    border-radius: 20rem;
}

</style>