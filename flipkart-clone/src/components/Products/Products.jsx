import React from 'react'
import "./product.css"
import Card from '../Card/Card'
import { useFilter } from "../../Context/FilterContext";


function Products() {

  const { state, filterDispatch } = useFilter();
  
  const data = [
    {
      id:100,
      brands:"puma",
      price:{
        original:1000,
        discount:20,
        finalPrice:800,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/l47cu4w0/shoe/p/a/e/-original-imagf5pppqumyhq7.jpeg?q=50",
      category:"men",
      size:["L"],
    },
    {
      id:101,
      brands:"nike",
      price:{
        original:2000,
        discount:10,
        finalPrice:1800,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/l1fc0i80/t-shirt/s/b/y/m-ar5005-660-nike-original-imagcznzdjzhec7r.jpeg?q=50",
      category:"men",
      size:["M","L"],
    },
    {
      id:102,
      brands:"puma",
      price:{
        original:5000,
        discount:10,
        finalPrice:4500,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/kosxzm80/t-shirt/d/o/g/s-84783003-puma-original-imag36azzsmkkkh8.jpeg?q=50",
      category:"women",
      size:["S"],
    },
    {
      id:103,
      brands:"nike",
      price:{
        original:1000,
        discount:20,
        finalPrice:800,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/l19m93k0/kids-shoe/g/q/3/0-5-dm4207-800-nike-original-imagcv7wz8b3sgsr.jpeg?q=50",
      category:"kids",
      size:["L","S"],
    },
    {
      id:104,
      brands:"puma",
      price:{
        original:8000,
        discount:10,
        finalPrice:7200,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/l2nmnww0/kids-shoe/l/p/z/1-392145-puma-original-imagdybxxg8jn8th.jpeg?q=50",
      category:"kids",
      size:["M","S"],
    },
    {
      id:105,
      brands:"adidas",
      price:{
        original:1000,
        discount:20,
        finalPrice:800,
      },
      img:"https://rukminim1.flixcart.com/image/580/696/kvsfhjk0/t-shirt/f/q/1/s-h24101-adidas-original-imag8m4ygyejukay.jpeg?q=50",
      category:"women",
      size:["M"]
    },
  ];

  const { size:{small, medium, large,xlarge,},
          brands:{ nike, puma, adidas}, 
          gender:{ men, women,kids},
          sortByPrice } = state;

  function sortBypriceFun(data, sort){
    const sortedData = [...data]
    if(sort){
      return sortedData.sort((a,b)=> a.price.finalPrice - b.price.finalPrice )
    } 
    else {
      return sortedData.sort((a,b)=> b.price.finalPrice - a.price.finalPrice )

    }
  }

  const sortedData = sortBypriceFun(data,sortByPrice)

  function filterBybrandsFun(data){
    const tempArr = [...data];
    if( puma && adidas && nike){
      return tempArr;
    }
    if( puma && adidas ){
      return tempArr.filter(data=>data.brands !== "nike")
    }
    if( puma && nike ){
      return tempArr.filter(data=>data.brands !== "adidas")
    }
    if( nike && adidas ){
      return tempArr.filter(data=>data.brands !== "puma")
    }
    if( puma && adidas ){
      return tempArr.filter(data=>data.brands !== "nike")
    }
    if( puma ){
      return tempArr.filter(data=>data.brands === "puma")
    }
    if( nike ){
      return tempArr.filter(data=>data.brands === "nike") 
    }
    if( adidas ){
      return tempArr.filter(data=>data.brands === "adidas")
    }
    return tempArr;
  }

  const filterBybrands = filterBybrandsFun(sortedData)

  function filterByGenderFun(data){
    const tempArr = [...data]
    if( men && women && kids ){
      return tempArr;
    }
    if( men && women ){
      return tempArr.filter(data=>data.category !== "kids");
    }
    if( men && kids ){
      return tempArr.filter(data=>data.category !== "women");
    }
    if( women && kids ){
      return tempArr.filter(data=>data.category !== "men");
    }
    if( men ){
      return tempArr.filter(data=>data.category === "men");
    }
    if( women ){
      return tempArr.filter(data=>data.category === "women");
    }
    if( kids ){
      return tempArr.filter(data=>data.category === "kids");
    } 
    return tempArr;
  }

  const filterByGender = filterByGenderFun(filterBybrands)

  function filterBySizeFun(data){
    const tempArr = [...data]
    if( small && medium && large ){
      return tempArr
    }
    if( small && medium ){
      console.log("inn")
      return tempArr.filter(data=>data.size.some(s=>s==="S" || s==="M" ))
    }
    if( small &&  large){
      return tempArr.filter(data=>data.size.some(s=>s==="S" || s==="L"))
    }
    if( medium && large ){
      return tempArr.filter(data=>data.size.some(s=>s==="M" || s==="L"))
    }

    if( small  ){
      return tempArr.filter(data=>data.size.includes('S'))
    }
    if( medium  ){
      return tempArr.filter(data=>data.size.includes('M'))
    }
    if( large  ){
      return tempArr.filter(data=>data.size.includes('L'))
    }
    return tempArr;
  }

  const finalArr = filterBySizeFun(filterByGender)

  return (
    <div className='product-section'>
     {
      finalArr.map(item=>(<Card 
       key={item.id} 
       items={item}
       brands={item.brands} 
       priceOriginal={item.price.original}
       priceDiscount={item.price.discount}
       priceFinal={item.price.finalPrice}
       img={item.img}
       category={item.category}
       size={item.size}

       />))
     }
     </div>
  )
}

export default Products