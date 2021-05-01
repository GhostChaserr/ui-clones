
<template>
  <div class="outer-container">
    <header>
      <div class="header__container">
        <a href="#" class="header_link">Gmail</a>
        <a href="#" class="header_link">Images</a>
        <button class="header__signin__button">SignIn</button>
      </div>
    </header>
    <main class="main__container">
      <h1> Min content goes here </h1>
    </main>
    <section class="location__container">
      <h1> Location goes here </h1>
    </section>
    <footer class="footer_container">
      <h1>Footer</h1>
    </footer> 
  </div>
</template>


<script lang="ts">

import { Vue, Component, Prop } from 'vue-property-decorator'


@Component({
  components: {}
})
export default class GoogleHome  extends Vue {}
</script>


<style lang="scss" scoped>

  .outer-container {
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
  }

  .header__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 10px;
    border: 1px solid red;
  }

  .header__signin__button {
    padding: 10px 16px;
    outline: none;
    border: none;
    background-color: darkcyan;
    cursor: pointer;
    border-radius: 5px;
  }

  .header__container a {
    margin: 0 5px;
    color: black;
    font-size: 0.9rem;
  }

 
</style>