<template>
  <div class="container">
    <header-section />
    <div class="content">
      <sidebar-navigation />
      <main class="hotel-view">
        <gallery />
        <overview />
        <details-hotel />
        <cta-section />
      </main>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.container {
  max-width: 120rem;
  margin: 8rem auto;
  background-color: var(--color-grey-light-1);
  box-shadow: var(--shadow-dark);
  min-height: 50rem;
  @media only screen and (max-width: $bp-largest) {
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
}
.content {
  display: flex;
  @media only screen and (max-width: $bp-medium) {
    flex-direction: column;
  }
}
.hotel-view {
  background-color: #fff;
  flex: 1;
}
</style>
