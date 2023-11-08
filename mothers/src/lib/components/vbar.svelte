<script>

  import * as d3 from 'd3';
  import { scaleBand, scaleLinear } from "d3-scale";
  import { max } from "d3-array";
  import gsap from 'gsap';
  import { onMount } from 'svelte';

  const data = [
    {"age":"16-19",
  "percentage":1},
    {"age":"20-24",
  "percentage":6},
    {"age":"25-29",
  "percentage":10},
    {"age":"30-34",
  "percentage":15},
    {"age":"35-39",
  "percentage":18},
    {"age":"40-44",
  "percentage":19},
  {"age":"45-49",
  "percentage":16},
  {"age":"50-54",
  "percentage":12},
  {"age":"55-59",
  "percentage":4},
  {"age":"60-64",
  "percentage":1}
  ]

  let width = 800;
  let height = 600;

  const margin = { top: 20, right: 20, left: 120, bottom: 20 };
  $: innerHeight = height - margin.top - margin.bottom;
  $: innerWidth = width - margin.left - margin.right;

  $: xDomain = data.map(function(d) {return d.age});
  $: yDomain = data.map(function(d) {return d.percentage});

  $: xScale = scaleBand().domain(xDomain).range([0, innerWidth]).padding(0.1);
  $: yScale = scaleLinear().domain([0, max(data, function(d) {return d.percentage})]).range([innerHeight, 0]);


</script>

<style>

  .bars {
    transform: translate(10%, 0)
  }

  .chart-txt {
    fill: #ffffff;
    transform: translate(10%, 1%);
    font-family: sans-serif;
  }

  svg {
    width: 50vw;
    height: 90vh;
  }

  @media screen and (max-width: 1000px) {
    .bars {
      transform: translate(5%, 0%) scale(0.5);
    }

    .chart-txt {
      transform: translate(5%, 0%) scale(0.5);
    }
    svg {
      width: 100vw;
      height: 50vh;
    }

  }

</style>

  <svg class="vbar">
    {#each data as d}
    <text class="chart-txt" text-anchor="middle" x={xScale(d.age) + xScale.bandwidth() / 2} dy=".3em" y={innerHeight+10}>{d.age}</text>
      <rect
        class="bars"
        x={xScale(d.age)}
        y={yScale(d.percentage)}
        width={xScale.bandwidth()}
        height={yScale(0) - yScale(d.percentage)}
        fill="#ee3423"
        />
    {/each}

  </svg>
