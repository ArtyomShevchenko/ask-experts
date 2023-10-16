<template>
    <div class="place">725 Park Ave, New York</div>
</template>

<script>
export default {}
</script>

<style scoped>
.place {
    display: flex;
    align-items: center;
    white-space: nowrap;
}

.place::before {
    content: "";
    background-image: url("../assets/marker.svg");
    background-position: center;
    width: 13px;
    height: 17px;
    display: inline-block;
    margin-right: 10px;
}
</style>