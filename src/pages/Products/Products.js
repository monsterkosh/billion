import React from 'react';
import InfoSection from '../../components/InfoSection/InfoSection';
import { homeObjFour, homeObjThree, homeObjTwo } from './Data';
import { Pricing } from '../../components';

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
