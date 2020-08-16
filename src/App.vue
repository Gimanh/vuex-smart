<template>
    <div id="app">
        <div>
            <h1>Counter foo</h1>
            {{ countFoo }}
            <button
                @click="incrementFoo"
            >
                Press to increment count Foo
            </button>
        </div>
        <div>
            <h1>Counter bar</h1>
            {{ countBar }}
            <button
                @click="incrementBar"
            >
                Press to increment count Bar
            </button>
        </div>

    </div>
</template>

<script src="./App.ts">

</script>
<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
