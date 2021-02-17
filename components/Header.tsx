import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center py-2 md:py-4">
      <Image src="/img/logo.svg" alt="Logo" width={155} height={33} />
    </header>
  );
};
export default Header;
