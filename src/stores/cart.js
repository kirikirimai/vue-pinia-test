import { defineStore } from "pinia";
import { ref } from "vue";
import { usePhotosStore } from "./photos";

export const useCartStore = defineStore("cart", () => {
  const carts = ref([]);
  const photoStore = usePhotosStore();
  const { stockFunc } = photoStore;

  const addCart = (item) => {
    const currentItem = carts.value.find((cart) => cart.id == item.id);

    if (currentItem) {
      currentItem.quantity++;
    } else {
      carts.value.push({ ...item, quantity: 1 });
    }
    
    stockFunc(item.id);
  };

  return { carts, addCart };
});
