import React from 'react';
import classNames from 'classnames';
import styles from './styles.mcss';

interface AppProps {
  className?: string;
}

const Root: React.FC<AppProps> = ({ className }) => {
  return <div className={classNames(styles.root, className)}>Hello, App!</div>;
};

export default Root;
