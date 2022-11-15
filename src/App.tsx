import React, { useState } from 'react';
// @ts-ignore
import styles from './App.module.css';
import Button, { ButtonType } from './Components/Button/';
import Title from './Components/Title';
import Card from './Components/Card';
import Input from './Components/Input';

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
  const [isValueInput, setValueInput] = useState<string>('');
  const onChange = (inputValue: string) => {
    setValueInput(inputValue);
  };
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

      <div className={styles.burgerHeader}>
        <div className={styles.Burger} onClick={() => setOpened(!isOpened)}>
          {isOpened ? 'X' : '='}
          {isOpened && (
            <div className={styles.BurgerMenu}>
              <Button
                type={ButtonType.BurgerItem}
                title={'Sing in'}
                onClick={() => alert('aaaa')}
              />
              <Button
                type={ButtonType.BurgerItem}
                title={'Home'}
                onClick={() => alert('Home')}
              />
              <Button
                type={ButtonType.BurgerItem}
                title={'Add post'}
                onClick={() => alert('Add post')}
              />
            </div>
          )}
        </div>
        <Input
          placeholder="Placeholder"
          onChange={onChange}
          value={isValueInput}
          disabled={isOpened}
        />
      </div>
      <Card
        id="я"
        image="../../img/Homer.png"
        date="28.08.1988"
        title="I am the best"
        text="sadsd aDSADKLJ AJKSDNQWKJDN QWJDNWKJNDC WKJDNWKJ"
        author="Я"
        lesson_num="2"
      />
      <Input
        placeholder="Placeholder"
        onChange={onChange}
        value={isValueInput}
        disabled={true}
      />
    </div>
  );
}

export default App;
