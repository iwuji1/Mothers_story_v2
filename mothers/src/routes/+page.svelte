<script>
  import * as d3 from 'd3';
  import { scaleBand, scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  export let data;

  import WMimg from '$lib/components/wm_img.svelte'
  import Stars from '$lib/components/star.svelte'
  import BHM from '$lib/components/BHM_intro.svelte'
  import She from '$lib/components/Sheroes.svelte'
  import Fam from '$lib/components/family.svelte'
  import Vbar from '$lib/components/vbar.svelte'
  import Pintro from '$lib/components/pub_intro.svelte'
  import Fetcher from '$lib/components/DataFetcher.svelte'


</script>

<style>

.intro-container {
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  background-color: #000000;
  margin: auto;
  padding: 0%;
}

.title-img {
  position: relative;
  height: 100vh;
}

.test-stars {
  display: flex;
  width: 100vw;
  height: 90vh;
  flex-direction: row;
}

.back-vis {
  position: relative;
  margin: 0%;
}

.test-text {
  position: absolute;
  color: #ffffff;
  left: 25%;
}

.title-text {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: translate(20vw, 40vh);
  margin: auto;
}

.title-text h1 {
  flex: 40%;
  font-family: sans-serif;
  font-size: 10em;
  align-self: center;
  margin: 0%;
  color: #ffd502
}

.title-text p {
  font-family: sans-serif;
  font-size: 2em;
  align-self: center;
  color: #ffffff;
}

@media screen and (max-width: 1000px) {
  .title-text {
    transform: translate(0vw, 0vh);
  }

  .test-text {
    left: 0%;
  }

  .title-text h1 {
    font-size: 5em;
    flex: 10%;
  }

  .text-titel p {
    font-size: 1em;
    text-align: center;
  }


}

</style>

<div class="Page-container">

  <div class="intro-container">
    <div class="title-img">
      <WMimg/>
    </div>
    <div class="title-text">
      <h1>To Our Mothers</h1>
      <p>Reflecting on Motherhood for BHM 2023</p>
    </div>
  </div>

  <!-- <div class="test-stars">
    <div class="back-vis">
      <Stars/>
    </div>
    <div class="test-text">
      <h1>Welcome to SvelteKit</h1>
    </div>
    <div class="test-text">
      <h1>au;sboauvsfiwyavsbfiwasubf i;eavuksdb</h1>
    </div>
  </div> -->

  <BHM />
  <She />
  <Fam />
  <Pintro />

</div>
