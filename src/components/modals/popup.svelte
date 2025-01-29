<script>
    import { Button, Modal } from 'flowbite-svelte';
    import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
    let popupModal = false;
  </script>
  
  <Button on:click={() => (popupModal = true)}>Pop-up modal</Button>
  
  <Modal bind:open={popupModal} size="xs" autoclose>
    <div class="text-center">
      <ExclamationCircleOutline class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" />
      <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to proceed with the submission?</h3>
      <Button color="green" class="me-2">Yes, I'm sure</Button>
      <Button color="alternative">No, cancel</Button>
    </div>
  </Modal>