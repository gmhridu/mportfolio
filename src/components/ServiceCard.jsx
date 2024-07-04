import { motion } from 'framer-motion';
import React from 'react';
import { FiCodesandbox } from 'react-icons/fi';
import { HiOutlineCode } from 'react-icons/hi';
import { SiReact } from 'react-icons/si';

const ServiceCard = ({service, details, index}) => {
    return (
        <motion.div
        whileInView={{opacity: 1, x:0}}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1.5, delay: 0.5}}
        className="hover:text-primary hover:border-primary border-[1px] border-accent p-6 rounded-2xl 
      "
      >
        {index === 0 && <HiOutlineCode className='text-[40px]' />}
        {index === 1 && <SiReact className='text-[40px]' />}
        {index === 2 && <FiCodesandbox className='text-[40px]' />}
        <h1 className="lg:text-2xl md:text-2xl text-xl mt-3 lg:font-normal md:font-normal font-bold ">
          {service}
        </h1>
        <p className="text-accent mt-3 text-sm">{details}</p>
      </motion.div>
    );
};

export default ServiceCard;