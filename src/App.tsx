import { TWeather } from './models/models';
import { useState } from 'react';
import Background from './components/Background';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [data, setData] = useState<TWeather>();

  return (
    <>
      <Background />
      <div
        className="backdrop-blur-md backdrop-brightness-90 
      border-2 border-[#00000005] w-[40%] h-[80vh] my-16 mx-auto 
      rounded-xl flex items-center flex-col">
        <Form setData={setData} />
        {data ? <Weather {...data} /> : null}
      </div>
    </>
  );
}

export default App;
