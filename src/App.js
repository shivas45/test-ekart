import React from "react";
import "./App.css";
import Card from "./components/Card";
import Greeting from "./components/Greeting";

function App() {
    return (
        <>
            <div className="wrapper">
              <Card>
                <img  className="image" src="https://i.etsystatic.com/21696882/r/il/f2a3f3/3882089204/il_794xN.3882089204_gxlk.jpg"></img>
                <Greeting content ="White traditional long dress" />
            </Card>
            <Card>
              <img className="image" src="https://media.gettyimages.com/id/1056328580/photo/spain-barcelona-portrait-of-bearded-young-man-with-curly-hair.jpg?s=612x612&w=gi&k=20&c=DmvDmmHG_mp2ecJepzzrdWw4og8IfoCOAA14o88dvpI="></img>
                <Greeting content="Long sleeve denim jacket"  />
            </Card>
            <Card>
             <img className="image" src="https://rukminim1.flixcart.com/image/612/612/xif0q/sandal/w/w/i/-original-imaggygzekfbbnrc-bb.jpeg?q=70"></img>
                <Greeting content="Hush Pupples"  />
            </Card>
            <Card>
              <img className="image" src="https://media.istockphoto.com/id/509995950/photo/woman-wearing-nude-colored-high-heel-shoes.jpg?s=612x612&w=0&k=20&c=ryJJpjtGhmyLkpg4fLcDcAzm8DYj3REnYoA14yIyihU="></img>
                <Greeting content ="Athens skirt"  />
            </Card>
            </div>
        </>
    );
}

export default App;