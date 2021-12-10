<template>
  <div class="gallery">
    <figure class="gallery__item">
      <img
        src="../assets/img/hotel-1.jpg"
        alt="Hotel1"
        class="gallery__photo"
      />
    </figure>
    <figure class="gallery__item">
      <img
        src="../assets/img/hotel-2.jpg"
        alt="Hotel1"
        class="gallery__photo"
      />
    </figure>
    <figure class="gallery__item">
      <img
        src="../assets/img/hotel-3.jpg"
        alt="Hotel1"
        class="gallery__photo"
      />
    </figure>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.gallery {
  display: flex;
  &__photo {
    width: 100%;
    display: block;
  }
}
</style>
