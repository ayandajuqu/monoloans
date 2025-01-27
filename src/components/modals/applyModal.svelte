<script>
    import { Button, Modal, Label, Input, Fileupload, Helper } from 'flowbite-svelte';
    let formModal = false;
    import Dropzone from './Dropzone.svelte';
  </script>
  
  <Button on:click={() => (formModal = true)}>Form modal</Button>
  
  <Modal bind:open={formModal} size="xs" autoclose={false} class="w-full bg-indigo-200">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="text-blue-900 font-extrabold text-2xl text-left mb-2 mt-10  mb-4">Sign in to our platform</h3>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">First Name</h4>
        <Input type="text" name="name" placeholder="John" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Last Name</h4>
        <Input type="text" name="surname" placeholder="Doe" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Email</h4>
        <Input type="email" name="email" placeholder="johndoe@gmail.com" required />
      </Label>
      <Label for="with_helper" class="pb-2">Upload profile image</Label>
        <Fileupload id="with_helper" class="mb-2" />
        <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">ID/Passport Number</h4>
        <Input type="number" name="identification" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Upload a copy of your ID</h4>
        <Dropzone/>
      </Label>
      
      <Button type="submit" class="w-full1 bg-indigo-200 text-blue-900 border-2 border-blue-900 hover:border-0 hover:text-bold hover:bg-blue-900 hover:text-indigo-200">Submit Application</Button>
      
    </form>
  </Modal>