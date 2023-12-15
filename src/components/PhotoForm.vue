<template>
  <div class="form__layout">
    <BaseForm class="form" title="Загрузить фотографию">
      <BaseInput @change="getPhoto" type="file"/>
      <BaseButton @click="uploadPhoto">Загрузить</BaseButton>
    </BaseForm>
  </div>
</template>

<script>
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

import {getFormData} from "@/helpers";
import axios from "axios";


export default {
  data: () => ({
    photoFormData: null,
  }),
  components: {BaseButton, BaseInput, BaseForm},
  methods: {
    getPhoto(event) {
      this.photoFormData = getFormData(event)
      console.log(this.photoFormData)
    },
    async uploadPhoto() {
      if (this.photoFormData) {
        const token = localStorage.getItem('token')
        await axios.post('http://127.0.0.1:3070/photo/upload', this.photoFormData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: 'Bearer ' + token
              }
            })
            .then(res => this.$router.push('/album'))
            .catch(err => console.log(err))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  align-items: flex-start;
}
</style>