import React, { FC, useState } from 'react';
// @ts-ignore
import styles from './Card.module.css';
import Title from '../Title';
import Button, { ButtonType } from '../Button';

type CardType = {
  className?: string;
  id: string;
  image?: string;
  text: string;
  date: string;
  lesson_num: string;
  title: string;
  author: string;
};

const Card: FC<CardType> = ({
  id,
  className,
  image,
  date,
  title,
  text,
  author,
  lesson_num,
}) => {
  const [islike, setlike] = useState(1);

  const [isOpened, setOpened] = useState(false);
  return (
    <div id={id} className={`${styles.card} ${styles[className] || ''}`}>
      <div className={`${styles.cardItem}`}>
        <div className={`${styles.cardItemText}`}>
          <div className={`${styles.cardDate}`}>{date}</div>
          <Title text={title} className={'cardTitle'} />
          <div className={`${styles.cardText}`}>{text}</div>
          <div className={`${styles.cardAutorLesson}`}>
            <div>{author}</div>
            <div>{`Урок номер ${lesson_num}`}</div>
          </div>
        </div>
        <img
          className={`${styles.cardImg}`}
          src={require('../../img/Homer.png')}
          alt="cartoon"
        />
      </div>
      <div className={`${styles.cardIcon}`}>
        <div className={`${styles.cardIconRight}`}>
          <img
            src={require('../../img/Icon-Thumbs-Up.png')}
            alt="yes"
            onClick={() => setlike(islike + 1)}
          />
          <Title text={`${islike}`} className={'cardTitle'} />
          <img
            src={require('../../img/Icon-Thumbs-Down.png')}
            alt="no"
            onClick={() => setlike(islike - 1)}
          />
        </div>
        <div className={`${styles.cardIconleft}`}>
          <img src={require('../../img/Bookmark.png')} alt="no" />
          <img
            src={require('../../img/More-Horizontal.png')}
            alt="no"
            onClick={() => setOpened(!isOpened)}
          />
          {isOpened && (
            <div className={styles.menuCard}>
              <Button
                type={ButtonType.BurgerItem}
                title={'Edit'}
                onClick={() => alert('Edit')}
              />
              <Button
                type={ButtonType.BurgerItem}
                title={'Delete'}
                onClick={() => alert('Delete')}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Card;
