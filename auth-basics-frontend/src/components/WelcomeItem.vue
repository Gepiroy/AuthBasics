<script setup>
import {ref} from 'vue'
let isShine = ref(Math.random() > 0.5)
</script>
<template>
  <div class="item"
  :class="{'shine' : isShine}">
    <i>
      <slot name="icon"></slot>
    </i>
    <div class="details">
      <h3>
        <slot name="heading"></slot>
      </h3>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

@keyframes appear{
  0% {
    margin-left: 100px;
    opacity: 0;
  }
  70% {
    margin-left: 0px;
  }
  100% {
    opacity: 1;
  }
}
@keyframes shine{
  0% {
    color: rgb(255, 0, 0);
  }
  50% {
    color: rgb(0, 255, 255);
  }
  100% {
    color: rgb(255, 0, 0);
  }
}

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
  animation: appear 4.0s ease forwards;
}
.shine h3{
  animation: appear 4.0s ease forwards, shine 4.0s infinite;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
