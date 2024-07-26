import React from 'react';
import { TypewriterEffectSmoothDemo } from './ui/typewritereffectdemo';
import { SparklesPreview } from './ui/SparklesPreview';

const Hero = () => {
  return (
    <div className=' pb-20 pt-36'>
      <div>
        <TypewriterEffectSmoothDemo />
      </div>
      <div className='absolute inset-0 z-10'>
        <SparklesPreview />
      </div>
    </div>
  );
};

export default Hero;
