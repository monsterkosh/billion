import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjFour } from './Data';
import { Pricing } from '../../components';

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
