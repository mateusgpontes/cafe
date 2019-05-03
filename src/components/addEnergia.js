import React, {useState, useEffect} from "react";
import coffer from "../imagens/coffe.gif"
import  {Img, Text} from "./stylesComponents/styledC"

const AddEnergia = () => {
    const [energia, setEnergia] = useState(0);

    function energiaPontos (){
       setEnergia(energia + 1);
    }

    return(
        <>  
            <Img src={coffer} onClick= {() => energiaPontos()}></Img>
            <Text fontFamily={'Arial'}>Energia:{energia}</Text>    
        </>
    );
}

export default AddEnergia;