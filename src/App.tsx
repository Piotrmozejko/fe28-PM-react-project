import React, { useState } from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, { ButtonType } from './Components/Button/';
import Title from './Components/Title';

const Tabs_Name = [
  {
    key: 'all',
    title: (
      <Button
        type={ButtonType.Tabs}
        title={'All'}
        onClick={() => {
          alert('all');
        }}
        disabled={false}
      />
    ),
  },
  {
    key: 'my_favorites',
    title: (
      <Button
        type={ButtonType.Tabs}
        title={'My favorites'}
        onClick={() => alert('My favorites')}
        disabled={false}
      />
    ),
  },
  {
    key: 'popular',
    title: (
      <Button
        type={ButtonType.Tabs}
        title={'Popular'}
        onClick={() => alert('Popular')}
        disabled={true}
      />
    ),
  },
];
function App() {
  const [isOpened, setOpened] = useState(false);
  return (
    <div className={styles.app}>
      <Button
        type={ButtonType.Primary}
        title={'Primary'}
        onClick={() => alert('aaaa')}
        disabled={true}
      />
      <Button
        type={ButtonType.Primary}
        title={'Primary'}
        onClick={() => alert(ButtonType.Primary)}
      />
      <Button
        type={ButtonType.Secondary}
        title={'Secondary'}
        onClick={() => alert('aaaa')}
      />
      <Button
        type={ButtonType.Secondary}
        title={'Secondary'}
        onClick={() => alert('aaaa')}
        disabled={true}
      />
      <Button
        type={ButtonType.Error}
        title={'Error'}
        onClick={() => alert('aaaa')}
      />
      <Button
        type={ButtonType.Error}
        title={'Error'}
        onClick={() => alert('aaaa')}
        disabled={true}
      />

      <Title text={'Tabs'} className={'text'} />
      <ul className={styles.alltabs}>
        {Tabs_Name.map((tab: { key: string; title: any }) => (
          <li key={tab.key}> {tab.title} </li>
        ))}
      </ul>
      <div className={styles.BurgerMenu} onClick={() => setOpened(!isOpened)}>
        {isOpened ? 'X' : '='}
      </div>
      {isOpened && <Title className="BurgerMenuItem" text={'Sing in'} />}
      {isOpened && <Title className="BurgerMenuItem" text={'Home'} />}
      {isOpened && <Title className="BurgerMenuItem" text={'Add Post'} />}
    </div>
  );
}

export default App;
