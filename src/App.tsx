import React from "react";
import { Log } from "./components/Log";
import { Summary } from "./components/Summary";
import { useLogs } from "./hooks/use-logs";
import { initial } from "./store";

function App() {
  const { setPolling, store } = useLogs(initial);
  return (
    <main className="p2">
      <div className="flex">
        <div className="w-50 p2">
          <div className="flex justify-between items-center">
            <h2>Log</h2>
            <button className="btn" onClick={() => setPolling(!store.polling)}>
              {store.polling ? "Pause" : "Resume"}
            </button>
          </div>
          <Log logs={store.logs} />
        </div>
        <div className="w-50 p2">
          <h2>Summary</h2>
          <Summary logs={store.logs} />
        </div>
      </div>
    </main>
  );
}

export default App;
