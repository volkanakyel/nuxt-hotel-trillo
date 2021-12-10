<template>
  <div class="user-reviews">
    <figure class="review">
      <blockquote class="review__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        doloremque nihil accusantium veniam eveniet laudantium
      </blockquote>
      <figcaption class="review__user">
        <img
          class="review__photo"
          src="../assets/img/user-1.jpg"
          alt="User 1"
        />
        <div class="review__user-box">
          <p class="review__user-name">Nick Smith</p>
          <p class="review__user-date">Feb 23rd, 2021</p>
        </div>
        <div class="review__rating">7.9</div>
      </figcaption>
    </figure>
    <figure class="review">
      <blockquote class="review__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur
        doloremque nihil accusantium veniam eveniet laudantium
      </blockquote>
      <figcaption class="review__user">
        <img
          class="review__photo"
          src="../assets/img/user-2.jpg"
          alt="User 2"
        />
        <div class="review__user-box">
          <p class="review__user-name">Nick Smith</p>
          <p class="review__user-date">Feb 23rd, 2021</p>
        </div>
        <div class="review__rating">7.9</div>
      </figcaption>
    </figure>
    <button class="btn-inline">Show all <span>&rarr;</span></button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.user-reviews {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.review {
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  margin-bottom: 3.5rem;
  position: relative;
  @media only screen and (max-width: $bp-medium) {
    padding: 2rem;
    margin-bottom: 3rem;
  }
  &__text {
    margin-bottom: 2rem;
    z-index: 10;
    position: relative;
    overflow: hidden;
  }
  &__user {
    display: flex;
    align-items: center;
  }
  &__photo {
    height: 4.5rem;
    width: 4.5rem;
    border-radius: 50%;
    margin-right: 1.5rem;
  }
  &__user-box {
    margin-right: auto;
  }
  &__user-name {
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.4rem;
  }
  &__user-date {
    font-size: 1rem;
    color: var(--color-grey-dark-3);
  }
  &__rating {
    color: var(--color-primary);
    font-size: 2.2rem;
    font-weight: 300;
  }
  &::before {
    content: '\201C';
    position: absolute;
    top: -2.75rem;
    left: -1rem;
    line-height: 1;
    font-size: 20rem;
    color: var(--color-grey-light-2);
    font-family: sans-serif;
    z-index: 1;
  }
}
</style>
