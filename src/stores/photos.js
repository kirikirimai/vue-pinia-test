import { defineStore } from "pinia";
import { ref } from "vue";

export const usePhotosStore = defineStore("photos", () => {
  const photos = ref([]);
  const fetchPhotos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    photos.value = await response.json();

    //stockというプロパティを追加　stockは最大0~5のランダムな数値
    photos.value.forEach((photo) => {
      photo.stock = Math.floor(Math.random() * 6);
    });
  };

  const stockFunc = (itemID) => {
    const currentItem = photos.value.find((photo) => photo.id === itemID);
    if (currentItem) {
      currentItem.stock--;
    }
  };

  return { photos, fetchPhotos, stockFunc };
});
