import React from 'react';
import styles from './FlexHorizontalFirstGrow.module.css';

interface IFlexHorizontalFirstGrowProps {
  children: Array<React.ReactElement> | React.ReactElement;
  style?: object;
}

const FlexHorizontalFirstGrow: React.FC<IFlexHorizontalFirstGrowProps> = ({ children, style }) => {
  return (
    <div className={styles.FlexHorizontalFirstGrow} data-testid="FlexHorizontalFirstGrow" style={style}>
      { children }
    </div>
  );
}

export default FlexHorizontalFirstGrow;
