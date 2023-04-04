import axios from 'axios';
import { FC, KeyboardEvent, useState } from 'react';
import { TWeather } from '../models/models';

interface Props {
  setData: (data: TWeather) => void;
}

const Form: FC<Props> = ({ setData }) => {
  const [location, setLocation] = useState('');

  const clickHandler = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${
          import.meta.env.VITE_OWM_API
        }&units=metric`,
      );
      setData(data);
      setLocation('');
    }
  };

  return (
    <input
      className="bg-transparent text-xl border 
      border-slate-200 text-slate-200 mt-4
      rounded-3xl py-3 px-5 focus:outline-none"
      type="text"
      value={location}
      placeholder="Enter location..."
      onChange={(e) => setLocation(e.target.value)}
      onKeyDown={clickHandler}
    />
  );
};

export default Form;
