import { FC } from 'react';
import { TWeather } from '../models/models';
// import { CSSTransition } from 'react-transition-group';

// import '../css/transition.css';

const Weather: FC<TWeather> = (data) => {
  return (
    <>
      {/* <CSSTransition
        in={typeof data != 'undefined'}
        timeout={2000}
        classNames="title"
        unmountOnExit> */}
      <h1 className="title mt-4 text-5xl">{data.name}</h1>
      {/* </CSSTransition> */}
      <div className="w-4/5 mt-4">
        <h2 className="text-3xl">{data.weather[0].description}</h2>
        <h1 className="text-5xl font-bold">{data.main.temp.toFixed(1)}°C</h1>
      </div>
      <ul className="absolute flex bottom-[6vh] text-2xl text-neutral-400 text-center">
        <li className="px-4 max-w-[145px] border-r border-neutral-400">
          Feels like
          <h3 className="text-white font-bold">{data.main.feels_like.toFixed(1)}°C</h3>
        </li>
        <li className="px-4 max-w-[145px]">
          Wind
          <h3 className="text-white font-bold">{data.wind.speed}m/s</h3>
        </li>
        <li className="px-4 max-w-[145px] border-l border-neutral-400">
          Humidity
          <h3 className="text-white font-bold">{data.main.humidity}%</h3>
        </li>
      </ul>
    </>
  );
};

export default Weather;
