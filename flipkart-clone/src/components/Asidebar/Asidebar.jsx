import React, { useState } from "react";
import { useFilter } from "../../Context/FilterContext";
import "./asidebar.css";

function Asidebar() {
  const { state, filterDispatch } = useFilter();
  const { size:{small, medium, large,xlarge,}, brands:{ nike, puma, adidas}, gender:{ men, women,kids} } = state;
  const [key,setKey] = useState(0)

  console.log("from productpage", state)

  function clearFilter(){
    filterDispatch({type:"CLEAR_FILTER"})
    setKey(key+1)
  }
  
  return (
    <div className="asidebar">
      <button className="reset-btn"
      onClick={clearFilter}
      >Reset</button>
      <hr />
      <div className="categories">
        <h5>Categories</h5>
        <hr />
        <div>Size</div>
        <input
        checked={small}
         onChange={()=>filterDispatch({type:"SMALL"})}
         type="checkbox" id="small" name="small" value="small" />
        <label htmlFor="small">S</label>
        <br />
        <input
        checked={medium}
         onChange={()=>filterDispatch({type:"MEDIUM"})}
         type="checkbox" id="medium" name="medium" value="medium" />
        <label htmlFor="medium">M</label>
        <br />
        <input
        checked={large}
         onChange={()=>filterDispatch({type:"LARGE"})}
         type="checkbox" id="large" name="large" value="large" />
        <label htmlFor="large">L</label>
        <br />
        {/* <input
        checked={xlarge}
         onChange={()=>filterDispatch({type:"X-LARGE"})}
         type="checkbox" id="x-large" name="x-large" value="x-large" />
        <label htmlFor="x-large">XL</label>
        <br /> */}
        <hr/>
        <div>Gender</div>
        <input
        checked={men}
         onChange={()=>filterDispatch({type:"MEN"})}
         type="checkbox" id="men" name="men" value="men" />
        <label htmlFor="men">MEN</label>
        <br/>
        <input
        checked={women}
         onChange={()=>filterDispatch({type:"WOMEN"})}
         type="checkbox" id="women" name="women" value="women" />
        <label htmlFor="women">WOMEN</label>
        <br/>
        <input
        checked={kids}
         onChange={()=>filterDispatch({type:"KIDS"})}
         type="checkbox" id="kids" name="kids" value="kids" />
        <label htmlFor="kids">KIDS</label>
        <br/>
        <hr />
        <div>Brands</div>
        <input
        checked={nike}
         onChange={()=>filterDispatch({type:"NIKE"})}
         type="checkbox" id="nike" name="nike" value="nike" />
        <label htmlFor="nike">Nike</label>
        <br/>
        <input
        checked={puma}
         onChange={()=>filterDispatch({type:"PUMA"})}
         type="checkbox" id="puma" name="puma" value="puma" />
        <label htmlFor="puma">Puma</label>
        <br/>
        <input
        checked={adidas}
         onChange={()=>filterDispatch({type:"ADIDAS"})}
         type="checkbox" id="adidas" name="adidas" value="adidas" />
        <label htmlFor="adidas">Adidas</label>
        <br/>
      </div>
      <hr/>
      <div>Sort by</div>
        <input
         onChange={()=>filterDispatch({type:"SORT_BY_PRICE", payload:true})}
         type="radio" id="adidas" name="adidas" value="lowToHighPrice" />
        <label htmlFor="adidas">LOW to HIGH</label>
        <br/>
        <input
         onChange={()=>filterDispatch({type:"SORT_BY_PRICE", payload:false})}
         type="radio" id="adidas" name="adidas" value="highToLowPrice" />
        <label htmlFor="adidas">HIGH to LOW</label>
        <br/>

    </div>
  );
}

export default Asidebar;
