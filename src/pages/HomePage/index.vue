<template>
  <div class="home-page">
    <header-main />
    <main class="main">
      <section class="problems">
        <div class="container">
          <h2 class="title">Выберите вашу проблему</h2>
          <div class="problems__flex">
            <div class="problems__block">
              <div
                @click="this.$router.push('/education')"
                class="problems__item"
              >
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Помощь новичку</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>

              <div class="problems__item">
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Легковая техпомощь</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>

              <div class="problems__item">
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Легковая техпомощь</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>
            </div>

            <div class="problems__line"></div>

            <div class="problems__block">
              <div class="problems__item">
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Легковая техпомощь</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>

              <div class="problems__item">
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Легковая техпомощь</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>

              <div class="problems__item">
                <div class="problems__item-icon">
                  <img src="@/assets/images/automotive.png" alt="" />
                </div>
                <h3 class="problems__item-title">Легковая техпомощь</h3>
                <p class="problems__item-description">
                  Не заводится автомобиль? Нужна помощь? Позвони и вызови
                  мастера!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer-main />
  </div>
</template>

<script>
import HeaderMain from "@/components/HeaderMain/index.vue";
import FooterMain from "@/components/FooterMain/index.vue";
export default {
  components: { HeaderMain, FooterMain },
  name: "HomePage",
  computed: {},
  props: {},
  data: () => ({}),

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.problems {
  margin-top: 20px;

  &__flex {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding-bottom: 20px;
    border-bottom: 2px solid #02bd6d;
  }

  &__item {
    cursor: pointer;
    width: 100%;
    max-width: 150px;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
    padding: 15px 10px;
    text-align: center;

    &:not(:last-child) {
      margin-bottom: 22px;
    }
  }
  &__item-icon {
    width: 35px;
    height: 35px;
    margin: 0 auto;

    img {
      width: 100%;
      height: 100%;
    }
  }
  &__item-title {
    font-size: 10px;
    color: #02bd6d;
    margin: 6px 0;

    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      margin: 3px 0;
      background-color: #02bd6d;
    }
  }
  &__item-description {
    font-size: 8px;
  }

  &__line {
    width: 2px;
    min-height: 100%;
    border-radius: 5px;
    background-color: #02bd6d;
  }
}
</style>
