import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center py-2 md:justify-between md:py-4">
      <Image src="/img/logo.svg" alt="Logo" width={155} height={33} />

      <nav className="hidden md:block space-x-8">
        <a>NextJS</a>
        <a>Tailwind</a>
        <a>Framer Motion</a>
      </nav>
    </header>
  );
};
export default Header;

// mobile first ...
// <header className="flex justify-center items-center py-2 md:justify-between md:py-4">

// flex, justify-center, items-center -> display:flex, justify-content:center, align-items:center

// py-2 -> padding top-bottom 8px | 0.5 rem
// py-4 -> padding top-bottom 16px | 1 rem

// md:justify-between md:py-4 -> em tela média ou maior,

//<nav className="hidden md:block space-x-8">

// hidden / block -> display
// space-x -> margin left-right
