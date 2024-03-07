<script setup>

</script>

<template>
  <div class="stand-point">
    <div class="point-holder">
      <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#0ff" />
        <circle r="5px" cx="5px" cy="5px"></circle>
      </svg>
      <div class="stand-point-card">

      </div>
    </div>
  </div>
</template>

<style scoped>
  .stand-point{
    position: absolute;
  }
  .point-holder:hover{
    fill: brown;
  }
  .stand-point-card{
    position: relative;
    min-width: 100px;
    min-height: 50px;
    border-radius: 5px;
    box-shadow: 5px;
    background: #eee;
  }
</style>
<script>
export default {
  props: {
    title: String,
    lore: String
  }
}
</script>