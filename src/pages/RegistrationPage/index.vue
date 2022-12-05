<template>
  <header-main :headerButtonContent="headerButtonContent" />
  <main class="main">
    <section class="registration">
      <div class="container">
        <h2 class="title">Регистрация</h2>

        <div class="registration__btns">
          <a
            href="#"
            class="registration__btn"
            :class="{ 'registration__btn--active': this.face === 'fis' }"
            @click="fisFace"
            >Физическое лицо</a
          >
          <a
            href="#"
            class="registration__btn"
            :class="{ 'registration__btn--active': this.face === 'ur' }"
            @click="urFace"
            >Юридическое лицо</a
          >
        </div>

        <form class="registration__form" v-if="this.face === 'fis'">
          <input
            type="text"
            placeholder="Введите имя"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите фамилию"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите отчество"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите номер телефона"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите E-mail"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите пароль"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите пароль повторно"
            class="registration__input"
          />

          <button
            @click="this.$router.push('/personalArea')"
            class="registration__form-btn"
          >
            Зарегистрироваться
          </button>
        </form>

        <form class="registration__form" v-else>
          <input
            type="text"
            placeholder="Введите название огранизации"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите ИНН"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите номер телефона"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите адрес организации"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите E-mail"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите пароль"
            class="registration__input"
          />
          <input
            type="text"
            placeholder="Введите пароль повторно"
            class="registration__input"
          />

          <button
            @click="this.$router.push('/personalArea')"
            class="registration__form-btn"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script>
import HeaderMain from "@/components/HeaderMain/index.vue";

export default {
  components: {
    HeaderMain,
  },
  data: () => ({
    headerButtonContent: "Назад",
    face: "fis",
  }),

  methods: {
    fisFace() {
      this.face = "fis";
    },

    urFace() {
      this.face = "ur";
    },
  },
};
</script>

<style lang="scss" scoped>
.header-main {
  background-color: #e8e7e5;
  // &::v-deep &__container {
  //   justify-content: flex-start;
  // }
}

.registration {
  &__btns {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
  }
  &__btn {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 15px;
    border-radius: 3px;
    color: #040624;
  }
  &__btn--active {
    background-color: #02bd6d;
    color: #fff;
  }

  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
  }
  &__input {
    width: 100%;
    padding: 15px 10px;
    border: none;
    outline: none;
    border-radius: 3px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  &__form-btn {
    padding: 12px 20px;
    border: none;
    outline: none;
    border-radius: 3px;
    background-color: #02bd6d;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
  }
}
</style>
