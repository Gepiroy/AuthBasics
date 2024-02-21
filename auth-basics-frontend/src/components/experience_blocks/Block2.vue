<script setup>
</script>

<template>
  <div class="block-base">
    <h3>Блок второй</h3>
    <p>Тут я поработаю с SVG-шками...</p>
    <!--
      Теорию по SVG прям сюда напихаю.
      Sizeable Vector Graphic - SVG. У них там свой язык со своими тегами, но в общем, даём тому кому надо id-шники, да выдёргиваем их потом здесь.
        
    -->
    <ul>
    <li v-for="pos in dotPositions" :key="pos">{{ pos }}</li>
    </ul>
    <svg version="1.1" id="SomeCurve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
      viewBox="0 0 200 200" style="enable-background:new 0 0 200 200;" xml:space="preserve">
      <path id="somePath" style="fill:transparent;stroke:#FFFF00;stroke-miterlimit:10;" d="M49.5,61.5c-14.21,19.64-14.76,44.21-3,59c20.47,25.73,69.87,11.33,75-5c5.07-16.12-33.56-32.42-29-55
        c4.1-20.3,39.6-28.3,39-30c-0.51-1.43-25.18,5.27-113,34"/>
        <g fill="red">
        <circle cx="0" cy="0" r="3" v-for="pos in dotPositions" :key="pos">
          <animateMotion :keyPoints="(pos)+'; '+(pos+0.1)" keyTimes="0; 1" calcMode="linear" dur="1s" repeatCount="indefinite" >
            <mpath href="#somePath" />
          </animateMotion>
        </circle>
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  computed: {
    dotPositions() {
      const totalDots = 10.0; // Adjust the number of dots based on the density you want
      const positions = [];

      for (let i = 0; i < totalDots; i++) {
        let position = (i / totalDots);
        positions.push(position);
      }

      return positions;
    }
  }
};
</script>

<style scoped>
  @import './local-styles.css';
</style>