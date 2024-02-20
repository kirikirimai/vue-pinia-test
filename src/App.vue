<script setup>
import { onMounted, ref } from 'vue'
import { usePhotosStore } from './stores/photos';
import { storeToRefs } from 'pinia';
import { useCartStore } from './stores/cart';

const photosStore = usePhotosStore();
const { photos } = storeToRefs(photosStore);
const { fetchPhotos } = photosStore;

const cartStore = useCartStore()
const { carts } = storeToRefs(cartStore)
const { addCart } = cartStore

onMounted(() => {
  fetchPhotos();
});
</script>

<template>
  <h1>商品一覧はこちら</h1>
  <ul class="photoList">
    <li v-for="photo in photos.slice(0, 4)" :key="photo.id">
      <img :src="photo.url" :alt="photo.title" />
      <p>{{ photo.title }}</p>
      <p>{{ photo.stock }}</p>
      <button :disabled="!photo.stock" @click="addCart(photo)">カートに入れる</button>
    </li>
  </ul>
  <hr />
  <h1>カートに入った商品</h1>
  <p v-if="!carts.length">カートに入っていません。sadfsfdd</p>
  <!--カート一覧-->
  <ul>
    <li v-for="cart in carts" :key="cart.id">
      <p>{{ cart.title }}：カート数{{ cart.quantity }}</p>
    </li>
  </ul>
</template>
<style scss>
.photoList {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 16px;
  /* グリッドアイテム間の隙間 */
}

.photoList li {
  margin-bottom: 20px;
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 3;

  img {
    width: 100%;
  }

  button{
    font-size: 12px;
  }
}
</style>
