<script setup>

</script>

<template>
  <div class="stand-point">
    <div class="point-holder">
      <svg width="10px" height="10px" xmlns="http://www.w3.org/2000/svg">
        <circle r="5px" cx="5px" cy="5px"></circle>
      </svg>
      <div class="stand-point-card">
        <h3>{{ title }}</h3>
        <p>{{ lore }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .stand-point{
    position: absolute;
    fill: #0cc;
  }
  .point-holder:hover{
    fill: #0d0;
  }
  .point-holder:hover .stand-point-card{
    display: flex;
  }
  .stand-point-card{
    display: none;
    flex-direction: column;
    position: relative;
    min-width: 100px;
    min-height: 50px;
    border-radius: 5px;
    box-shadow: 5px;
    background: #ccc;
    z-index: 1;
    padding: 5px;
  }
  h3, p{
    color: #333;
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