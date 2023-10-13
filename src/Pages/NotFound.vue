<template>
    <div class="container">
        <div class="row">
            <div class="content">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>This Page Doesn't or was removed! <br />We suggest you back to home</p>
                <button class="btn">
                    <RouterLink to="/">Back to home</RouterLink>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
h1 {
    font-size: 120px;
    line-height: 116%;
}

h2 {
    font-size: 60px;
    line-height: 116%;
}

p {
    margin-top: 8px;
}

button {
    margin-top: 44px;
}

.container {
    margin: 172px auto;
}

.row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.content {
    padding: 69px 84px;
    background-color: rgba(255, 255, 255, .88);
    position: relative;
    text-align: center;
    border-radius: 18px;
}

.content::before {
    content: url("../assets/Vector-404.svg");
    position: absolute;
    z-index: -1;
    top: -38px;
    left: -38px;
}
.content::after {
    content: "";
    display: block;
    height: 201px;
    width: 243px;
    background-color: var(--primary-color_2);
    border-radius: 18px;
    position: absolute;
    z-index: -1;
    bottom: -38px;
    right: -38px;
}
</style>