<template>
  <div class="container">
    <ul class="d_icon">
        <li v-for="item in data" :key="item">
            <a v-bind:href="item.href">
                <img v-bind:src="`images/directs/${item.src}`" alt="">
                <div class="txt">
                    {{item.name}}
                </div>
            </a>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:["data"],
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    .d_icon{
        display: flex;
        gap: 20px;
        li{
            width: 10%;
        }
        img{
            width: 100%;
        }
    }
</style>