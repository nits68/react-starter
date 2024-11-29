import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div>
          <div className="flex w-screen justify-center">
            <a href="https://vite.dev" target="_blank">
              <img className="w-64" src={viteLogo} alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img className="w-64" src={reactLogo} alt="React logo" />
            </a>
          </div>
        </div>
        <div>
          <h1 className="text-5xl font-bold m-8">Vite + React</h1>
        </div>
        <div>
          <button
            className="bg-blue-200 hover:bg-blue-400 shadow-lg px-4 m-4 rounded"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
        </div>
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <div>
          <p>Click on the Vite and React logos to learn more</p>
        </div>
      </div>
    </>
  );
}

export default App;
