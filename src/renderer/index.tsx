

import { createRoot } from 'react-dom/client';
import App from './app/App';
import "./assets/js/jquey";
import "./assets/js/bootstrap";
import './assets/css/main.css';
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
