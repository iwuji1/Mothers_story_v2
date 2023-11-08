<script>

  import * as d3 from 'd3';
  import { scaleBand, scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  const data = [
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"mother"},
    {"role":"farther"}
  ]

  let width = 800;
  let height = 600;

</script>

<style>

  svg {
    width: 8vw;
    height: 25vh;
    fill: #ee3423;
  }

  .sqre {
    display: flex;
    flex-wrap: wrap;
  }

  .mother {
    fill: #ee3423;
    transform: scale(1.2)
  }

  .farther {
    fill: #2f9744;
    transform: scale(1.2)
  }

  @media screen and (max-width: 1000px) {

    svg {
      width: 20vw;
      height: 10vh;
    }

    .mother {
      transform: scale(0.5)
    }

    .farther{
      transform: scale(0.5)
    }

  }

</style>
  <div class="sqre">
    {#each data as d}
      <svg>
        <g>
        	<path class={d.role} d="M52.65,125.2h19.9c3.3,0,6-2.7,6-6V86.301h3.399c3.301,0,6-2.701,6-6V43.2c0-3.3-2.699-6-6-6H43.25c-3.3,0-6,2.7-6,6
        		v37.101c0,3.299,2.7,6,6,6h3.4V119.2C46.65,122.5,49.25,125.2,52.65,125.2z"/>
        	<circle class={d.role} cx="62.55" cy="15.7" r="15.7"/>
        </g>
      </svg>
    {/each}
  </div>
