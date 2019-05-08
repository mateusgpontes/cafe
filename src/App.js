import React from "react";
import AddEnergia from "./components/addEnergia";
import { Div } from "./styledApp";
import { StoreProvider } from "easy-peasy";
import store from "./stores";

function App() {
  return (
    <Div>
      <StoreProvider store={store}>
        <AddEnergia />
      </StoreProvider>
    </Div>
  );
}

export default App;
