<template>
    <button>
        <a href="tel:+8884521505">+ (888) 452 1505</a>
    </button>
</template>

<script>
export default {}
</script>

<style scoped>
button {
    background-color: var(--secondary-color_1);
    color: var(--primary-color_3);
    font-family: "Lato";
    font-weight: 600;
    font-size: 18px;
    line-height: 160%;
    padding: 8px;
    padding-right: 40px;
    display: flex;
    align-items: center;
    white-space: nowrap;
}

button::before {
    content: "";
    background-image: url("../assets/phone.svg");
    background-repeat: no-repeat;
    background-position: center;
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: var(--primary-color_1);
}
</style>