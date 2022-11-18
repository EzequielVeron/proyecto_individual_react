import React, {useState, useEffect} from "react";
import ItemCount from "./ItemCount";
import Title from "./Tittle";
import ItemList from "./ItemList";

const products = [
    {id:1, imagen:"https://firebasestorage.googleapis.com/v0/b/fir-ecommerce-c94e9.appspot.com/o/fotos%20producto%2F1099331822.jpg?alt=media&token=540c31c8-a7f2-4ce3-9fd1-127ce1453244", nombre:"bocadito woow"},
    {id:2, imagen:"https://firebasestorage.googleapis.com/v0/b/fir-ecommerce-c94e9.appspot.com/o/fotos%20producto%2Fpasta-de-mani-jpg1-bdd10267e9160693e015955712017775-640-0.jpg?alt=media&token=ac61ea2b-aa70-4189-8083-7845d5348d68", nombre:"pasta de mani king"},
    {id:3, imagen:"https://firebasestorage.googleapis.com/v0/b/fir-ecommerce-c94e9.appspot.com/o/fotos%20producto%2Fchocolatory-76-de-90g1-74da604882df56931715882515474550-1024-10241-bb9f657f29e46aabb816315733629265-1024-1024.jpg?alt=media&token=c8a192f3-226d-4ac9-ae66-232e95c92344", nombre:"barra de chocolatory"},



]



export const ItemListContainer = () =>{
const [data, setdata] = useState([]);

useEffect(()=>{
const getdata = new Promise(resolve=>{
    setTimeout(()=>{
        resolve(products)
    }, 3000);
})

getdata.then(res=> setdata(res))

},[])

const onAdd = (quantity) =>{
    console.log( `compraste ${quantity} unidades `);
}

    return(
<>
<Title greeting="producto numero 1"/>
<ItemCount initial={1} stock={8} onAdd={onAdd} />
<ItemList data={data}/>
</>
    );
}


export default ItemListContainer;