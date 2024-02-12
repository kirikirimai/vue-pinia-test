<script setup>
import { useCartStore } from '@/stores/cart';
import { storeToRefs } from 'pinia';


const cartStore =useCartStore()
const {carts} =storeToRefs(cartStore)
const {addCart} = cartStore;

</script>
<template>
    <div></div>
</template>