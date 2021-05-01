<script lang="ts">

  import Apps from "svelte-material-icons/Apps.svelte"
  import Search from 'src/pages/GoogleHome/Search'


</script>

<main>
  <div class='outer-container'>
    <header class='header__container'>
      <div class="header__container_wrapper">
        <a class="header__container__content__link link__shared" href="/"> Gmail </a>
        <a class="header__container__content__link link__shared" href="/"> Images </a>
        <div class="header_container_content_apps_icon_container">
          <Apps />
        </div>
        <button class="header__container__content__button"> Sign In </button>
      </div>
    </header>
    <main class='main-container'>
      <div class="main__content__wrapper">
        <div class="main__container__logo_wrapper">
          <img class="main__container__logo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="">
        </div>
        <Search />
      </div>
    </main>
    <section class='location-container footer__wrapper'>
      <p class='location__container__text'> Tbilisi </p>
    </section>
    <footer class='footer-container footer__wrapper'>
      <div class="footer__container_children_wrapper left">
        <a href="/" class="footer__link link__shared"> About </a>
        <a href="/" class="footer__link link__shared"> Advertising </a>
        <a href="/" class="footer__link link__shared"> Business </a>
      </div>
      <div class="footer__container_children_wrapper right">
        <a href="/" class="footer__link link__shared"> Privacy </a>
        <a href="/" class="footer__link link__shared"> Terms </a>
        <a href="/" class="footer__link link__shared"> Settings </a>
      </div>
    </footer>
  </div>
</main>


<style>

  .link__shared {
    color: black;
    margin: 5px;
    font-size: 0.8rem;
  }

  .outer-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto auto;
    height: 100vh;
  }

  .header__container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: auto;
    padding: 10px;
  }

  .header__container__content__button {
    outline: none;
    border: none;
    background-color: #1a73e8;
    padding: 9px 23px;
    cursor: pointer;
    color: white;
    margin: 0 10px;
    border-radius: 5px;
    font-size: 0.9rem;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  .main__content__wrapper {
    width: 40%;
  }

  @media only screen and (max-width: 900px) {
    .main__content__wrapper {
      width: 60%;
    }
  }

  @media only screen and (max-width: 800px) {
    .main__content__wrapper {
      width: 80%;
    }
  }

  @media only screen and (max-width: 600px) {
    .main__content__wrapper {
      width: 100%;
    }
  }


  .main__container__logo_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }


  .main__container__logo {
    width: 200px;
    margin-bottom: 10px;
  }

  .footer__wrapper{
    padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: rgba(0,0,0,.54);
    background-color: #f9f9f9;
  }

  .location-container {
    padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: rgba(0,0,0,.54);
    background-color: #f9f9f9;
  }

  .location__container__text {
    font-size: 0.9rem;
  }

  .footer-container {
    padding: 15px 30px;
    border-bottom: 1px solid #dadce0;
    font-size: 15px;
    color: rgba(0,0,0,.54);
    background-color: #f9f9f9;
    border-bottom: none;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: auto;    
  }

  .footer__container_children_wrapper a {
    color: rgba(0,0,0,.54);
  }

  .header_container_content_apps_icon_container {
    display: inline-block;
    position: relative;
    font-size: 1.5rem;
    top: 8px;
    cursor: pointer;
  }



</style>