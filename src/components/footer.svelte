<script>
    import { Footer, FooterCopyright, FooterLinkGroup, FooterBrand, FooterLink } from 'flowbite-svelte';
  </script>
  
  <Footer footerType="logo" class="bg-blue-900">
    <div class="sm:flex sm:items-center sm:justify-between">
      <FooterBrand href="https://flowbite.com" src="/images/flowbite-svelte-icon-logo.svg" alt="Flowbite Logo" name="Flowbite" />
      <FooterLinkGroup ulClass="flex flex-wrap items-center mb-6 text-sm text-lime-200 sm:mb-0 ">
        <FooterLink href="/">About</FooterLink>
        <FooterLink href="/">Privacy Policy</FooterLink>
        <FooterLink href="/">Licensing</FooterLink>
        <FooterLink href="/">Contact</FooterLink>
      </FooterLinkGroup>
    </div>
    <hr class="my-6 border-lime-200 sm:mx-auto " />
    <FooterCopyright href="/" by="Flowbite™" />
  </Footer>