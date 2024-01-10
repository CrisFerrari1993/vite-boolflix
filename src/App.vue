<script>
// axios including
import axios from 'axios';

//children components including
import AppHeader from './components/appHeader.vue';
import MovieList from './components/MovieList.vue';

//store including\
import { store } from './store';

export default {
  components: {
    AppHeader,
    MovieList,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {
      axios
        .get(store.apiUrl)
        .then((res => {
          console.log(res.data.results);
          store.filmList = res.data.results;
        }))
        .catch((err) => {
          console.log("Errori", err);
        })
    }
  },
  created() {
    this.getFilms();
  }
}
</script>

<template>
  <AppHeader />
  <main>
    <MovieList />
  </main>
</template>

<style lang="scss">
@use './styles/general.scss'
</style>
