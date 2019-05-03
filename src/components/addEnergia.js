import React, {useState, useEffect} from "react";
import coffee1 from "../imagens/coffe.gif";
import coffee2 from "../imagens/coffee.gif";
import coffee3 from "../imagens/coffeee.gif";
import  {Img, Text} from "./stylesComponents/styledC";

const AddEnergia = () => {

    const [energia, setEnergia] = useState(0);
    const [image1, setImage1] = useState(coffee1);
    const [image2, setImage2] = useState(coffee2);

    function energiaPontos (){
        setEnergia(energia + 1);

    }

    function coffeTroca (){
        if(energia >= 10){
            setImage1(coffee2);
            setImage2(coffee3);
            setEnergia(energia - 10);
        }
    }

    return(
        <>  
            <Img height={"300"} width={"300"} src={image1} onClick= {() => energiaPontos()}></Img>
            <Img height={"100"} width={"100"} src={image2} onClick = {() => coffeTroca ()}></Img>
            <Text fontFamily={'Arial'}>Energia:{energia}</Text>    
        </>
    );
}

export default AddEnergia;