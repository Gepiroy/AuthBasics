<script setup>
import StandPoint from './StandPoint.vue';
</script>

<template>
  <block-base
    title="Блок третий"
    lore="Тут я хочу сделать интерактивную карту мероприятия. На ней будут точки, нажатие по которым откроет окна 
    с названием мероприятий. Сами точки и мероприятия будут доставаться из локальной базы-массива."
  >
    <div class="map-holder">
      <img src="@/assets/map.jpg" :style="''+mapStyle()" />
      
      <stand-point v-for="(point, index) in points" :key="index" :style="'top:'+point.y*scale+'px; left: '+point.x*scale+'px;'"/>
    </div>
  </block-base>
</template>

<style scoped>
  .map-holder{
    position: relative;
    border: 1px white solid;
    padding: 2px;
    max-width: 600px;
    max-height: 600px;
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .map{
    
  }
</style>

<script>
export default {
  methods: {
    mapStyle(){
      let scale = this.scale
      let ret = 'transform: '
      let translate = (scale-1.0)*50
      ret += 'translate('+translate+'%, '+translate+'%) '
      ret += 'scale('+scale+');'
      console.log("map style is "+ret)
      return ret;
    }
  },
  data() {
    return {
      points: [
        {
          x: 10,
          y: 100,
          title: "Стенд-1",
          lore: "Ну типа стенд первый.",
        },
        {
          x: 100,
          y: 150,
          title: "Стенд-2",
          lore: "Ну типа стенд второй.",
        },
        {
          x: 50,
          y: 200,
          title: "Стенд-3",
          lore: "Ну типа стенд третий.",
        },
      ],
      scale: 0.9,
    };
  },
};
</script>
