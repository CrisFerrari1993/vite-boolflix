import { reactive } from "vue";

export const store = reactive({
    filmList: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e52b2ec8f0acc5ee4d9beeb743268796&query=movie&language=it-IT",
    searchText: "",
    loading: true,
});