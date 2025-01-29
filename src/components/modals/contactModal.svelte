<script>
    import { Button, Modal, Label, Input, Textarea } from 'flowbite-svelte';
    let formModal = false;
    let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Write your message...',
    
  };
  </script>
  

  
  <Modal open={true} size="xs" autoclose={false} class="w-full bg-indigo-200 mt-10 ml-20">
    <form class="flex flex-col space-y-6" action="#">
      <h3 class="text-blue-900 font-extrabold text-2xl text-left mb-2 mt-10  mb-4">Sign in to our platform</h3>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Full Name</h4>
        <Input type="text" name="name" placeholder="John Doe" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Email</h4>
        <Input type="email" name="email" placeholder="johndoe@gmail.com" required />
      </Label>
      <Label class="space-y-2">
        <h4 class="text-blue-900 font-bold">Write your message</h4>
        <Textarea {...textareaprops} required />
      </Label>
      <Button type="submit" class="w-full1 bg-indigo-200 text-blue-900 border-2 border-blue-900 hover:border-0 hover:text-bold hover:bg-blue-900 hover:text-indigo-200">Submit</Button>
      
    </form>
  </Modal>