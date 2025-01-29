<script>
  import { Button, Label, Input, Textarea } from 'flowbite-svelte';
  import Popup from "../../components/modals/popup.svelte";
 
 

  let formModal=false;
  
  let textareaprops = {
    id: 'message',
    name: 'message',
    label: 'Your message',
    rows: 4,
    placeholder: 'Write your message...',
  };
  
  // Form data
  let formData = {
    name: '',
    email: '',
    message: ''
  };

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        console.log('Email: '+ formData.email)
        formModal = true; 
        formData = { name: '', email: '', message: '' }; 
      } else {
        console.error('Error:', result.error);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
</script>

<Popup bind:open={formModal}/>

<section class="bg-blue-700 border border-blue-700 p-8 rounded-lg w-full max-w-lg mx-auto mt-2">
  <form class="flex flex-col space-y-6" on:submit={handleSubmit}>
    <h3 class="text-lime-200 font-extrabold text-2xl text-left mb-2">Send Us a Message</h3>
    
    <Label class="space-y-2">
      <h4 class="text-lime-200 font-bold">Full Name</h4>
      <Input 
        type="text" 
        name="name" 
        placeholder="John Doe" 
        bind:value={formData.name} 
        required 
      />
    </Label>
    
    <Label class="space-y-2">
      <h4 class="text-lime-200 font-bold">Email</h4>
      <Input 
        type="email" 
        name="email" 
        placeholder="johndoe@gmail.com" 
        bind:value={formData.email} 
        required 
      />
    </Label>
    
    <Label class="space-y-2">
      <h4 class="text-lime-200 font-bold">Write your message</h4>
      <Textarea 
        {...textareaprops} 
        bind:value={formData.message} 
        required 
      />
    </Label>
    
    <Button 
      type="submit" 
      class="w-full bg-blue-700 text-lime-200 border-2 border-lime-200 hover:border-0 hover:text-bold hover:bg-lime-200 hover:text-blue-700"
    >
      Submit
    </Button>
  </form>
</section>
