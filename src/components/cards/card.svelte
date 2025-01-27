<script lang="ts">
    import { Card } from 'flowbite-svelte';
    import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
    
    
    export let title: string = "Need a help in Claim?";
    export let description: string = "bbbbbbbbbbbbbbbb fghjkllfgh wtghvnfim wbtngimyh,o bluh blhu bluh bluh bhlu bluh blhu bhlujb bhnhmhujnb  urpbiylun bjhunjhn ";
    export let linkText: string = "See our guideline";
    export let linkHref: string = "/";
    export let icon = GiftBoxSolid; 
  </script>
  
  <Card class="bg-orange-50 border-2 border-blue-700 mt-10 p-10 transition duration-500 hover:scale-125">

    <a href={linkHref}>
      <h5 class="mb-3 text-xl font-semibold tracking-tight text-blue-700 ">{title}</h5>
    </a>
    <p class="mb-10 text-sm font-normal text-blue-700 ">{description}</p>
    <a href={linkHref} class="inline-flex items-center text-primary-600 hover:underline">
      {linkText}
      <ArrowUpRightFromSquareOutline class="w-4 h-4 ms-2.5" />
    </a>
  </Card>