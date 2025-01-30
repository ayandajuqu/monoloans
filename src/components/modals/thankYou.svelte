<script>
    import {  Modal } from 'flowbite-svelte';
    import { GiftBoxSolid } from 'flowbite-svelte-icons';
    export let open = false;
  </script>
  
  
  
  <Modal bind:open={open} size="md" autoclose class="bg-orange-50">
    <div class="text-center">
      <GiftBoxSolid class="mx-auto mb-4 text-blue-700 w-12 h-12 " />
      <h3 class="mb-5 text-2xl font-extrabold text-blue-700">Loan Application Sent Successfully!</h3>
      <p class="mb-2 text-lg font-semibold text-blue-700">A confirmation email has been sent to you.<br/>Our consultants will look into your application soon!</p>
      
    </div>
  </Modal>