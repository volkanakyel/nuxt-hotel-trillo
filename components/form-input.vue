<template>
  <form action="#" class="search">
    <input type="text" class="search__input" placeholder="Search hotels" />
    <button class="search__button">
      <svg class="search__icon">
        <use xlink:href="../assets/img/sprite.svg#icon-magnifying-glass"></use>
      </svg>
    </button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search {
  flex: 0 0 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: $bp-smallest) {
    order: 1;
    flex: 0 0 100%;
    background-color: var(--color-grey-light-2);
  }
  &__input {
    font-family: inherit;
    font-size: inherit;
    background-color: var(--color-grey-light-2);
    border: none;
    padding: 0.7rem 2rem;
    border-radius: 100px;
    width: 90%;
    transition: all 0.2s;
    margin-right: -3.25rem;
    &:focus {
      outline: none;
      width: 100%;
      background-color: var(--color-grey-light-3);
    }
    &::-webkit-input-placeholder {
      font-weight: 100;
      color: var(--color-grey-light-4);
    }
  }
  &__input:focus + &__button {
    background-color: var(--color-grey-light-3);
  }
  &__button {
    border: none;
    background-color: var(--color-grey-light-2);
    &:focus {
      outline: none;
    }
    &:active {
      transform: translateY(2px);
    }
  }
  &__icon {
    height: 2.25rem;
    width: 2.25rem;
    fill: var(--color-grey-dark-2);
  }
}
</style>
