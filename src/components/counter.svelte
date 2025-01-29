<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import gsap from "gsap";
  
    export let targetNumber = 100;
    export let label = "";
  
    let counterRef;
  
    onMount(() => {
      gsap.to(counterRef, {
        innerText: targetNumber,
        duration: 2,
        ease: "power1.out",
        snap: { innerText: 1 },
      });
    });
  </script>
  
  <div class="flex flex-col items-center">
    <span bind:this={counterRef} class="text-8xl font-extrabold text-lime-200">0</span>
    {#if label}
      <h5 class="text-lg font-extrabold text-lime-200">{label} </h5>
    {/if}
  </div>
  