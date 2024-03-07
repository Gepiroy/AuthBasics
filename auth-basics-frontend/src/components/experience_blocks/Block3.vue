<script setup>
import StandPoint from './StandPoint.vue';
</script>

<template>
  <block-base
    title="Блок третий"
    lore="Тут я хочу сделать интерактивную карту мероприятия. На ней будут точки, нажатие по которым откроет окна 
    с названием мероприятий. Сами точки и мероприятия будут доставаться из локальной базы-массива."
  >
    <div class="map-frame">
      <div class="map-holder" :style="'transform: translate('+(x)+'px, '+(y)+'px)'" @mousemove="mouseMove" @mousedown="mouseDown" @mouseup="mouseUp">
        <img src="@/assets/map.jpg" :style="''+mapStyle()" draggable="false"/>
        <stand-point v-for="(point, index) in points" :key="index" :style="'top:'+((point.y-5)*scale)+'px; left: '+((point.x-5)*scale)+'px;'" :title="point.title" :lore="point.lore"/>
      </div>
    </div>
  </block-base>
</template>

<style scoped>
  .map-frame{
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
    },
    mapHolderStyle(){
      let scale = this.scale
      let x = this.x
      let y = this.y
      let ret = 'transform: translate()'
      let translate = (scale-1.0)*50
      ret += 'translate('+translate+'%, '+translate+'%) '
      ret += 'scale('+scale+');'
      console.log("map style is "+ret)
      return ret;
    },
    mouseDown(e) {
      this.dragging = true
    },
    mouseUp(e) {
      this.dragging = false
    },
    mouseMove(e) {
      if(this.dragging){
        this.x += e.movementX
        this.y += e.movementY
        if(this.x>0)this.x=0
        if(this.y>0)this.y=0
      }
    }
  },
  data() {
    return {
      points: [
        {
          x: 450,
          y: 250,
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
      dragging: false,
      x: 100,
      y: 100
    };
  },
};
</script>
