import React from 'react';
import {SERVICES} from '../constants'
import ServiceCard from './ServiceCard';

const Services = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <div className='my-10'>
                <h2 className='my-20 text-center text-4xl text-neutral-500'>
                My <span className='text-white'>Specializations</span>
                </h2>
            </div>
           <div
        className=" grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 mb-16"
      >
        {SERVICES?.map(({ service, details }, index) => {
          return (
            <ServiceCard
              key={index}
              service={service}
              details={details}
              index={index}
            />
          );
        })}
      </div>  
        </div>
    );
};

export default Services;