<template>
<div>
  <h2>{{name}}</h2>
  <h2>{{home}}</h2>
</div>

</template>

<script>
export default {
  name:'Myv',
  data(){
    return{
      name:'jerry',
      home:'earth'
    }
  },
  methods: {
    go(){
      alert('damn')
    }
  },
}
</script>

<style>
</style>
