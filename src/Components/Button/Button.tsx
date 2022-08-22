import React, { FC } from 'react';
// @ts-ignore
import styles from './Button.module.css';
import { ButtonType, ButtonPropsType, ButtonClassnamesType } from './type';

const BUTTON_TYPE: ButtonClassnamesType = {
  [ButtonType.Primary]: styles.primary,
  [ButtonType.Secondary]: styles.secondary,
  [ButtonType.Error]: styles.error,
  [ButtonType.Tabs]: styles.tabs,
};

const Button: FC<ButtonPropsType> = ({
  title,
  onClick,
  className,
  type,
  disabled,
}) => {
  let classNameDisable;
  if (disabled) {
    let typeDisable = type + 'disabled';
    classNameDisable = styles[typeDisable];
    onClick = () => {};
  }

  return (
    <div
      onClick={onClick}
      className={`${styles.button} ${BUTTON_TYPE[type]} ${classNameDisable} ${
        className || ''
      }`}
    >
      {title}
    </div>
  );
};
export default Button;
