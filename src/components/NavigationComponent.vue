<template>
    <nav>
        <li>
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/pages">Pages</router-link>
        </li>
        <li>
            <router-link to="/services">Services</router-link>
        </li>
        <li>
            <router-link to="/work">Work</router-link>
        </li>
        <li>
            <router-link to="/contact">Contact</router-link>
        </li>
    </nav>
</template>

<script>

export default {
}
</script>

<style scoped>
nav {
    background-color: var(--primary-color_3);
    opacity: 0.91;
}
li::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: transparent;
    border-radius: 50%;
    margin-right: 8px;
    border: 1px solid #515151;
}

li:has(.router-link-active)::before {
    background-color: var(--primary-color_2);
    border: 1px solid var(--primary-color_2);
}

li:has(a) {
    color: var(--secondary-color_2);
    font-family: "Lato";
    font-size: 17.73px;
    line-height: 160%;
    font-weight: 400;
}
.router-link-active {
    color: var(--primary-color_2)
}
</style>