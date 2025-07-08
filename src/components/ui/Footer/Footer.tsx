import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      Mengus - Formation Orsys 2025
    </div>
  );
}

export default Footer;
