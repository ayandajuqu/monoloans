<script lang="ts">
  import { Card, Avatar, Rating } from 'flowbite-svelte';
  import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from 'flowbite-svelte-icons';
  
  
  export let image1: string='../../public/favicon.png'
  export let title: string = "Ayanda Juqu";
  export let description: string = "bbbbbbbbbbbbbbbb fghjkllfgh wtghvnfim wbtngimyh,o bluh blhu bluh bluh bhlu bluh blhu bhlujb bhnhmhujnb  urpbiylun bjhunjhn ";

</script>

<Card class="w-100 h-100 rounded-2xl bg-indigo-200 border border-blue-700 mt-10 ml-20 hover:bg-lime-200 hover:border-0 transition duration-500 hover:-translate-y-4">

  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src={image1} class="mb-4" />
    <Rating id="example-3" total={5} rating={5} iconFillColor='#1565c0' iconStrokeColor='#1565c0'/>
    <h5 class="mt-4 mb-3 text-2xl font-bold tracking-tight text-blue-700 ">{title}</h5>
    <p class="mb-10 text-base font-semibold text-blue-700 ">{description}</p>
  </div>

 
</Card>