<template>
  <block-base
    title="Блок третий"
    lore="Тут я хочу сделать интерактивную карту мероприятия. На ней будут точки, нажатие по которым откроет окна 
    с названием мероприятий. Сами точки и мероприятия будут доставаться из локальной базы-массива."
  >
    <div class="map-holder">

    </div>
  </block-base>
</template>

<style scoped>
  .map-holder{
    position: relative;
    border: 1px white solid;
    padding: 2px;
  }
</style>

<script>
export default {
  data() {
    return {
      points: [
        {
          x: 1,
          y: 10,
          title: "Стенд-1",
          lore: "Ну типа стенд первый.",
        },
        {
          x: 10,
          y: 15,
          title: "Стенд-2",
          lore: "Ну типа стенд второй.",
        },
        {
          x: 5,
          y: 20,
          title: "Стенд-3",
          lore: "Ну типа стенд третий.",
        },
      ],
    };
  },
};
</script>
