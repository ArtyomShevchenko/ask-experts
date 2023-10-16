<template>
    <div>AskExperts</div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style scoped>
div {
    font-family: var(--font_1);
    font-weight: 600;
    font-size: 30px;
    line-height: 105%;
    color: var(--secondary-color_1);
    display: flex;
    align-items: center;
}

div::before {
    content: "";
    background-image: url("../assets/Union.svg");
    background-repeat: no-repeat;
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
</style>