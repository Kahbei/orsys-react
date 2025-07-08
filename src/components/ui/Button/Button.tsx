import { useEffect, useState } from 'react';
import styles from './Button.module.css';

interface IButtonInterface {
  classTitle: string | Array<string> | string[],
  children: string | React.ReactElement | Array<React.ReactElement>,
  typeBtn: 'button'|'submit'|'reset',
  onBtnClick?():undefined,
}

const Button = ({ classTitle, children, typeBtn, onBtnClick }: IButtonInterface) => {
  const [clicked, setClicked] = useState(false);
  useEffect(() => {
    if (clicked) {
      setTimeout(() => setClicked(false), 300);
    }
  }, [clicked]);
  
  /**
   * Handle the Button HTML class
   * @returns 
   */
  const getClassStyle = (): string => {
    let listClass = styles[classTitle[0]];

    if (classTitle.length > 1) {
      for (const el of classTitle) {
        listClass += ` ${styles[el]}`
      }
    }

    return listClass + (clicked ? ` ${styles["btn-clicked"]}` : "");
  }

  return (
    <button 
      className={ getClassStyle() }
      type={ typeBtn }
      onClick={ 
        () => {
          setClicked(true)

          if (onBtnClick !== undefined) {
            onBtnClick();
          }
        }
      }
    >
      { children }
    </button>
  );
};

export default Button;