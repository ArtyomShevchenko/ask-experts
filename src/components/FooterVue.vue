<template>
    <footer>
        <div class="wrapper">
            <div class="content">
                <div class="logo-and-social">
                    <LogoComponent />
                    <div class="social">
                        <a href="https://www.instagram.com/" target="_blank">In</a>
                        <a href="https://www.facebook.com/" target="_blank">Fb</a>
                        <a href="https://twitter.com/" target="_blank">Tw</a>
                        <a href="https://www.linkedin.com/" target="_blank">Li</a>
                    </div>
                </div>

                <div class="line"></div>


                <!-- <div class="links"> -->
                <ul>
                    <li>Product</li>
                    <li><router-link to="/service">Service</router-link></li>
                    <li><router-link to="/faq">FAQ</router-link></li>
                    <li><router-link to="/single-servece">Single Service</router-link></li>
                    <li><router-link to="/quote">Get Quote</router-link></li>
                    <li><router-link to="/prices">Prices</router-link></li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li><router-link to="/about">About</router-link></li>
                    <li><router-link to="/news">News</router-link></li>
                    <li><router-link to="/contact">Contact</router-link></li>
                    <li><router-link to="/testimonials">Testimonials</router-link></li>
                    <li><router-link to="/team">Team</router-link></li>
                    <li><router-link to="/approach">Approach</router-link></li>
                </ul>
                <ul class="address-info">
                    <li>Address</li>
                    <li>1700 W Blancke St, kiyev port south USA, America</li>
                    <li>
                        <router-link to="/appoinment">
                            <button>Book an Appoinment</button>
                        </router-link>
                    </li>
                </ul>
                <!-- </div> -->
            </div>
            <div class="copiright">
                ©2022 Consultalk. All rights reserved | Terms of Service | Privacy Policy
            </div>
        </div>
    </footer>
</template>

<script>
import LogoComponent from './LogoComponent.vue';

export default {
    components: {
        LogoComponent
    }
}
</script>

<style scoped>
footer {
    margin-top: auto;
    position: relative;
    color: var(--secondary-color_1);
    font-family: var(--font_2);
    font-weight: 400;
    line-height: 148%;
    font-size: 16px;
}

footer::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .9);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

footer::after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("../assets/footer-bg.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;
    filter: blur(15px) brightness(1.5);
}

.social {
    margin-top: 31px;
}

.social a {
    font-family: "Cabin";
    font-weight: 600;
    font-size: 20px;
    line-height: 116%;
}

.social a::after {
    content: "/";
    margin: 0 5px;
}

.social a:last-child::after {
    content: "";
}

.content {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: auto;
    grid-gap: 20px;
    padding: 126px 0 56px 0;
}

.logo-and-social {
    grid-column: span 2;
}

.line {
    height: 100%;
    width: 1px;
    background-color: rgba(255, 255, 255, .3);
}

.copiright {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 25px;
    border-top: 1px solid rgba(255, 255, 255, .3);
    text-align: center;
}

ul li {
    position: relative;
    white-space: nowrap;
}

ul li:first-child {
    font-family: var(--font_1);
    font-weight: 600;
    line-height: 116%;
    font-size: 20px;
    padding-bottom: 14px;
    margin-bottom: 10px;
}

ul li:first-child::before {
    content: "";
    display: inline-block;
    width: 32px;
    height: 3px;
    border-radius: 2px;
    background-color: var(--primary-color_1);
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
}

ul li::before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--secondary-color_1);
    margin: 0 9px;
}

.address-info>li::before {
    display: none !important;
}

.address-info li {
    white-space: normal;
}

.address-info li:first-child::before {
    content: "";
    display: inline-block !important;
    width: 32px;
    height: 3px;
    border-radius: 2px;
    background-color: var(--primary-color_1);
    position: absolute;
    bottom: 0;
    left: 0;
    margin: 0;
}

.address-info button {
    background-color: var(--secondary-color_1);
    color: var(--primary-color_3);
    margin-top: 16px;
}

.address-info button:hover {
    background-color: var(--primary-color_1);
}

li:has(.router-link-active)::before {
    background-color: var(--primary-color_1);
}

.router-link-active {
    color: var(--primary-color_1);
}

@media (max-width: 1024px) {
    .content {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: auto;
        grid-gap: 15px;
        padding: 116px 0 46px 0;
    }

    .line {
        display: none;
    }
}

@media (max-width: 768px) {
    .content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-gap: 50px 10px;
        padding: 106px 0 36px 0;
    }

    .logo-and-social {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }

    .address-info {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .line {
        display: none;
    }
}
</style>