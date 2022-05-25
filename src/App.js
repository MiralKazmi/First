import React, { useEffect, useState } from "react";
import css from "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  const getData = async () => {
    let data = await fetch(
      "https://seabreeze.conteir.no/MAIN%2FSNOMEDCT-NO-DAILYBUILD/descriptions?conceptId=233604007&offset=0&limit=50"
    );
    data = await data.json();
    setItems(data.items);
  };

  // this will only run once to get the data
  useEffect(() => {
    getData();
  }, []);

  // this will only run when the search field is changed
  useEffect(() => {
    console.log(searchTerm);
    const res = items.filter((item) => item.descriptionId === searchTerm);
    setSearchResult(res);
  }, [searchTerm]);

  if (items.length === 0) return <div>Loading...</div>;
  else
    return (
      <div className="App">
        <h3>Search Filter</h3>
        <input
          style={{ width: "30%", height: "25px" }}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <ul>
          {(searchResult.length===0)&&(searchTerm.length!==0)&&
           <p> no result </p>
          }
          {searchResult.map((item, index) => (
            <div key={index}>
              {" "}
              (Term: {item.term} | Description:{item.descriptionId} ){" "}
            </div>
          ))}
        </ul>
      </div>
    );
}

export default App;
....




filtering on the basis of? 
title or code etc?

api documentation title base info support

1) Miral's api 

2) happy api --> deployed (endpoints) 
3) X api --> deployed (end points) 
4) Y api --> deployed (end points)



Doctor knows Miral's api ---> i nterface 


2,3,4 -> internal apis 

end point : miral.no/search

Doctor --> miral.no/search
            - 2 api 
            - 3 api 
            - 4 api 
            
API reqs: 
 1. text
 2. title
 3. codes
 4. owner 
 
 
 conteir.no/api/text ---> return text
 conteir.no/api/title --> return title 
 conteir.no/api/codes --> return code

////////////////
1. How to send request parameter in rest api. 
2. How to send authorization key in request header. 
3. How to json api.
3. How to fetch data from json. 
4. send response as json object.


























