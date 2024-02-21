<script setup>
</script>

<template>
  <div class="block-base">
    <h3>Блок первый</h3>
    <p>Короче, я буду учить стилизацию так:</p>
    <ul>
      <li><span>Берём и делаем блок</span></li>
      <li><span>Шаманим с ним и поясняем, что именно тут сделано/изучено</span></li>
      <li><span>Хаваем орех как награду за проделанную работу)</span></li>
    </ul>
    <p>Конкретно тут я тупо поработаю с базовыми стилями: подключение локальных .css, настройка бордера какая-нибудь... И чтоб оно потом на все следующие блоки применилось.</p>
    <p>И пусть у всех будет какая-нибудь анимация. Тут, например, пусть градиент спинится!</p>
  </div>
</template>

<style scoped>
  @import './local-styles.css';

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }
  @keyframes gradient_spin {
    0% {
      --angle: 0deg;
    }
    50% {
      --angle: 470deg;
    }
    100% {
      --angle: 360deg;
    }
  }
  .block-base{
    border: 3px solid #000;
    border-image: linear-gradient(var(--angle), #f00, #0ff) 1;
    background: linear-gradient(var(--angle), #004, #400);
    animation: gradient_spin 2s ease infinite;
  }
  .block-base ul{
    list-style-type: decimal;
    color: #fff;
  }
  .block-base span{
    color: #aaa; /*var(--text-color);*/
  }
</style>