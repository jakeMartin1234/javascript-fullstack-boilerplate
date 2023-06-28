import {useState} from "react";
import axios from "axios";
import './App.css';

function App() {
  const [backendResponse, setBackendResponse] = useState(null);

  const requestBackend = async () => {
    const url = `http://localhost:8000`;
    let response = null;
    try {
      response = await axios.get(url, {
        data: {
          keyValue: "value",
        }
      });
      setBackendResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={requestBackend}>Send Request To Backend</button>
        <div>
            {`Backend Response: ${backendResponse}`}
        </div>
      </header>
    </div>
  );
}

export default App;
