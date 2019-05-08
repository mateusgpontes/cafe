import { action, thunk } from "easy-peasy";
import coffee1 from "../imagens/coffe.gif";
import coffee2 from "../imagens/coffee.gif";
import coffee3 from "../imagens/coffeee.gif";

const userStore = {
  compra: Number,
  setCompra: action((state, payload) => {
    state.compra = payload;
  }),

  energia: 0,
  setEnergias: action((state, payload) => {
    state.energia = payload;
  }),

  incrementEnergia: action((state, payload) => {
    state.energia = state.energia + payload;
  }),

  image1: coffee1,
  setImage1: action((state, payload) => {
    state.image1 = payload;
  }),

  image2: coffee2,
  setImage2: action((state, payload) => {
    state.image2 = payload;
  }),

  image3: coffee3,
  setImage3: action((state, payload) => {
    state.image3 = payload;
  }),

  trocaImage: true,
  setTrocaImage: action((state, payload) => {
    state.trocaImage = payload;
  }),

  trocaImg: thunk((actions, payload, { getState }) => {
    const state = getState();
    if (state.energia >= 10 && state.image1 == coffee1) {
      actions.setImage1(state.image2);
      //state.image1 = state.image2;
      actions.setImage2(state.image3);
      //state.image2 = state.image3;
      actions.setEnergias(state.energia - 10);
    }
  }),

  energiaSec1: thunk((actions, payload, { getState }) => {
    const state = getState();

    if (state.image1 == coffee2 && state.trocaImage) {
      setInterval(() => {
        actions.incrementEnergia(1);
      }, 1000);
      actions.setTrocaImage(false);
      console.log(state.trocaImage);
    } else {
      console.log("não trocou");
    }
  })
};

export default userStore;
