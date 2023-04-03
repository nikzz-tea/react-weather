import { FC } from 'react';
import '../css/bg.css';

const Background: FC = () => {
  const elements = [...new Array(20)].map(() => <li></li>);

  return <ul className="background">{elements}</ul>;
};

export default Background;
