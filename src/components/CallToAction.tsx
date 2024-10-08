'use client'
import helixImage from '../assets/images/helix2.png';
import emojiStarImage from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export const CallToAction = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  });

  useEffect(() => {
    scrollYProgress.on('change', (value) => console.log('value', value));
  }, [scrollYProgress]);

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <div id='Contact' className="bg-black text-white py-[72px] sm:py-24 text-center overflow-x-clip" ref={containerRef}>
      <div className="container max-w-2xl relative">

        <motion.div
          style={{ translateY }}
        >
          <Image 
            src={helixImage} 
            className='absolute top-6 left-[calc(100%+36px)]' 
            alt='helix' 
          />
        </motion.div>

        <motion.div
          style={{ translateY }}
        >
        <Image 
          src={emojiStarImage} 
          className='absolute -top-[120px] right-[calc(100%+24px)]' 
          alt='emoji star' 
        />
        </motion.div>

        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl mt-4">
          Accede a tu software profesional hoy mismo
        </h2>
        
        <p className="text-xl text-white/70 mt-5">
          Descubre cómo un <span className='text-purple-600'> software personalizado </span> puede hacer crecer tu negocio y captar más clientes. Déjanos ayudarte a construir tu presencia online con un diseño profesional y funcional. 
        </p>
        
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input 
            type="email" 
            id="email" 
            placeholder="your@email.com" 
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1" 
            required
            aria-invalid="false"
          />
          <Link 
            href='https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'
            type="submit" 
            className="bg-white text-black h-12 rounded-lg px-5 font-medium flex-1 sm:w-auto hover:bg-white/80 hover:text-black transition-transform hover:scale-105 py-3 "
          >
            Contáctanos
          </Link>
        </form>
      
      </div>
    </div>
  );
};
