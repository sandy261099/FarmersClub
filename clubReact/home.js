import React from "react";
import ReactDOM from "react-dom";
//import events from "./eventData.json";

import neptune from "./images/farming.jpg";

function Home(){
    return (<><>
    <br></br><br></br><br></br><br></br>
    <main><div className="images">
        <img src={neptune} alt="Farming" width="400" height="300" />
        <h1>
            Farmers Club
        </h1>
        <h2>
            About Farming
        </h2>
        <p>
            Agriculture is everything related to the cultivation of plants &#129382 and animals &#128046, which will be used for other purposes. This is not the definition you will find in the dictionary, but it is practical and accurate. It covers productive agriculture as well as everything before and after the farm &#129362.
        </p>
        <h2>
            Types of Farming
        </h2>
        <p>
            Arable farming
        </p>
        <h2>
            Problems
        </h2>
        <p>
            Pollution, Erosion, Contamination, Pests, Rainfall, Drought, Weeds, Climate and Diseases.
        </p>
    </div>
    </main><footer>
            <p>© 2021 Sandeep</p>
        </footer></>
        </>
    

      );
}

    export default Home;