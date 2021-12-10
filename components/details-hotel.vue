<template>
  <div class="detail">
    <div class="description">
      <p class="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
        adipisci quisquam consequatur expedita libero fuga accusantium nisi
        dolor, quaerat, architecto at repellendus rerum cupiditate aperiam
        nesciunt eum. Repellendus, quas consectetur.
      </p>
      <p class="paragraph">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae modi
        sequi deserunt ea! Assumenda, quisquam.
      </p>
      <ul class="list">
        <li class="list__item">Close to the beach</li>
        <li class="list__item">Breakfast included</li>
        <li class="list__item">Free airport shuttle</li>
        <li class="list__item">Free WiFi in all rooms</li>
        <li class="list__item">Air conditioning and heating</li>
        <li class="list__item">Pets allowed</li>
        <li class="list__item">We speak all languages</li>
        <li class="list__item">Perfect for families</li>
      </ul>
      <div class="recommend">
        <p class="recommend__count">
          Lucy and 3 other friends recommend this hotel
        </p>
        <div class="recommend__friends">
          <img
            src="../assets/img/user-3.jpg"
            alt="Friend 1"
            class="recommend__photo"
          />
          <img
            src="../assets/img/user-4.jpg"
            alt="Friend 2"
            class="recommend__photo"
          />
          <img
            src="../assets/img/user-5.jpg"
            alt="Friend 3"
            class="recommend__photo"
          />
          <img
            src="../assets/img/user-6.jpg"
            alt="Friend 4"
            class="recommend__photo"
          />
        </div>
      </div>
    </div>
    <user-reviews />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.detail {
  font-size: 1.4rem;
  display: flex;
  padding: 4.5rem;
  background-color: var(--color-grey-light-1);
  border: var(--line);
  @media only screen and (max-width: $bp-small) {
    flex-direction: column;
  }
}
.description {
  background-color: #fff;
  box-shadow: var(--shadow-light);
  padding: 3rem;
  flex: 0 0 60%;
  margin-right: 4.5rem;
  @media only screen and (max-width: $bp-medium) {
    padding: 2rem;
    margin-right: 3rem;
  }
  @media only screen and (max-width: $bp-small) {
    margin-right: 0;
    margin-bottom: 3rem;
  }
}
.paragraph:not(:last-of-type) {
  margin-bottom: 2rem;
}
.list {
  list-style: none;
  margin: 3rem 0;
  padding: 3rem 0;
  border-bottom: var(--line);

  display: flex;
  flex-wrap: wrap;
  &__item {
    flex: 0 0 50%;
    margin-bottom: 0.7rem;
  }
  &__item::before {
    content: '';
    display: inline-block;
    height: 1rem;
    width: 1rem;
    margin-right: 0.7rem;
    background-color: var(--color-primary);
    mask-image: url('~assets/img/chevron-thin-right.svg');
    mask-size: cover;
  }
}

.recommend {
  font-size: 1.3rem;
  color: var(--color-grey-dark-3);
  display: flex;
  align-items: center;
  &__count {
    margin-right: auto;
  }
  &__friends {
    display: flex;
  }
  &__photo {
    box-sizing: content-box;
    height: 4rem;
    width: 4rem;
    border-radius: 50%;
    border: 3px solid #fff;
    &:not(:last-child) {
      margin-right: -2rem;
    }
  }
}
</style>
