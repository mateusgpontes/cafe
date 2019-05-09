import { action, thunk } from "easy-peasy";
import coffee1 from "../imagens/coffe.gif";
import coffee2 from "../imagens/coffee.gif";
import coffee3 from "../imagens/coffeee.gif";

/*function troca(set, img1, img2, ener, number) {
  set.setImage1(img1);
  //state.image1 = state.image2;
  set.setImage2(img2);
  //state.image2 = state.image3;
  set.setEnergias(ener - number);
}*/

const userStore = {
  loja: [
    {
      value: 0,
      image: coffee1
    },
    {
      value: 10,
      image: coffee2
    },
    {
      value: 50,
      image: coffee3
    }
  ],
  itemAtual: {
    value: 0,
    image: coffee1
  },
  setItemAtual: action((state, payload) => {
    state.itemAtual = payload;
    state.energia = state.energia - payload.value;
  }),

  energia: 0,
  setEnergias: action((state, payload) => {
    state.energia = payload;
  }),

  incrementEnergia: action((state, payload) => {
    state.energia = state.energia + payload;
  })
  /*trocaImg: thunk((actions, payload, { getState }) => {
    const state = getState();
    if (state.energia >= 10 && state.image1 == coffee1) {
      troca(actions, state.image2, state.image3, state.energia, 10);
      actions.setImage1(state.image2);
      //state.image1 = state.image2;
      actions.setImage2(state.image3);
      //state.image2 = state.image3;
      actions.setEnergias(state.energia - 10);
      
    }
  }),*/

  /*energiaSec1: thunk((actions, payload, { getState }) => {
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
  })*/
};

export default userStore;
