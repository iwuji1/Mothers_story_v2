import { c as create_ssr_component, d as add_attribute, f as each, e as escape, h as null_to_empty, v as validate_component } from "../../chunks/ssr.js";
import "d3";
import { scaleBand, scaleLinear } from "d3-scale";
import { max } from "d3-array";
const wm_img_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".img_container.svelte-4spcxb{align-items:center;justify-content:center;text-align:center}svg.svelte-4spcxb{width:100vw;height:100vh;fill:#ee3423}.cls-1.svelte-4spcxb{transform:translate(25%, 0) scale(1)}@media screen and (max-width: 1000px){svg.svelte-4spcxb{width:100vw}.cls-1.svelte-4spcxb{transform:translate(0, 50%) scale(0.5)}}",
  map: null
};
const Wm_img = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<svg class="img_container svelte-4spcxb" xmlns="http://www.w3.org/2000/svg"><defs></defs><g id="NZXUGG"><path class="cls-1 svelte-4spcxb" d="m705.56,404.77c-3.56,6.52-8.13,12.15-13.62,17.09-2.38,2.14-4.98,3.98-7.6,5.81-1.5,1.05-2.37.73-3.03-.93-1.84-4.62-3.2-9.31-3.2-14.37,0-23.11-3.87-45.49-12.98-66.84-3.2-7.51-7.27-14.55-11.93-21.24-.45-.65-1.22-1.14-1.18-2.31,9.17,1.76,18.22-1.63,27.52.07,7.43,1.35,10.07-1.74,10.23-9.37.04-1.85.12-3.72,0-5.56-.42-6.06.48-11.49,5.03-16.19,2.35-2.44,3.6-5.96,5.29-9.02,1.48-2.68,3.54-4.8,6.07-6.47,3.34-2.22,6.87-4.18,9.46-7.37,1.09-1.34,2.6-1.06,4.01-.76,2.11.45,4.2,1.04,6.32,1.47,1.08.22,2.34.53,3.09-.66.68-1.07.28-2.2-.23-3.24-.83-1.68-2.01-3.11-3.27-4.48-1.95-2.12-3.91-4.24-5.83-6.39-3.85-4.34-3.58-6.6,1.2-10.04,2.25-1.62,4.67-3.05,6.79-4.83,4.36-3.68,3.92-6.97-1.18-9.43-2.41-1.16-4.96-2.01-7.4-3.1-4.56-2.05-5.8-4.35-5.02-9.32.38-2.44.97-4.85,1.38-7.28,1.1-6.55-.6-9.37-6.92-11.3-3.15-.96-6.38-1.65-9.53-2.58-3.83-1.14-5.71-3.73-5.68-7.79.03-5.53.4-11.06-2.13-16.36-.98-2.07-.26-4.66.18-7.01.6-3.23,1.57-6.41,1.55-9.74-.02-4.69-1.62-6.34-6.25-6.45-4.67-.11-9.22.86-13.79,1.55-9.04,1.36-11.02-.43-10.24-9.53.2-2.36.54-4.7.86-7.05.3-2.21.23-4.49-1-6.29-2.4-3.52-2.95-7.45-2.95-11.48,0-5.53-1.51-10.2-5.82-14.01-3.15-2.78-5.83-6.09-8.64-9.25-2.09-2.35-4.52-2.92-7.52-2.12-4.5,1.2-8.76,3-13.09,4.64-9.38,3.54-11.52,2.28-12.7-7.56-.37-3.06-.69-6.15-1.32-9.16-1.02-4.84-3.47-6.84-8.41-6.97-3.7-.1-7.41,0-11.12.08-4.15.1-7.12-1.69-8.92-5.41-.81-1.67-1.58-3.35-2.3-5.06-1.83-4.32-4.09-8.1-8.31-10.77-2.97-1.88-5.25-4.89-7.73-7.5-2.76-2.9-5.96-5.03-9.81-6.17-5.43-1.61-10.85-3.25-16.26-4.88-2.16-.65-4.12.08-5.93,1.05-3.54,1.9-6.97,3.98-10.45,5.99-5.39,3.12-8.18,3.32-12.53-.97-7.83-7.73-18.24-10.56-27.59-15.37-5.27-2.71-11.17-1.33-16.74-.68-5.49.64-10.15-.5-14.32-4.11-2.25-1.95-4.61-3.79-7.23-5.26-3.37-1.88-6.56-1.7-9.35,1.01-2.87,2.8-5.58,5.76-8.38,8.64-.79.81-1.57,1.64-2.44,2.35-3.35,2.71-5.45,2.64-8.72-.26-2.71-2.41-4.78-5.39-7.15-8.1-1.29-1.47-2.57-2.97-4.05-4.23-3.26-2.79-6.05-2.51-8.74.85-1.81,2.26-3.24,4.76-4.55,7.34-1.49,2.94-2.94,5.9-4.89,8.58-2.52,3.46-4.78,4.07-8.46,1.87-2.55-1.53-4.85-3.47-7.29-5.19-1.34-.95-2.66-1.96-4.1-2.74-3.78-2.05-6.54-1.52-9.34,1.72-2.24,2.6-3.84,5.64-5.23,8.72-2.81,6.23-7.81,8.13-14.09,7.46-5.35-.57-10.45.17-15.47,1.96-3.88,1.38-7.87,2.49-11.68,4.02-3.09,1.24-5.99,1.21-8.98-.04-3.51-1.47-6.96-3.12-10.55-4.37-5.08-1.77-8.05-.4-10.08,4.59-1.43,3.52-2.55,7.18-3.8,10.77-.92,2.63-2.74,4.38-4.93,6.11-8.14,6.44-16.33,12.85-24,19.83-4.39,4-8.72,4.85-14.11,3.21-2.94-.89-5.99-1.61-9.03-1.97-4.96-.6-7.34,1.11-8.48,6-.82,3.5-1.17,7.1-1.86,10.63-1.19,6.07-3.36,7.57-9.28,5.96-5.36-1.46-10.62-3.27-15.89-5.05-4.56-1.54-8.17-.76-10.98,3.46-6.51,9.82-14.85,18.14-22.49,27.04-1.56,1.82-3,3.85-3.44,6.16-1.81,9.59-7.2,17.23-13.29,24.39-4.28,5.03-5.83,10.37-4.5,16.84,1.19,5.8.12,11.17-3.87,15.9-2.18,2.58-3.78,5.64-5.74,8.41-2.32,3.29-2.54,6.86-1.72,10.63.6,2.71,1.3,5.41,1.81,8.14.91,4.87-.39,6.8-5.28,8-4.73,1.16-9.61,1-14.4,1.69-1.32.19-2.66.32-3.97.56-6.81,1.23-8.31,3.02-7.4,9.84.76,5.69,2.37,11.21,1.64,17.11-.35,2.88,1.87,5.35,3.51,7.73,1.75,2.54,3.68,4.97,5.29,7.6,3.1,5.07,2.34,7.53-3.06,9.89-3.01,1.32-6.17,2.3-9.24,3.5-2.11.82-4.25,1.61-6.23,2.67-3.63,1.95-4.56,4.22-3.43,8.23.5,1.77,1.27,3.49,2.11,5.13,2.22,4.33,4.17,8.63,3.91,13.76-.16,3.11,1.66,5.89,3,8.68,4.37,9.08,3.73,10.96-5.23,15.29-4.26,2.06-8.65,3.88-12.82,6.11-5.75,3.07-6.4,6.19-2.58,11.42,1.88,2.57,4.06,4.93,6.02,7.45,3.64,4.67,3.82,7.63.95,12.76-1.46,2.6-3.05,5.15-4.28,7.86-1.84,4.03-1.38,6.47,1.96,9.38,2.94,2.57,6.18,4.79,9.31,7.13,2.51,1.88,3.74,4.28,4.34,7.46,1.71,8.98,2.93,18.1,6.57,26.62,1.97,4.61,2.74,9.53,2.43,14.51-.45,7.18,1.56,13.14,6.64,18.5,6.09,6.42,5.82,8.03.25,14.98-2.58,3.21-5.51,6.12-7.8,9.57-1.82,2.74-2.11,5.43-.47,8.4,2.54,4.59,4.92,9.27,7.39,13.91.97,1.82,2.63,2.84,4.45,3.65,3.12,1.4,6.45,2.12,9.72,3.04,3.42.97,6.02,2.72,7.75,6.04,1.85,3.54,4.15,6.88,6.49,10.14,2.26,3.14,2.66,6.38,1.44,9.93-1.17,3.41-2.45,6.78-3.5,10.23-2,6.58-.26,9.55,6.48,10.77,4.04.73,8.18.94,12.24,1.58,5.85.91,7.23,3.22,5,8.81-1.67,4.2-3.77,8.23-5.7,12.33-1.23,2.61-2.49,5.22-3.11,8.05-.82,3.76.59,5.72,4.41,6.14,5.1.56,10-.96,15-1.53,1.53-.17,3.06-.42,4.6-.49,6.04-.25,7.49.71,9.46,6.55,1.74,5.16,3.15,10.38,6.67,14.82,2.13,2.69,2.15,6.39,2.79,9.71,2.02,10.5,4.39,11.99,14.83,9.32,3.98-1.02,7.84-2.57,12.01-2.76,4.46-.2,5.88.97,6.6,5.44.53,3.26.61,6.55.7,9.85.2,7.97,2.19,10.83,10.01,12.52,10.17,2.2,19.03,7.74,28.91,10.63,2.44.71,4.15,2.66,5.51,4.77,1.17,1.82,2.28,3.68,3.23,5.62,2.49,5.06,6.51,8.03,11.95,9.39,4.59,1.15,9.13,2.5,13.66,3.87,2.63.8,5.11.28,7.57-.53,2.74-.9,5.42-1.97,8.16-2.87,4.36-1.43,8.13-.67,11,3.15,1.05,1.4,2.16,2.76,3.15,4.2,2.38,3.44,5.09,6.35,9.23,7.85,3.34,1.21,5.56,4.18,8.24,6.42,1.03.86,1.96,1.84,3.02,2.64,4.44,3.34,7.01,3.28,11.32-.19,3.31-2.66,5.84-6.09,8.88-9.02,6.29-6.08,9.5-6.18,13.75,1.32,4.9,8.66,11.44,13.39,21.44,13.1.4-.01.81.19,1.22.19,6.18.04,6.07.14,5.57,7.19-1.99,28.33-4.28,56.64-7.9,84.82-4.22,32.8-9.27,65.45-19.23,97.11-2.35,7.47-5.14,14.79-8.64,21.81-1.01,2.02-.88,3.01,1.73,2.97,19.26-.26,37.13,5.62,54.68,12.69,21.4,8.62,41.11,20.35,60.49,32.74,30.4,19.43,63,33.61,98.64,40.2,35.03,6.48,69.66,5.32,103.71-5.8,3.71-1.21,7.29-2.82,10.97-4.15,2.51-.91,2.68-2.16,1.35-4.39-12.36-20.68-24.64-41.42-36.94-62.14-23.71-39.93-47.51-79.82-71.1-119.82-12.98-22-21.16-45.72-24.06-71.17-1.79-15.71-.14-31.22,2.61-46.69,1.78-9.98,3.99-19.8,8.6-28.9,7.83-15.46,20.65-24.11,37.47-27.35,14.03-2.7,28.08-2.05,42.12-.35,8.07.98,16.07,2.46,24.12,3.64,8.24,1.21,15.08-1.5,20.29-7.9,6.57-8.07,9.01-17.74,9.8-27.83.53-6.78.13-13.51-1.39-20.25-1.64-7.24-.14-13.01,7.66-16.48,5.04-2.24,7.13-7.06,6.47-12.84-.73-6.42-3.44-12.03-6.95-17.32-2.68-4.04-2.69-4.02.53-7.43.85-.9,1.67-1.83,2.39-2.83,5.37-7.39,4.74-14.5-2.58-19.98-4.38-3.28-5.4-8.08-7.6-12.4-.85-1.67.59-2.33,1.76-3.04,7.86-4.83,13.15-11.71,16.2-20.37,1.56-4.43,1.24-8.64-.95-12.82-4.13-7.86-10.17-14.22-16.18-20.57-6.02-6.36-12.56-12.19-19.31-17.77-2.95-2.44-5.57-5.17-8-8.13-1.33-1.62-1.13-2.65.3-4.13,7.4-7.66,12.61-16.74,16.7-26.5.35-.84.58-1.73.86-2.59Z"></path></g></svg>`;
});
const BHM_graphic = "/_app/immutable/assets/bhm_poster.1e32ddcf.jpeg";
const BHM_faces = "/_app/immutable/assets/bhm_faces.3fc2b602.jpeg";
const BHM_intro_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".BHM.svelte-11qxi4b .point.svelte-11qxi4b{display:flex;align-items:center;width:100vw;height:100vh}.BHM.svelte-11qxi4b .wrapper.svelte-11qxi4b{height:100vh;background-color:#ee3423}.point.svelte-11qxi4b.svelte-11qxi4b{display:flex;margin:auto}.point.svelte-11qxi4b article.svelte-11qxi4b{flex-basis:60%;color:#ffffff;border-radius:5%;padding:0%}.point.svelte-11qxi4b img.svelte-11qxi4b{flex-basis:50%;max-width:40vw;height:auto}img.svelte-11qxi4b.svelte-11qxi4b{margin-right:5%}p.svelte-11qxi4b.svelte-11qxi4b{margin:5%;font-size:3rem;font-family:sans-serif}@media screen and (max-width: 1000px){.BHM.svelte-11qxi4b .wrapper.svelte-11qxi4b{width:100vw}.BHM.svelte-11qxi4b .point.svelte-11qxi4b{width:100vw}.point.svelte-11qxi4b.svelte-11qxi4b{flex-direction:column;width:100vw}img.svelte-11qxi4b.svelte-11qxi4b{margin:0%;width:100vw}.point.svelte-11qxi4b article.svelte-11qxi4b{flex-basis:100%}.point.svelte-11qxi4b img.svelte-11qxi4b{flex-basis:50%;max-width:100vw}}",
  map: null
};
const BHM_intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$7);
  return `${$$result.head += `<!-- HEAD_svelte-v0nlyp_START -->${$$result.title = `<title>Home Page</title>`, ""}<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" data-svelte-h="svelte-1ebcqqw"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" data-svelte-h="svelte-xack4i"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js" data-svelte-h="svelte-1ie0a9v"><\/script><!-- HEAD_svelte-v0nlyp_END -->`, ""}  <div class="BHM svelte-11qxi4b" data-svelte-h="svelte-81ar7z"><div class="wrapper svelte-11qxi4b"><div class="point svelte-11qxi4b"><article class="BHM-text svelte-11qxi4b"><p class="svelte-11qxi4b">The Theme for Black history Month 2023 in the UK is to our sisters</p></article> <img class="page-img svelte-11qxi4b"${add_attribute("src", BHM_graphic, 0)} alt="BHM 2023 poster"></div> <div class="point svelte-11qxi4b"><article class="BHM-text svelte-11qxi4b"><p class="svelte-11qxi4b">Paying homage to the amazing work  of the legendary women in our society</p></article> <img class="page-img svelte-11qxi4b"${add_attribute("src", BHM_faces, 0)} alt="BHM 2023 poster"></div></div></div>`;
});
const Sheroes_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".She-container.svelte-1858yhx{display:flex;height:100vh;width:100vw}h2.svelte-1858yhx{text-align:center;margin:auto;font-size:2rem;margin-left:15%;margin-right:15%}span.svelte-1858yhx{background-image:linear-gradient(yellow, yellow);background-repeat:no-repeat}@media screen and (max-width: 1000px){h2.svelte-1858yhx{margin:auto}}",
  map: null
};
const Sheroes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `${$$result.head += `<!-- HEAD_svelte-bftq3m_START --><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" data-svelte-h="svelte-1ebcqqw"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js" data-svelte-h="svelte-xack4i"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/TextPlugin.min.js" data-svelte-h="svelte-1ie0a9v"><\/script><!-- HEAD_svelte-bftq3m_END -->`, ""}  <div class="She-container svelte-1858yhx" data-svelte-h="svelte-1grzpxy"> <h2 class="svelte-1858yhx">Whilst there are some amazing stories of incredible women, I wanted to pay homage to some everyday <s>Heroes</s><span class="svelte-1858yhx">Sheroes</span> in Mothers</h2></div>`;
});
const vbar_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".bars.svelte-os3ttl{transform:translate(10%, 0)\n  }.chart-txt.svelte-os3ttl{fill:#ffffff;transform:translate(10%, 1%);font-family:sans-serif}svg.svelte-os3ttl{width:50vw;height:90vh}@media screen and (max-width: 1000px){.bars.svelte-os3ttl{transform:translate(5%, 0%) scale(0.5)}.chart-txt.svelte-os3ttl{transform:translate(5%, 0%) scale(0.5)}svg.svelte-os3ttl{width:100vw;height:50vh}}",
  map: null
};
let width$1 = 800;
let height$1 = 600;
const Vbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let xDomain;
  let xScale;
  let yScale;
  const data = [
    { "age": "16-19", "percentage": 1 },
    { "age": "20-24", "percentage": 6 },
    { "age": "25-29", "percentage": 10 },
    { "age": "30-34", "percentage": 15 },
    { "age": "35-39", "percentage": 18 },
    { "age": "40-44", "percentage": 19 },
    { "age": "45-49", "percentage": 16 },
    { "age": "50-54", "percentage": 12 },
    { "age": "55-59", "percentage": 4 },
    { "age": "60-64", "percentage": 1 }
  ];
  const margin = {
    top: 20,
    right: 20,
    left: 120,
    bottom: 20
  };
  $$result.css.add(css$5);
  innerHeight = height$1 - margin.top - margin.bottom;
  innerWidth = width$1 - margin.left - margin.right;
  xDomain = data.map(function(d) {
    return d.age;
  });
  data.map(function(d) {
    return d.percentage;
  });
  xScale = scaleBand().domain(xDomain).range([0, innerWidth]).padding(0.1);
  yScale = scaleLinear().domain([
    0,
    max(data, function(d) {
      return d.percentage;
    })
  ]).range([innerHeight, 0]);
  return `<svg class="vbar svelte-os3ttl">${each(data, (d) => {
    return `<text class="chart-txt svelte-os3ttl" text-anchor="middle"${add_attribute("x", xScale(d.age) + xScale.bandwidth() / 2, 0)} dy=".3em"${add_attribute("y", innerHeight + 10, 0)}>${escape(d.age)}</text> <rect class="bars svelte-os3ttl"${add_attribute("x", xScale(d.age), 0)}${add_attribute("y", yScale(d.percentage), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", yScale(0) - yScale(d.percentage), 0)} fill="#ee3423"></rect>`;
  })}</svg>`;
});
const hbar_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "svg.svelte-f0alx6{width:50vw;height:90vh}.cbars.svelte-f0alx6{transform:translate(22%, 15%)\n  }.chart-txt.svelte-f0alx6{fill:#ffffff;transform:translate(0%, 15%);font-family:sans-serif}@media screen and (max-width: 1000px){.cbars.svelte-f0alx6{transform:translate(25%, 0%) scale(0.5)}.chart-txt.svelte-f0alx6{transform:translate(0%, 0%) scale(0.5)}svg.svelte-f0alx6{width:100vw;height:50vh}}",
  map: null
};
let width = 800;
let height = 600;
const Hbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerHeight;
  let innerWidth;
  let yDomain;
  let yScale;
  let cScale;
  const data = [
    {
      "Ethnic_group": "Asian/ Asian British",
      "couple_parents": 12,
      "single_parents": 5
    },
    {
      "Ethnic_group": "Black/ Black British",
      "couple_parents": 4,
      "single_parents": 9
    },
    {
      "Ethnic_group": "Mixed/ Multiple ethnic groups",
      "couple_parents": 1,
      "single_parents": 3
    },
    {
      "Ethnic_group": "White/ White British",
      "couple_parents": 80,
      "single_parents": 80
    },
    {
      "Ethnic_group": "Other ethnic group",
      "couple_parents": 3,
      "single_parents": 3
    }
  ];
  const margin = {
    top: 20,
    right: 20,
    left: 120,
    bottom: 20
  };
  $$result.css.add(css$4);
  innerHeight = height - margin.top - margin.bottom;
  innerWidth = width - margin.left - margin.right;
  data.map(function(d) {
    return d.couple_parents;
  });
  data.map(function(d) {
    return d.single_parents;
  });
  yDomain = data.map(function(d) {
    return d.Ethnic_group;
  });
  yScale = scaleBand().domain(yDomain).range([0, innerHeight]).padding(0.1);
  cScale = scaleLinear().domain([
    0,
    max(data, function(d) {
      return d.couple_parents;
    })
  ]).range([0, innerWidth]);
  scaleLinear().domain([
    0,
    max(data, function(d) {
      return d.single_parents;
    })
  ]).range([0, innerWidth]);
  return `${escape(console.log(data))} <svg class="hbar svelte-f0alx6">${each(data, (d) => {
    return `<text class="chart-txt svelte-f0alx6" text-anchor="start" x="0" dy=".3em"${add_attribute("y", yScale(d.Ethnic_group) + yScale.bandwidth() / 2, 0)}>${escape(d.Ethnic_group)}</text> <rect class="cbars svelte-f0alx6"${add_attribute("id", d.Ethnic_group, 0)} x="0"${add_attribute("y", yScale(d.Ethnic_group), 0)}${add_attribute("width", cScale(d.couple_parents), 0)}${add_attribute("height", yScale.bandwidth() / 2, 0)} fill="#ee3423"></rect> <rect class="cbars svelte-f0alx6"${add_attribute("id", d.Ethnic_group, 0)} x="0"${add_attribute("y", yScale(d.Ethnic_group) + yScale.bandwidth() / 2, 0)}${add_attribute("width", cScale(d.single_parents), 0)}${add_attribute("height", yScale.bandwidth() / 2, 0)} fill="#2f9744"></rect>`;
  })}</svg>`;
});
const pgrid_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "svg.svelte-1saeqhq{width:8vw;height:25vh;fill:#ee3423}.sqre.svelte-1saeqhq{display:flex;flex-wrap:wrap}.mother.svelte-1saeqhq{fill:#ee3423;transform:scale(1.2)\n  }.farther.svelte-1saeqhq{fill:#2f9744;transform:scale(1.2)\n  }@media screen and (max-width: 1000px){svg.svelte-1saeqhq{width:20vw;height:10vh}.mother.svelte-1saeqhq{transform:scale(0.5)\n    }.farther.svelte-1saeqhq{transform:scale(0.5)\n    }}",
  map: null
};
const Pgrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data = [
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "mother" },
    { "role": "farther" }
  ];
  $$result.css.add(css$3);
  return `<div class="sqre svelte-1saeqhq">${each(data, (d) => {
    return `<svg class="svelte-1saeqhq"><g><path class="${escape(null_to_empty(d.role), true) + " svelte-1saeqhq"}" d="M52.65,125.2h19.9c3.3,0,6-2.7,6-6V86.301h3.399c3.301,0,6-2.701,6-6V43.2c0-3.3-2.699-6-6-6H43.25c-3.3,0-6,2.7-6,6
        		v37.101c0,3.299,2.7,6,6,6h3.4V119.2C46.65,122.5,49.25,125.2,52.65,125.2z"></path><circle class="${escape(null_to_empty(d.role), true) + " svelte-1saeqhq"}" cx="62.55" cy="15.7" r="15.7"></circle></g></svg>`;
  })}</div>`;
});
const family_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".facts-container.svelte-1pp1l63 .fact.svelte-1pp1l63{display:flex;align-items:center;width:100vw;height:100vh}.facts-container.svelte-1pp1l63 .wrapper.svelte-1pp1l63{height:100vh;background-color:#000000}.fact.svelte-1pp1l63.svelte-1pp1l63{display:flex;margin:auto}.fact.svelte-1pp1l63 article.svelte-1pp1l63{flex-basis:60%;margin-left:15%;background-color:#000000}.fact.svelte-1pp1l63 .fact-img.svelte-1pp1l63{flex-basis:40%;max-width:50vw;height:auto}circle.svelte-1pp1l63.svelte-1pp1l63{fill:#ffffff}h1.svelte-1pp1l63.svelte-1pp1l63{flex-basis:50%;font-family:sans-serif;font-size:5em;color:#ffffff;margin-left:15%}svg.svelte-1pp1l63.svelte-1pp1l63{width:50vw;height:100vh}.st1.svelte-1pp1l63.svelte-1pp1l63{fill:#ffffff;transform:translate(40%, 35%) scale(0.5)}p.svelte-1pp1l63.svelte-1pp1l63{color:#ffffff;font-size:2rem;font-family:sans-serif\n  }span.svelte-1pp1l63.svelte-1pp1l63{background-image:linear-gradient(yellow, yellow);background-repeat:no-repeat;color:#000000}@media screen and (max-width: 1000px){.facts-container.svelte-1pp1l63 .fact.svelte-1pp1l63{flex-direction:column;align-items:center;width:100vw;height:auto}.fact.svelte-1pp1l63 article.svelte-1pp1l63{flex-basis:50%;width:100vw;margin:5%;background-color:#000000}.fact.svelte-1pp1l63 .fact-img.svelte-1pp1l63{flex-basis:50%;max-width:100vw;height:auto}.fact.svelte-1pp1l63.svelte-1pp1l63{flex-direction:column}h1.svelte-1pp1l63.svelte-1pp1l63{font-size:2.5em;margin:auto}svg.svelte-1pp1l63.svelte-1pp1l63{width:100vw;height:50vh}.st1.svelte-1pp1l63.svelte-1pp1l63{transform:translate(40%, 35%) scale(0.25)}p.svelte-1pp1l63.svelte-1pp1l63{font-size:1.5rem;margin:auto}}",
  map: null
};
const Family = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="facts-container svelte-1pp1l63"><div class="wrapper svelte-1pp1l63"><div class="fact svelte-1pp1l63" data-svelte-h="svelte-1019db9"><article class="fact-text svelte-1pp1l63"><h1 class="c-title svelte-1pp1l63">The State of families in the UK</h1></article> <div class="fact-img svelte-1pp1l63"><svg class="svelte-1pp1l63"></svg></div></div> <div class="fact svelte-1pp1l63" data-svelte-h="svelte-11ihmcv"><article class="fact-text svelte-1pp1l63"><p class="svelte-1pp1l63">As of 2022 there are <span class="svelte-1pp1l63">19.4 Million families<span class="svelte-1pp1l63">in the UK</span></span></p></article> <div class="fact-img svelte-1pp1l63"><svg class="svelte-1pp1l63"><g><circle cx="50%" cy="50%" r="50px" class="svelte-1pp1l63"></circle></g></svg></div></div> <div class="fact svelte-1pp1l63" data-svelte-h="svelte-1o0zand"><article class="fact-text svelte-1pp1l63"><p class="svelte-1pp1l63">Out of that 19.4 million 15% of them are single-parent house holds</p> <p class="svelte-1pp1l63">That means we have around <span class="svelte-1pp1l63">2.9 Million single parent families</span> in the UK</p></article> <div class="fact-img svelte-1pp1l63"><svg class="svelte-1pp1l63"><g><path class="st1 svelte-1pp1l63" d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"></path></g></svg></div></div> <div class="fact svelte-1pp1l63"><article class="fact-text svelte-1pp1l63" data-svelte-h="svelte-bpo26f"><p class="svelte-1pp1l63">Let&#39;s dig into this a bit more:</p> <p class="svelte-1pp1l63"><span class="svelte-1pp1l63">Less than 1% of single parents are teenagers</span>, and this demographic continues to decline</p></article> <div class="fact-img svelte-1pp1l63">${validate_component(Vbar, "Vbar").$$render($$result, {}, {}, {})}</div></div> <div class="fact svelte-1pp1l63"><article class="fact-text svelte-1pp1l63" data-svelte-h="svelte-3gf9u"><p class="svelte-1pp1l63">A smaller proportion of single parents tend to be from an Asian/Asian British background compared to couple parents (5% vs. 12%).</p> <p class="svelte-1pp1l63">However, <span class="svelte-1pp1l63">a higher proportion of single parents tend to be from a Black/Black British (9%)</span> or Mixed/Multiple (3%) ethnic backgrounds compared to couple parents (4% and 1% respectively).</p></article> <div class="fact-img svelte-1pp1l63">${validate_component(Hbar, "Hbar").$$render($$result, {}, {}, {})}</div></div> <div class="fact svelte-1pp1l63"><article class="fact-text svelte-1pp1l63" data-svelte-h="svelte-1t5ppm7"><p class="svelte-1pp1l63">But regarless of race or creed, one overaching truth remains</p> <p class="svelte-1pp1l63"><span class="svelte-1pp1l63">9 out of 10 singe parents are mothers</span></p></article> <div class="fact-img svelte-1pp1l63">${validate_component(Pgrid, "Pgrid").$$render($$result, {}, {}, {})}</div></div> <div class="fact svelte-1pp1l63" data-svelte-h="svelte-1t92ulf"><article class="fact-text svelte-1pp1l63"><p class="svelte-1pp1l63">Whether in a single family or multiparent household  mothers play a vital role in the family unit from carrying and giving birth, to raising and providing a safe environment to discipling and giving them access to education, fathers play a role too but remember the theme of the month...</p></article> <div class="fact-img svelte-1pp1l63"></div></div></div></div>`;
});
const pub_intro_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.t-container.svelte-1dfe6f3.svelte-1dfe6f3{display:flex;width:100vw;align-items:center;justify-content:center;flex-direction:column;text-align:justify;margin:20px auto;font-family:"helvetica";background-color:#ffd502}.text-block.svelte-1dfe6f3.svelte-1dfe6f3{padding:20px 40px 0px;max-width:700px}.text-block.svelte-1dfe6f3 h1.svelte-1dfe6f3{color:#2f9744;text-transform:uppercase}.text-block.svelte-1dfe6f3 h2.svelte-1dfe6f3{text-align:center;background-color:#000000;color:#ffffff;margin-left:15%;margin-right:15%;padding-top:2%;padding-bottom:2%;font-size:5rem}.chart-block.svelte-1dfe6f3.svelte-1dfe6f3{padding:20px 40px 0px;max-width:700px}.chart-block.svelte-1dfe6f3 h1.svelte-1dfe6f3{text-align:left;color:#2f9744;text-transform:uppercase;font-size:2rem}',
  map: null
};
const Pub_intro = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let people;
  $$result.css.add(css$1);
  return `<div class="t-container svelte-1dfe6f3"><div class="text-block svelte-1dfe6f3" data-svelte-h="svelte-1wbrv14"><h1 class="svelte-1dfe6f3">To Our Sisters</h1> <p>It&#39;s an opportunity to shout out the amazing work done by amazing women in the community, but also a chance hear from real people the how the role of a mother reflects in the lives of their children...from the children&#39;s persepective. When doing this I did involve all age groups as I believe we are all a child to someone, but also curious to see how view points differ as you grow up and live in different seasons of your life</p></div> <div class="text-block svelte-1dfe6f3"><p data-svelte-h="svelte-afruv8">So I surveyed</p> <h2 class="svelte-1dfe6f3">${escape(people)} people</h2> <p data-svelte-h="svelte-8i0119">All in different communities from both single parent and couple parent house holds to see the impact of their mother in their life. I asked them 3 questions:</p> <p data-svelte-h="svelte-ebsjmp">Using words appointed to being a mother from the internet, what 3 words best describle your mother?</p> <p data-svelte-h="svelte-1dcqhej">On a scale of 1(negative) - 5(positive), how would rate the impact of your mum in your life</p> <p data-svelte-h="svelte-gk7xto">Write a quick lesson learned from your mum</p> <p data-svelte-h="svelte-8xhshp"></p></div> <div class="text-block svelte-1dfe6f3" data-svelte-h="svelte-y7kg84"><h1 class="svelte-1dfe6f3">Breaking down the respondents</h1> <p>Before we get into what the people are saying it&#39;s important to get a good idea about who is actually responding here to give you a better context to our responses</p> <h2 class="svelte-1dfe6f3">Comming Soon</h2> </div> <div class="chart-block svelte-1dfe6f3" data-svelte-h="svelte-19imomh"><h1 class="svelte-1dfe6f3">Breaking down the responses by ethnic background we see:</h1> <h2>Comming Soon</h2></div> <div class="chart-block svelte-1dfe6f3" data-svelte-h="svelte-1096573"><h1 class="svelte-1dfe6f3">Breaking down the responses by age we see:</h1> <h2>Comming Soon</h2></div> <div class="chart-block svelte-1dfe6f3" data-svelte-h="svelte-182v6p6"><h1 class="svelte-1dfe6f3">Breaking down the response by gender we see:</h1> <h2>Comming Soon</h2></div> <div class="chart-block svelte-1dfe6f3" data-svelte-h="svelte-d8m381"><h1 class="svelte-1dfe6f3">And finally breaking down the audience by location we see:</h1> <h2>Comming Soon</h2></div></div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".intro-container.svelte-w1k6o6.svelte-w1k6o6{display:flex;width:100vw;height:100vh;flex-direction:row;background-color:#000000;margin:auto;padding:0%}.title-img.svelte-w1k6o6.svelte-w1k6o6{position:relative;height:100vh}.title-text.svelte-w1k6o6.svelte-w1k6o6{position:absolute;display:flex;flex-direction:column;justify-content:flex-start;transform:translate(20vw, 40vh);margin:auto}.title-text.svelte-w1k6o6 h1.svelte-w1k6o6{flex:40%;font-family:sans-serif;font-size:10em;align-self:center;margin:0%;color:#ffd502\n}.title-text.svelte-w1k6o6 p.svelte-w1k6o6{font-family:sans-serif;font-size:2em;align-self:center;color:#ffffff}@media screen and (max-width: 1000px){.title-text.svelte-w1k6o6.svelte-w1k6o6{transform:translate(0vw, 0vh)}.title-text.svelte-w1k6o6 h1.svelte-w1k6o6{font-size:5em;flex:10%}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="Page-container"><div class="intro-container svelte-w1k6o6"><div class="title-img svelte-w1k6o6">${validate_component(Wm_img, "WMimg").$$render($$result, {}, {}, {})}</div> <div class="title-text svelte-w1k6o6" data-svelte-h="svelte-4mhht0"><h1 class="svelte-w1k6o6">To Our Mothers</h1> <p class="svelte-w1k6o6">Reflecting on Motherhood for BHM 2023</p></div></div> ${validate_component(BHM_intro, "BHM").$$render($$result, {}, {}, {})} ${validate_component(Sheroes, "She").$$render($$result, {}, {}, {})} ${validate_component(Family, "Fam").$$render($$result, {}, {}, {})} ${validate_component(Pub_intro, "Pintro").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
