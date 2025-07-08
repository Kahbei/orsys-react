import React, { lazy, Suspense } from 'react';

const LazyFlexHorizontalFirstGrow = lazy(() => import('./FlexHorizontalFirstGrow'));

const FlexHorizontalFirstGrow = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFlexHorizontalFirstGrow {...props} />
  </Suspense>
);

export default FlexHorizontalFirstGrow;
