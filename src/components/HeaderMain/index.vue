<template>
  <div class="header-main">
    <div class="container header-main__container">
      <router-link 
        to="" 
        class="btn"
        @click="routeTo"
      >
        {{ this.headerButtonContent }}
      </router-link>
    </div>
  </div>
</template>


<script>
export default {
  components: {},
  name: "HeaderMain",
  computed: {},
  props: {
    headerButtonContent: {
      type: String,
      default: "Войти",
    },
  },
  data: () => ({}),
  methods: {
    routeTo() {
      if (this.headerButtonContent === 'Назад') {
        this.$router.go(-1);
      } else {
        this.$router.push('/authorization');
        
      }
    }
  },
};
</script>


<style lang='scss'>
.header-main {
  padding: 20px 0;
  background-color: #040624;

  &__container {
    display: flex;
  }
}
</style>