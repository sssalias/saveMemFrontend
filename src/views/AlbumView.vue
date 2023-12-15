<template>
  <BaseLayout>
    <div class="info">
      <h1>Мой альбом</h1>
      <BaseButton class="btn"><BaseLink :data="{name: 'photoUpload'}">Добавить фото</BaseLink></BaseButton>
    </div>
    <div class="album__wrapper">
      <AlbumItem v-for="item in photos" :path="item.path"/>

    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from "@/layouts/BaseLayout.vue";
import AlbumItem from "@/components/AlbumItem.vue";
import axios from "axios";
import BaseLink from "@/components/BaseLink.vue";
import BaseButton from "@/components/BaseButton.vue";


export default {
  components: {BaseButton, BaseLink, AlbumItem, BaseLayout},
  data: () => ({
    photos: []
  }),
  methods: {
    async getPhotos() {
      const token = localStorage.getItem('token')
      if (token) {
        await axios.get('http://127.0.0.1:3070/photo/get', {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
            .then(res => {
              this.photos = res.data.photos
            })
            .catch(err => console.log(err))
      }
    }
  },
  async beforeMount() {
    await this.getPhotos()
  }
}
</script>

<style lang="scss" scoped>
  .album__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
  }
  .info {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    margin-bottom: 3rem;
    h1 {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .btn {
      a {
        color: white;
      }
    }
  }
</style>