import Image from 'next/image';
import Link from 'next/link';
const Header: React.FC = () => {
  return (
    <header className="flex justify-center items-center py-2 md:justify-between md:py-4">
      <Image src="/img/logo.svg" alt="Logo" width={155} height={33} />

      <nav className="hidden md:block space-x-8">
        <Link href="/nextjs">
          <a className="tracking-wide hover:text-gray-300">NextJS</a>
        </Link>
        <Link href="/tailwind">
          <a className="tracking-wide hover:text-gray-300">Tailwind</a>
        </Link>
        <Link href="/framermotion">
          <a className="tracking-wide hover:text-gray-300">Framer Motion</a>
        </Link>
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

// tracking-wide -> letter-spacing
// hover:text-gray-300
