import { reactive } from "vue";

export const store = reactive({
    apiSearchMovieURL: "https://api.themoviedb.org/3/search/movie?api_key=e52b2ec8f0acc5ee4d9beeb743268796&query=",
    movieList: [],
    apiSearchTvURL: "https://api.themoviedb.org/3/search/tv?api_key=e52b2ec8f0acc5ee4d9beeb743268796&query=",
    tvList: [],
    searchText: "",
    apiImgBaseURL: "https://image.tmdb.org/t/p/w342"
});