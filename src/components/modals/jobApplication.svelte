<script>
    import { Button, Modal, Label, Input, Fileupload, Helper } from 'flowbite-svelte';
    export let open = false;
    import Dropzone from './Dropzone.svelte';
  </script>
  
  <Modal bind:open={open} size="md" autoclose={false} class="w-full bg-indigo-200">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="text-blue-700 font-extrabold text-2xl text-left mb-2 mt-10  mb-4">Apply for position</h3>
      <Label class="space-y-2">
        <h4 class="text-blue-700 font-bold">Full Name (As Per ID)</h4>
        <Input type="text" name="name" placeholder="John" required />
      </Label>
      
      <Label class="space-y-2">
        <h4 class="text-blue-700 font-bold">Email</h4>
        <Input type="email" name="email" placeholder="johndoe@gmail.com" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-700 font-bold">ID/Passport Number</h4>
        <Input type="number" name="identification" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-700 font-bold">Upload a copy of your CV</h4>
        <Dropzone/>
      </Label>
      
      <Button type="submit" class="w-full1 bg-indigo-200  font-bold text-blue-700 border-2 border-blue-700 hover:border-0 hover:text-bold hover:bg-lime-200 hover:text-blue-700">Submit Application</Button>
      
    </form>
  </Modal>