import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
/////////state and props//////////////////
class CatChild extends React.Component{
    constructor (props){ /////call the parent  
        /// constructor to be dynamic not static then pass the properities comes from the parents
        super(props);
     this.state = {
         numOfPets : 0
     }
    }
    //////////create new method///
    incrementNumOfPets = () =>{
        this.setState({
            numOfPets:this.state.numOfPets +1
        })
    }
    render(){
        return(
            <>
         

            <Card style={{ width: '18rem' }}>
  <Card.Img onClick={this.incrementNumOfPets} variant="top" src={this.props.imgURL}  />
  <Card.Body>
    <Card.Title>{this.props.catName} </Card.Title>
    <Card.Text>
      Number Of Pets:{this.state.numOfPets}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
            </>
        )
    }
}

export default CatChild;