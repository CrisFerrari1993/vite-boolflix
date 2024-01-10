<script>
import SingleFilm from './SingleFilm.vue';

//import store
import { store } from '../store';

export default {
    name: 'MovieList',
    components: {
        SingleFilm
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="bg-black">
        <div class="container">
            <div class="row">
                <div v-for="film in store.filmList" :key="film.id" class="col-6 col-md-4 col-lg-3 bg-secondary rounded-3">
                    <SingleFilm :info="film" />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>