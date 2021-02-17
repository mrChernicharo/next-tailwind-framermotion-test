import React from 'react';
import Layout from '../components/Layout';
// import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ICardProps {
  href: string;
  imgPath: string;
  layoutId: string;
}

const Card: React.FC<ICardProps> = ({ href, imgPath, layoutId }: ICardProps) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
        <motion.img src={imgPath} layoutId={layoutId} className="w-full h-full" />
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900 ">
        Construa sites modernos com agilidade usando Tailwind CSS
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        <Card href={'/nextjs'} imgPath={'/img/nextjs.svg'} layoutId={'nextjs-logo'} />
        <Card
          href={'/tailwind'}
          imgPath={'/img/tailwind.svg'}
          layoutId={'tailwind-logo'}
        />
        <Card
          href={'/framermotion'}
          imgPath={'/img/framermotion.svg'}
          layoutId={'framermotion-logo'}
        />
      </div>
    </Layout>
  );
}
