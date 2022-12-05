<template>
  <header-main :headerButtonContent="headerButtonContent" />
  <main class="main">
    <!-- <section class="personal-area">
      <div class="personal-area__container container">
        <div class="basic-info">
          <div class="basic-info__img">
            <img src="@/assets/images/icon-user2x.png" alt="" />
          </div>
          <p class="basic-info__name">Мухтаров Мирзахан</p>
          <div class="basic-info__progress">
            <div class="progress"></div>
          </div>
          <p class="basic-info__bonus-count">Бонусов: 5</p>
        </div>
        <div class="additional-info">
          <div class="additional-info__buttons">
            <button>Использовать бонус</button>
            <button>Редактировать</button>
          </div>
          <form class="registration__form">
            <input
              type="text"
              placeholder="Введите имя"
              value=""
              disabled
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
            <button class="registration__form-btn">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </section> -->

    <section class="personal-area">
      <div class="personal-area__container container">
        <div class="basic-info">
          <div class="basic-info__img">
            <img src="@/assets/images/icon-user2x.png" alt="" />
          </div>
          <p class="basic-info__name">DjigitIT</p>
          <div class="basic-info__raiting">
            <img src="@/assets/images/filled-star.png" alt="" />
            <img src="@/assets/images/filled-star.png" alt="" />
            <img src="@/assets/images/filled-star.png" alt="" />
            <img src="@/assets/images/filled-star.png" alt="" />
            <img src="@/assets/images/empty-star.png" alt="" />
          </div>
        </div>
        <div class="additional-info">
          <div class="additional-info__buttons">
            <button>Повысить рейтинг</button>
            <button>Редактировать</button>
          </div>
          <form class="registration__form">
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

            <button class="registration__form-btn">Сохранить изменения</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <footer-main />
</template>


<script>
import HeaderMain from "@/components/HeaderMain/index.vue";
import FooterMain from "@/components/FooterMain/index.vue";

export default {
  components: { HeaderMain, FooterMain },
  name: "PersonalAreaPage",
  computed: {},
  props: {},
  data: () => ({
    headerButtonContent: "Назад",
  }),
  methods: {},
};
</script>


<style lang='scss'>
.personal-area {
  margin: 0 0 100px;
  .basic-info {
    margin: 50px 0 30px 0;
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &__img {
      max-width: 60px;
      max-height: 60px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__name {
      font-size: 12px;
    }
    &__progress {
      width: 260px;
      height: 10px;
      background-color: #fff;
      border-radius: 3px;
      .progress {
        width: 170px;
        height: 100%;
        background-color: #02bd6d;
        border-radius: 3px;
      }
    }

    &__raiting {
      display: flex;

      img {
        width: 20px;
        height: 20px;
        margin: 0 5px;
      }
    }
    &__bonus-count {
      font-size: 10px;
    }
  }
  .additional-info {
    margin: 0 0 30px;
    &__buttons {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      button {
        font-size: 13px;
        font-weight: 500;
        padding: 5px 15px;
        border-radius: 3px;
        background-color: #02bd6d;
        color: #fff;
      }
    }
    .registration {
      &__form {
        width: 100%;
        display: flex;
        flex-direction: column;
        margin-top: 20px;
      }
      &__input {
        width: 100%;
        padding: 15px 10px;
        border-radius: 3px;

        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }

      &__form-btn {
        padding: 12px 20px;
        border-radius: 3px;
        background-color: #02bd6d;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>