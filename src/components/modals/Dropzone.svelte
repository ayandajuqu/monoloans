<script>
  // @ts-nocheck
  
  import { Dropzone } from 'flowbite-svelte';
  
  /**
   * @type {any[]}
   */
  let value = [];
  let errorMessage = '';
  
  const dropHandle = (event) => {
    event.preventDefault();
    errorMessage = ''; // reset the error message
    const newFiles = [];
  
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          if (file.type === 'application/pdf') {
            newFiles.push(file.name);
          } else {
            errorMessage = 'Only PDF files are allowed!';
          }
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file) => {
        if (file.type === 'application/pdf') {
          newFiles.push(file.name);
        } else {
          errorMessage = 'Only PDF files are allowed!';
        }
      });
    }
  
    // Add the new files to the existing ones
    value = [...value, ...newFiles];
  };
  
  const handleChange = (event) => {
    const files = event.target.files;
    errorMessage = ''; // reset the error message
  
    if (files.length > 0) {
      const newFiles = [];
      [...files].forEach((file) => {
        if (file.type === 'application/pdf') {
          newFiles.push(file.name);
        } else {
          errorMessage = 'Only PDF files are allowed!';
        }
      });
  
      // Add the new files to the existing ones
      value = [...value, ...newFiles];
    }
  };
  
  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = files.join(', ');
    if (concat.length > 40) concat = concat.slice(0, 40) + '...';
    return concat;
  };
  </script>
  
  <Dropzone
    id="dropzone"
    on:drop={dropHandle}
    on:dragover={(event) => event.preventDefault()}
    on:change={handleChange} 
    accept="application/pdf"
    class="w-400px h-400px"
  >
    <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" /></svg>
    
    {#if value.length === 0}
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs text-gray-500 dark:text-gray-400">Only PDF files allowed</p>
    {:else}
      <p>{showFiles(value)}</p>
    {/if}
  
    {#if errorMessage}
      <p class="text-red-500 text-sm mt-2">{errorMessage}</p>
    {/if}
  </Dropzone>
  