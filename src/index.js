import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import store from "./redux/store";


ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
      
    </React.StrictMode>,
    document.getElementById('root')
  );



//ReactDOM.render(<App />, document.getElementById("root"));



serviceWorker.unregister();

