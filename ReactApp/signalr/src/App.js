import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  HubConnectionBuilder,
  LogLevel,
  HttpTransportType
} from "@aspnet/signalr";

const App = () => {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    const options = {
      skipNegotiation: true,
      transport: HttpTransportType.WebSockets
    };

    const connection = new HubConnectionBuilder()
      .withUrl("http://localhost:7000/signal", options)
      .configureLogging(LogLevel.Trace)
      .build();

    connection.on("Update", payload => {
      console.log("payload");
      console.log(payload);
    });

    connection
      .start()
      .then(() => console.log("Connection started!"))
      .catch(err => console.log(err));

    setConnection(connection);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
