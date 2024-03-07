import { ref } from 'hywer'
import hywerLogo from './assets/hywer.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = ref(0)

  return <>
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} class="logo" alt="Vite logo" />
      </a>
      <a href="https://github.com/ssleert/hywer" target="_blank">
        <img src={hywerLogo} class="logo hywer" alt="Hywer logo" />
      </a>
    </div>
    <h1>Vite + Hywer</h1>
    <div class="card">
      <button onClick={() => count.val++}>
        count is {count}
      </button>
      <p>
        Edit <code>src/App.jsx</code> and save to test hot reload
      </p>
    </div>
    <p class="read-the-docs">
      Click on the Vite and Hywer logos to learn more
    </p>
  </>
}

export default App
