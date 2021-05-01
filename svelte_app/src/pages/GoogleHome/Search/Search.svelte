<script lang="ts">

    // CLose button
   import Close from "svelte-material-icons/Close.svelte"
   import Magnify from "svelte-material-icons/Magnify.svelte"


  let searchValue = ""
  $: isSearching = !!searchValue;

  const handleSearchChange = (): void => {
    console.log(searchValue);
  };

  const handleClearButtonClick = () => {
    searchValue = "";
  };
</script>

<main>
  <div class="search__input__container">
    <div class="search__input__clear__button_container" >   
      <button
        on:click={handleClearButtonClick}
        class={`search__input__clear__button ${isSearching && 'search__input__clear__button__show'}`}
      >
        <Close/>
      </button>
    </div>
    <div class="search_input_search_icon_container">
      <Magnify />
    </div>
    <input
      bind:value={searchValue}
      type="text"
      class={`search_input ${isSearching && "search_input__hide__border"}`}
      on:input={handleSearchChange}
    />
    <div
      class={`search_results_container ${
        isSearching && "search_results_container__open"
      }`}
    >
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
      <p>Result ..</p>
    </div>
  </div>
</main>

<style>
  .search__input__container {
    position: relative;
  }

  .search_results_container {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    display: none;
    -webkit-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-bottom: 1px solid;
  }

  .search_results_container__open {
    display: block;
  }

  .search_input {
    width: 100%;
    outline: none;
    border: none;
    padding: 20px;
    border-radius: 30px;
    border: 1px solid #dfe1e5;
    font-size: 1rem;
    text-indent: 25px;
  }

  .search_input__hide__border {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: none;
    -webkit-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    border: 1px solid white;
  }

  .search_input:hover {
    border: 1px solid white;
    -webkit-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 11px -5px rgba(0, 0, 0, 0.75);
  }

  .search__input__clear__button_container {
    position: absolute;
    right: 20px;
    top: 5px;
  }

  .search__input__clear__button {
    cursor: pointer;
    outline: none;
    border: none;
    background-color: transparent;
    color: rgb(95, 93, 93);
    font-size: 1.5rem;
    visibility: hidden;
  }

  .search__input__clear__button__show {
    visibility: visible;
  }

  .search__input__clear__button:hover,
  .search__input__clear__button:focus {
    background-color: transparent;
  }

  .search_input_search_icon_container {
    position: absolute;
    left: 20px;
    top: 18px;
    font-size: 1.5rem;
    color: rgb(95, 93, 93);
  }
</style>
