<script>
export default {
    name: 'SingleFilm',
    props: {
        info: Object
    }
}
</script>

<template>
    <div class="text-center">
        <img class="img-fluid mb-3" src="" :alt="info.title">
        <h4>{{ info.title }}</h4>
        <div>
            status film
        </div>
        <div>Specie film</div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>