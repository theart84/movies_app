<template>
  <div
    class="loader-wrap d-flex justify-content-center align-items-center"
    v-if="isShowLoader"
  >
    <b-spinner type="grow" label="Loading..." variant="light"></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Loader",
  computed: {
    ...mapGetters(["isShowLoader"])
  }
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}
</style>
