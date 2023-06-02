import { FC } from 'react';
import styles from './HelloWorld.module.css';

type Props = {};

export const HelloWorld: FC<Props> = () => {
  return (
    <div className={styles.modules}>
      <h1>HelloWorld Component</h1>
    </div>
  );
};
