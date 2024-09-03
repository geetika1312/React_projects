// App.js
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Card username='chaiaurcode' btnText='Click Me' />
    </>
  );
}

export default App;
