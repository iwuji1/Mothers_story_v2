<script>
  import gsap from 'gsap';
  import { onMount } from 'svelte';
  import Vbar from '$lib/components/vbar.svelte'
  import Hbar from '$lib/components/hbar.svelte'
  import Pgrid from '$lib/components/pgrid.svelte'

  onMount(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      markers:false
    })

    var facts = gsap.utils.toArray('.fact');
    var height = 100 * facts.length;

    let tl = gsap.timeline({
      duration: facts.length,
      scrollTrigger: {
        trigger: ".facts-container",
        start: "top center",
        end: "+="+height+"%",
        scrub: 1,
        id: "facts",
        ease: "power2"
      }
    })

    var pinn = gsap.timeline({
      scrollTrigger: {
        trigger: ".facts-container .wrapper",
        start: "top top",
        end: "+="+height+"%",
        scrub: true,
        pin: ".facts-container .wrapper",
        pinSpacing: true,
        id: "pinning",
        ease: "power2"
      }
    })

    facts.forEach(function(elem, i) {
      gsap.set(elem, {position: "absolute", top: 0});
      console.log(elem.querySelector('.fact-img'), i)

      tl.from(elem.querySelector('.fact-img'), {autoAlpha:0, scale: 0}, i)
      tl.from(elem.querySelector('.fact-text'), {autoAlpha:0, translateY: 100}, i)

      if (i != facts.length-1) {
        tl.to(elem.querySelector('.fact-text'), {autoAlpha:0, translateY:-100}, i+0.75)
        tl.to(elem.querySelector('.fact-img'), {autoAlpha:0, scale:0}, i+ 0.75)
      }
    });
})

</script>

<style>
  .facts-container .fact{
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .facts-container .wrapper {
    height: 100vh;
    background-color: #000000;
  }

  .fact {
    display: flex;
    margin: auto;
  }

  .single-text {
    margin-left: 20%;
    margin-right: 20%;
    text-align: center;
  }

  .fact article {
    flex-basis: 60%;
    margin-left: 15%;
    background-color: #000000;
  }

  .fact .fact-img {
    flex-basis: 40%;
    max-width: 50vw;
    height: auto;
  }

  circle {
    fill: #ffffff;
  }

  h1 {
    flex-basis: 50%;
    font-family: sans-serif;
    font-size: 5em;
    color: #ffffff;
    margin-left: 15%;
  }

  svg {
    width: 50vw;
    height: 100vh;
  }

  .st1 {
    fill: #ffffff;
    transform: translate(40%, 35%) scale(0.5);
  }

  p {
    color: #ffffff;
    font-size: 2rem;
    font-family: sans-serif
  }

  span {
    background-image: linear-gradient(yellow, yellow);
    background-repeat: no-repeat;
    color: #000000;
  }

  @media screen and (max-width: 1000px) {
    .facts-container .fact{
      flex-direction: column;
      align-items: center;
      width: 100vw;
      height: auto;
    }

    .fact article {
      flex-basis: 50%;
      width: 100vw;
      margin: 5%;
      background-color: #000000;
    }

    .fact .fact-img {
      flex-basis: 50%;
      max-width: 100vw;
      height: auto;
    }

    .fact {
      flex-direction: column;
    }

    h1 {
      font-size: 2.5em;
      margin: auto;
    }

    svg {
      width: 100vw;
      height: 50vh;
    }

    .st1 {
      transform: translate(40%, 35%) scale(0.25);
    }

    p {
      font-size: 1.5rem;
      margin: auto;
    }
}

</style>

<div class="facts-container">
  <div class= "wrapper">

    <div class= "fact">
      <article class="fact-text">
        <h1 class="c-title">The State of families in the UK</h1>
      </article>
      <div class="fact-img">
        <svg></svg>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p>As of 2022 there are <span>19.4 Million families<span> in the UK</p>
      </article>
      <div class="fact-img">
        <svg>
          <g><circle cx="50%" cy="50%" r="50px"/></g>
        </svg>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p>Out of that 19.4 million 15% of them are single-parent house holds</p>
        <p>That means we have around <span>2.9 Million single parent families</span> in the UK</p>
      </article>
      <div class="fact-img">
        <svg><g><path class="st1" d="M400 224h-44l-26.12-53.25c-12.5-25.5-35.38-44.25-61.75-51L197 98.63C189.5 96.84 181.1 95.97 174.5 95.97c-20.88 0-41.33 6.81-58.26 19.78L76.5 146.3C68.31 152.5 64.01 162 64.01 171.6c0 17.11 13.67 32.02 32.02 32.02c6.808 0 13.67-2.158 19.47-6.616l39.63-30.38c5.92-4.488 13.01-6.787 19.53-6.787c2.017 0 3.981 .2196 5.841 .6623l14.62 4.25l-37.5 87.5C154.1 260.3 152.5 268.8 152.5 277.2c0 22.09 11.49 43.52 31.51 55.29l85 50.13l-27.5 87.75c-.9875 3.174-1.458 6.388-1.458 9.55c0 13.65 8.757 26.31 22.46 30.58C265.6 511.5 268.9 512 272 512c13.62 0 26.25-8.75 30.5-22.5l31.75-101c1.211-4.278 1.796-8.625 1.796-12.93c0-16.57-8.661-32.51-23.55-41.44l-61.13-36.12l31.25-78.38l20.25 41.5C310.9 277.4 327.9 288 345.1 288H400c17.62 0 32-14.38 32-32C432 238.3 417.6 224 400 224zM288 96c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48S261.5 96 288 96zM129.8 317.5L114.9 352H48c-17.62 0-32 14.38-32 32s14.38 32 32 32h77.5c19.25 0 36.5-11.5 44-29.12l8.875-20.5l-10.75-6.25C150.4 349.9 137.6 334.8 129.8 317.5z"/></g>
        </svg>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p>Let's dig into this a bit more:</p>
        <p><span>Less than 1% of single parents are teenagers</span>, and this demographic continues to decline </p>
      </article>
      <div class="fact-img">
        <Vbar/>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p> A smaller proportion of single parents tend to be from an Asian/Asian British background compared to couple parents (5% vs. 12%).</p>
        <p>However, <span>a higher proportion of single parents tend to be from a Black/Black British (9%)</span> or Mixed/Multiple (3%) ethnic backgrounds compared to couple parents (4% and 1% respectively).</p>
      </article>
      <div class="fact-img">
        <Hbar/>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p> But regarless of race or creed, one overaching truth remains</p>
        <p><span>9 out of 10 singe parents are mothers</span></p>
      </article>
      <div class="fact-img">
        <Pgrid/>
      </div>
    </div>

    <div class= "fact">
      <article class="fact-text">
        <p>Whether in a single family or multiparent household  mothers play a vital role in the family unit from carrying and giving birth, to raising and providing a safe environment to discipling and giving them access to education, fathers play a role too but remember the theme of the month...</p>
      </article>
      <div class="fact-img">
      </div>
    </div>
  </div>
</div>
