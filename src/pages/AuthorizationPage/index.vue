<template>
  <div class="authorization">
    <header class="authorization__header">
      <div class="container">
        <router-link to="/" class="btn">Назад</router-link>
      </div>
    </header>

    <div class="container">
      <h2 class="title">Авторизация</h2>

      <form class="authorization__form">
        <input
          type="text"
          placeholder="Введите E-mail"
          class="authorization__input"
        />
        <input
          type="text"
          placeholder="Введите пароль"
          class="authorization__input"
        />
        <button @click="this.$router.push('/personalArea')" class="authorization__form-btn">Войти</button>
      </form>    

      <div class="authorization__registration-link">
        Если у вас нет аккаунта, то вы можете <router-link to="/registration">Зарегистрироваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.authorization{
  &__header {
    padding: 20px 0;
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

  &__registration-link{
    font-size: 12px;
    text-align: center;
    color: #040624;
    margin-top: 25px;

    a{
      color:#02bd6d;
    }
  }
}
</style>