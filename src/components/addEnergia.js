import React from "react";
import { Img, Text } from "./stylesComponents/styledC";
import { useActions, useStore } from "easy-peasy";

const AddEnergia = () => {
  const { energia, image1, image2 } = useStore(state => {
    return state.jogoState;
  });

  const { incrementEnergia, trocaImg, energiaSec1 } = useActions(actions => {
    return actions.jogoState;
  });

  return (
    <>
      <Img
        height={"300"}
        width={"300"}
        src={image1}
        onClick={() => incrementEnergia(1)}
      />
      <p>Vale: {}</p>
      <Img
        height={"100"}
        width={"100"}
        src={image2}
        onClick={() => {
          trocaImg().then(() => {
            energiaSec1();
          });
        }}
      />
      <Text fontFamily={"Arial"}>Energia: {energia}</Text>
    </>
  );
};

export default AddEnergia;
