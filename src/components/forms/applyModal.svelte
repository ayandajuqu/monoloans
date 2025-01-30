<script>
// @ts-nocheck

  import { Button, Label, Input, Fileupload, Helper, Select } from 'flowbite-svelte';
  import Dropzone from '../modals/Dropzone.svelte';
  import ThankYou from '../modals/thankYou.svelte';

  let selected;
  let formModal=false;
  let loanTypes = [
    { value: 'pl', name: 'Personal Loan' },
    { value: 'sl', name: 'Student Loan' },
    
  ];

  let formData = {
    firstName: '',
    lastName: '',
    email: '',
    identification: '',
    profileImage: null,
    idCopy: null
  };

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Data:', formData);
    formModal=true;

    //clear forms
    formData = {
    firstName: '',
    lastName: '',
    email: '',
    identification: '',
    profileImage: null,
    idCopy: null
  };

  selected = null;
  }
</script>

<ThankYou bind:open={formModal}/>

<section class="bg-indigo-200 p-8 rounded-lg w-full max-w-2xl mx-auto mt-8">
  <form class="flex flex-col space-y-6" on:submit={handleSubmit}>
    <h3 class="text-blue-900 font-extrabold text-2xl text-left mb-2 mt-2 mb-4">Apply for Loan</h3>

    <Label class="space-y-2">
      <h4 class="text-blue-900 font-bold">Full Name (As per ID)</h4>
      <Input 
        type="text" 
        name="firstName" 
        placeholder="John" 
        bind:value={formData.firstName} 
        required 
      />
    </Label>
    
    
    <Label class="space-y-2">
      <h4 class="text-blue-900 font-bold">Email</h4>
      <Input 
        type="email" 
        name="email" 
        placeholder="johndoe@gmail.com" 
        bind:value={formData.email} 
        required 
      />
    </Label>

    <Label class="space-y-2">
      <h4 class="text-blue-900 font-bold">Choose the type of loan</h4>
      <Select class="mt-2" items={loanTypes} bind:value={selected} required />
    </Label>

    <Label class="space-y-2">
      <h4 class="text-blue-900 font-bold">ID/Passport Number</h4>
      <Input 
        type="number" 
        name="identification" 
        bind:value={formData.identification} 
        required 
        pattern="^\d{13}$"
      />
    </Label>
    
    <Label class="space-y-2">
      <h4 class="text-blue-900 font-bold">Upload a copy of your ID</h4>
      <Dropzone bind:value={formData.idCopy} />
    </Label>
    
    <Button 
      type="submit" 
      class="w-full bg-indigo-200 text-blue-900 border-2 border-blue-900 hover:border-0 hover:text-bold hover:bg-blue-900 hover:text-indigo-200"
    >
      Submit Application
    </Button>
  </form>
</section>
