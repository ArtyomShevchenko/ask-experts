<template>
  <NavigationComponent />
  
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationComponent from './components/NavigationComponent.vue';

export default {
  name: 'App',
  components: {
    NavigationComponent,
  }
}
</script>

<style>
@import "./font/cabin/stylesheet.css";
@import "./font/lato/stylesheet.css";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

ul,
ol,
li {
  list-style: none;
}

:root {
  --primary-color_1: #ffcc4a;
  --primary-color_2: #4eaf4e;
  --primary-color_3: #181818;
  --secondary-color_1: #f5f5f5;
  --secondary-color_2: #ffffff;
  --secondary-color_3: #595566;

  --font_1: "Cabin";
  --font_2: "Lato";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  line-height: 130%;
  font-family: var(--font_1);
  color: var(--primary-color_3);
}

h1 {
  font-size: 50px;
}

h2 {
  font-size: 45px;
}

h3 {
  font-size: 40px;
}

h4 {
  font-size: 35px;
}

h5 {
  font-size: 30px;
}

h6 {
  font-size: 25px;
}

p {
    color: var(--secondary-color_3);
    font-size: 16px;
    font-weight: 400;
    line-height: 145.5%;
}

button {
  font-family: "Lato";
  line-height: 160%;
  font-weight: 600;
  padding: 14px 31px;
  border-radius: 40px;
  color: var(--secondary-color_2);
  background-color: var(--primary-color_3);
  border: 2px solid var(--primary-color_3);
  transition: background-color .4s, color .2s;
}

button:hover {
  color: var(--primary-color_3);
  background-color: var(--secondary-color_2);
}

.btn {
  color: var(--primary-color_3);
  background-color: var(--primary-color_1);
  border: none;
  padding: 16px 33px;
}

.btn:hover {
  color: var(--secondary-color_2);
  background-color: var(--primary-color_3);
}

#app {}
</style>
