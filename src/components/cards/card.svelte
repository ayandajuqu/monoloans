<script lang="ts">
    import { Card } from 'flowbite-svelte';
    import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
    
    
    export let title: string = "Need a help in Claim?";
    export let description: string = "bbbbbbbbbbbbbbbb fghjkllfgh wtghvnfim wbtngimyh,o bluh blhu bluh bluh bhlu bluh blhu bhlujb bhnhmhujnb  urpbiylun bjhunjhn ";
    export let linkText: string = "See our guideline";
    export let linkHref: string = "/";
    export let icon = GiftBoxSolid; 
  </script>
  
  <Card class="w-96 h-64 rounded-2xl bg-orange-50 border border-blue-700 mt-20 ml-20 transition duration-500 hover:-translate-y-4">

    <a href={linkHref}>
      <h5 class="mb-3 text-2xl font-bold tracking-tight text-blue-700 ">{title}</h5>
    </a>
    <p class="mb-10 text-base font-normal text-blue-700 ">{description}</p>
    <a href={linkHref} class="inline-flex items-center text-primary-600 hover:underline">
      {linkText}
      <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
    </a>
  </Card>