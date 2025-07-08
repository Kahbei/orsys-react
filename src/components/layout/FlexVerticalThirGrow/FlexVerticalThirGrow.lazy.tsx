import React, { lazy, Suspense } from 'react';

const LazyFlexVerticalThirGrow = lazy(() => import('./FlexVerticalThirGrow'));

const FlexVerticalThirGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexVerticalThirGrow {...props} />
  </Suspense>
);

export default FlexVerticalThirGrow;
