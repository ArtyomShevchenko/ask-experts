<template>
    <header>
        <div class="wrapper">
            <div class="content">
                <LogoComponent />
                <NavigationComponent />
                <ButtonPhone />
            </div>
        </div>
    </header>
</template>

<script>
import LogoComponent from '@/components/LogoComponent.vue';
import NavigationComponent from '@/components/NavigationComponent.vue';
import ButtonPhone from '@/components/ButtonPhone.vue';

export default {
    components: {
        LogoComponent,
        NavigationComponent,
        ButtonPhone,
    }
}
</script>

<style scoped>
header {
    background-color: var(--primary-color_3);
    opacity: 0.91;
    padding: 40px 0;
}

.content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
}
</style>