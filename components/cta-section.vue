<template>
  <div class="cta">
    <h2 class="cta__book-now">
      Good news ! We have 4 rooms for your selected dates !
    </h2>
    <booking-btn />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cta {
  padding: 3.5rem 0;
  text-align: center;
  @media only screen and (max-width: $bp-medium) {
    padding: 2.5rem 0;
  }
  &__book-now {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
    @media only screen and (max-width: $bp-smallest) {
      font-size: 1.6rem;
    }
  }
}
</style>
