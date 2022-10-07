<template>
  <header class="header">
    <h1><a href="#">COMPANY</a></h1>
    <div class="nav">
        <ul>
            <li v-for="item in menu" v-bind:key="item">{{item}}</li>
        </ul>
    </div>
  </header>
</template>

<script>
export default {
    data(){
        return{
            menu:["home","product","online","community"]
        }
    }
}
</script>

<style lang="scss">
.header{
    width: 1200px;margin: 0 auto;
    display: flex;
    .nav{margin-left: auto;height: 40px;}
    .nav ul{
        display: flex;height: 100%;
        li{
            display: flex;justify-content: center;align-items: center;
            padding: 0 20px;
            &:hover{background: skyblue;}
            }
        }
    }
</style>