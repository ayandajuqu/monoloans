
<script>
    import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from 'flowbite-svelte';
</script>
  
  <Table  shadow divClass='relative overflow-x-auto'>
    <TableHead class="bg-indigo-200 w-500px h-500px">
      <TableHeadCell>Product name</TableHeadCell>
      <TableHeadCell>Color</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
    </TableHead>
    <TableBody tableBodyClass="divide-y shadow w-[500px] h-[500px]" >
      <TableBodyRow class="bg-indigo-200 ">
        <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
        <TableBodyCell>Sliver</TableBodyCell>
        <TableBodyCell>Laptop</TableBodyCell>
        <TableBodyCell>$2999</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-indigo-200">
        <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
        <TableBodyCell>White</TableBodyCell>
        <TableBodyCell>Laptop PC</TableBodyCell>
        <TableBodyCell>$1999</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow class="bg-indigo-200">
        <TableBodyCell>Magic Mouse 2</TableBodyCell>
        <TableBodyCell>Black</TableBodyCell>
        <TableBodyCell>Accessories</TableBodyCell>
        <TableBodyCell>$99</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>