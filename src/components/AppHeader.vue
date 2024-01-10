<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="bg-black">
        <div class="container d-flex justify-content-between align-items-center fluid p-2 ">
            <a href="">
                <img src="https://www.zarla.com/images/zarla-b-1x1-2400x2400-20211109-kr7x4bwygmm6tgtk8fdt.png?crop=1:1,smart&width=250&dpr=2"
                    alt="">
                <h1>OOLFLIX</h1>
            </a>
            <div>
                <div class="input-group">
                    <input v-model="searchText" type="text" class="form-control" placeholder="Nome del film"
                        aria-label="Recipient's username" aria-describedby="button-addon2">
                    <button class="btn btn-outline-danger" type="button" id="button-addon2">Search</button>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

a {
    display: flex;
    align-items: center;

    h1 {
        color: red;
        margin: 0;
    }

    img {
        width: 50px;
    }
}
</style>