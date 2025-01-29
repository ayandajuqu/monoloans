
<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, Button } from 'flowbite-svelte';
    import JobApplicationModal from '../modals/jobApplication.svelte';

    let formModal = false;
</script>

    
<JobApplicationModal bind:open={formModal} />
  
  <Table  noborder={true} shadow >
    <TableHead class="bg-indigo-300 px-20 py-20">
      <TableHeadCell>Number</TableHeadCell>
      <TableHeadCell>Job Title</TableHeadCell>
      <TableHeadCell>Date Posted</TableHeadCell>
      <TableHeadCell>Apply</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y shadow w-[500px] h-[500px]" >
      <TableBodyRow class="bg-lime-200 ">
        <TableBodyCell class="text-blue-700 font-extrabold text-6xl">1</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">Operations Manager</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">12-03-2024</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-bold"><Button on:click={() => formModal = true } class="px-8 py-3.5 font-bold rounded-full border-2 border-blue-700 bg-lime-200 text-blue-700 hover:bg-blue-700 hover:text-lime-200">Apply </Button></TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-lime-200">
        <TableBodyCell class="text-blue-700 font-extrabold text-6xl">2</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">Junior Marketing Agent</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">12-03-2024</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-bold"><Button on:click={() => formModal = true} class="px-8 py-3.5 font-bold rounded-full border-2 border-blue-700 bg-lime-200 text-blue-700 hover:bg-blue-700 hover:text-lime-200">Apply </Button></TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-lime-200">
        <TableBodyCell class="text-blue-700 font-extrabold text-6xl">3</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">Senior Software Developer</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-extrabold text-2xl">12-03-2024</TableBodyCell>
        <TableBodyCell class="text-blue-700 font-bold"><Button on:click={() => formModal = true} class="px-8 py-3.5 font-bold rounded-full border-2 border-blue-700 bg-lime-200 text-blue-700 hover:bg-blue-700 hover:text-lime-200">Apply </Button></TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>