import React from 'react';
import styles from './FlexVerticalThirGrow.module.css';

interface IFlexVerticalThirGrowProps {
  children: Array<React.ReactElement> | React.ReactElement;
  style?: object
}

const FlexVerticalThirGrow: React.FC<IFlexVerticalThirGrowProps> = ({ children, style }) => {
  return (
    <div className={styles.FlexVerticalThirGrow} data-testid="FlexVerticalThirGrow" style={style}>
      { children }
    </div>
  );
}

export default FlexVerticalThirGrow;
