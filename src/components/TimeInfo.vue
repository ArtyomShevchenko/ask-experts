<template>
    <div class="time">Monday - Friday8AM - 9PM</div>
</template>

<script>
export default {}
</script>

<style scoped>
.time {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.time::before {
    content: "";
    background-image: url("../assets/clock.svg");
    background-position: center;
    width: 15px;
    height: 15px;
    display: inline-block;
    margin-right: 10px;
}
</style>