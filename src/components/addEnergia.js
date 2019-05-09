import React from "react";
import { Img, H2, P, Div } from "./stylesComponents/styledC";
import { useActions, useStore } from "easy-peasy";

const AddEnergia = () => {
  const { energia, itemAtual, loja } = useStore(state => {
    return state.jogoState;
  });

  const { incrementEnergia, setItemAtual, energiaSec } = useActions(actions => {
    return actions.jogoState;
  });

  return (
    <>
      <Img
        height={"300"}
        width={"300"}
        src={itemAtual.image}
        onClick={() => incrementEnergia(1)}
      />
      <Div>
        {loja.map(item => {
          return (
            <>
              {item.image != itemAtual.image && item.value > itemAtual.value && (
                <>
                  <P>Valor: {item.value}</P>
                  <Img
                    height={"100"}
                    width={"100"}
                    src={item.image}
                    onClick={() => {
                      if (energia < item.value) {
                        alert("não tem energia suficiente");
                      } else {
                        setItemAtual(item);
                        setInterval(() => {
                          incrementEnergia(1);
                        }, 1000);
                      }
                    }}
                  />
                </>
              )}
            </>
          );
        })}
      </Div>
      <H2 fontFamily={"Arial"}>Energia: {energia}</H2>
    </>
  );
};

export default AddEnergia;
