<template>
  <footer class="footer-main">
    <div class="footer-main__container container">
      <div @click="this.$router.push('/')" class="footer-main__menu-icon">
        <img src="@/assets/images/menu-icon-home.png" alt="" />
        <p>Главаная</p>
      </div>
      <div class="footer-main__menu-icon">
        <img src="@/assets/images/menu-icon-gift.png" alt="" />
        <p>Бонусы</p>
      </div>
      <div class="footer-main__menu-icon">
        <img src="@/assets/images/menu-icon-map.png" alt="" />
        <p>Карта</p>
      </div>
      <div @click="this.$router.push('/personalArea')" class="footer-main__menu-icon">
        <img src="@/assets/images/menu-icon-account.png" alt="" />
        <p>Аккаунт</p>
      </div>
    </div>
  </footer>
</template>


<script>
export default {
  components: {},
  name: "FooterMain",
  computed: {},
  props: {},
  data: () => ({}),
  methods: {},
};
</script>


<style lang='scss' scoped>
.footer-main {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: #040624;
  &__container {
    display: flex;
    justify-content: space-between;
  }
  &__menu-icon {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 26px;
      height: 26px;
    }
    p {
      margin: 3px 0 0;
      font-size: 10px;
      color: white;
    }
  }
}
</style>