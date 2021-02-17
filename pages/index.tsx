import React from 'react';
import Layout from '../components/Layout';
// import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900 ">
        Construa sites modernos com agilidade usando Tailwind CSS
      </h1>

      <div className="grid w-full grid-cols-1 grid-rows-3">
        <div className="relative">
          <motion.img src="/img/nextjs.svg" width={200} height={100} />
        </div>
      </div>
    </Layout>
  );
}
