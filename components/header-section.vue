<template>
  <header class="header">
    <img src="../assets/img/logo.png" alt="trillo logo" class="logo" />
    <form-input />
    <nav class="user-nav">
      <div class="user-nav__icon-box">
        <svg class="search__icon">
          <use xlink:href="../assets/img/sprite.svg#icon-bookmark"></use>
        </svg>
      </div>
      <div class="user-nav__icon-box">
        <svg class="search__icon">
          <use xlink:href="../assets/img/sprite.svg#icon-chat"></use>
        </svg>
        <span class="user-nav__notification">7</span>
      </div>
      <div class="user-nav__icon-box">
        <img src="../assets/img/user.jpg" alt="" class="user-nav__user-photo" />
        <span class="user-nav__user-name">Volkan</span>
      </div>
    </nav>
  </header>
</template>

<script>
import FormInput from './form-input.vue';
export default {
  components: {
    FormInput,
  },
};
</script>

<style lang="scss">
.header {
  font-size: 1.4rem;
  height: 7rem;
  background-color: #fff;
  border-bottom: var(--line);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: $bp-smallest) {
    flex-wrap: wrap;
    align-content: space-around;
    height: 11rem;
  }
}
.logo {
  height: 3.25rem;
  margin-left: 2rem;
}
.user-nav {
  align-self: stretch;
  display: flex;
  align-items: center;
  & > * {
    padding: 0 2rem;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & > *:hover {
    background-color: var(--color-grey-light-2);
  }
  &__user-photo {
    height: 3.75rem;
    border-radius: 50%;
    margin-right: 1rem;
  }
  &__icon-box {
    position: relative;
  }
  &__icon {
    height: 2.25rem;
    width: 2.25rem;
    fill: var(--color-gray-dark-3);
  }
  &__notification {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 1.75rem;
    border-radius: 50%;
    color: #fff;
    background-color: var(--color-primary);
    position: absolute;
    top: 1.5rem;
    right: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
