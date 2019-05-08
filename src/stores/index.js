import { createStore } from "easy-peasy";
import UserStore from "./userStore";

const store = createStore({
  jogoState: UserStore
});

export default store;
