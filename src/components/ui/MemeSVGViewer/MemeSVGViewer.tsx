import React, { useEffect, useState } from 'react';
import styles from './MemeSvgViewer.module.css';

interface IMemeSvgViewerProps {
  data: string
}

interface IMemeSvgViewerState {
  value: number
}

const memeSvgViewerInitialState = {value: 0};

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = ({data=""}) => {
  const [state, setstate] = useState<IMemeSvgViewerState>(memeSvgViewerInitialState);
  useEffect(() => {
    return () => {
      // demontage
    };
  }, []);
  

  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer Component {data}
    </div>
  );
}

export default MemeSvgViewer;
