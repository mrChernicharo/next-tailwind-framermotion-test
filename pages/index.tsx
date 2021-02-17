import React from 'react';
import Layout from '../components/Layout';
// import Image from 'next/image';
import { motion } from 'framer-motion';

interface ICardProps {
  imgPath: string;
}

const Card: React.FC<ICardProps> = ({ imgPath }: ICardProps) => {
  return (
    <div className="relative h-20 md:h-40 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition">
      <motion.img src={imgPath} className="w-full h-full" />
    </div>
  );
};

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900 ">
        Construa sites modernos com agilidade usando Tailwind CSS
      </h1>

      <div className="mt-10 md:mt-24 grid w-full grid-cols-1 grid-rows-3">
        <Card imgPath="/img/nextjs.svg" />
        <Card imgPath="/img/tailwind.svg" />
        <Card imgPath="/img/framermotion.svg" />
      </div>
    </Layout>
  );
}
