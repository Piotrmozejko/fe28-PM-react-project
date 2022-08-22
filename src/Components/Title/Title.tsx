import React, { FC } from 'react';
// @ts-ignore
import styles from './Title.module.css';

type TitleType = {
  text: string;
  className?: string;
};
const Title: FC<TitleType> = ({ text, className }) => {
  return (
    <div className={`${styles.title} ${styles[className] || ''}`}>{text} </div>
  );
};
export default Title;
