<template>
  <article class="block-base">
    <h3>{{ title }}</h3>
    <p>{{ lore }}</p>
    <div class = "block-base__content">
      <slot></slot>
    </div>
  </article>
</template>

<style scoped>
.block-base{
    border-radius: 5px;
    border: 1px solid #fff;
    padding: 10px;
    margin: 5px;
}
.block-base h3{
    font-size: 1.2rem; /* rem = root element. 16 пикселей дефолт, эт размер текста рута. */
    font-weight: 500; /* Жирность текста. 0 - 1000.*/
    margin-bottom: 0.4rem;
    color: var(--color-heading);
}
.block-base p{
    color: #ccc;
}
</style>

<script>
export default {
  props: {
    title: String,
    lore: String,
  }
}
</script>