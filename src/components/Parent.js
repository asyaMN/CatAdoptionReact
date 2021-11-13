import React from "react";
import CatChild from "./CatChild";
import CatImg from './assest/CatImg.jpg'
import lucky from './assest/lucky.jpg'
class Parent extends React.Component{
    render(){
        return(
            <>
            <p>I am the parent component</p>
            <CatChild
             catName='Frankie'
             imgURL={CatImg}/> 

            <CatChild
            catName = 'Lucky'
            imgURL={lucky}
            />
            </>
        )
    }
}
export default Parent;