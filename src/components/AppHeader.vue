<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <a href="">
                <img src="https://www.zarla.com/images/zarla-b-1x1-2400x2400-20211109-kr7x4bwygmm6tgtk8fdt.png?crop=1:1,smart&width=250&dpr=2"
                    alt="">
                <h1>oolflix</h1>
            </a>

            <div class="searchBar">
                <input type="text" name="textSearch" id="textSearch" placeholder="Search..." @keyup.enter="$emit('search')"
                    v-model.trim="store.searchText">
                <button @click.prevent="$emit('search')">
                    Search
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;


header {
    height: 100px;
    background-color: #000000;
    padding: 15px;

    a {
        display: flex;
        align-items: center;

        h1 {
            color: red;
            margin-left: -5px;
        }

        img {
            width: 50px;
        }
    }
}

.searchBar {

    input,
    button {
        background-color: #ffffff;
        border: none;
        padding: 8px;
    }

    input {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button {
        cursor: pointer;
        border-left: 1px solid lightgrey;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

    }
}

//UTILITIES
.container {
    @include center('y');
    justify-content: space-between;

}
</style>