import React, {Component} from "react";
import { render } from 'react-dom';

class CartApp extends Component {
  constructor(){
    super()
    this.cart()
    //this.addItems = this.addItems.bind(this)
  }
  state = {
    food: ["Poori","Idly","Dosa","Pongal"],
    count: 1,
    Order: [],
    checkout:  { Items : {
      Poori : 0,
      Pongal: 0,
      Idly: 0,
      Dosa: 0,
    }
  }
  }
  // addItems = function()  {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  addItems = (e,o) =>  {
    this.setState({
      count: this.state.count+1
    })
    let item =  this.state.checkout.Items;
    let click = o.if.k
    if(click == "Pongal"){
     console.log('Pongal')
     this.setState({
      count: item[click]++
    })
    } else if (click == "Idly"){
      console.log('Idly')
      count: item[click]++


    } else if (click == "Poori") {
        console.log('Poori')
         count: item[click]++
    }  else if (click == "Dosa"){
      console.log('Doas')
      count: item[click]++
    }
  }

  deleteItems = (e,o) =>  {
    let item =  this.state.checkout.Items;
    let click = o.if.k
    if(click == "Pongal"){
     console.log('Pongal')
     this.setState({
      count: item[click]--
    })
    } else if (click == "Idly"){
      console.log('Idly')
      count: item[click]--


    } else if (click == "Poori") {
        console.log('Poori')
         count: item[click]--
    }  else if (click == "Dosa"){
      console.log('Doas')
      count: item[click]--
    }
    this.setState({
      count: this.state.count-1
    })
  }

  checkout = () => {
    console.log('cehckour')
    console.log(this.state.checkout)
    debugger;
  }

  cart = () => {
     let that= this;
     let  k = this.state.food.map(function(k,i) {
      return <div key={k} className="foot-cart">
       <p> {k} </p>
       <a href="https://www.tripadvisor.in/LocationPhotoDirectLink-g304556-d10477738-i217077306-NK_Grand_Park_Hotel-Chennai_Madras_Chennai_District_Tamil_Nadu.html#217077306"><img alt="" src="https://media-cdn.tripadvisor.com/media/photo-s/0c/f0/56/3a/south-indian-pongal-vada.jpg"/></a><br/>
       <button className="add-btn" onClick={(e) => that.addItems(e,{if: {k}}) }>
        ADD</button>
       <button className= "delete-btn" onClick={(e) => that.deleteItems(e,{if:{k}}) }> Remove</button>
       </div>
     })
     return k;
  }

  bill=()=> {
    


  }

  
  render() {
  return (
    <div>
      <h1> Cart1 </h1>
      <h3>cart {this.state.count}</h3>
      <div className="cart-body"> {this.cart().map(function(k,i) { return <div>{k} </div>})}</div>
      <button onClick = {this.checkout}> CheckOut </button>
      <div> {this.bill()} </div>
    </div>
  )}
}



export default CartApp;

      {/* <button onClick={this.myOnClick = (e) => this.addItems(e) }> ADD</button> */}
      {/* <button onClick={this.addItems}> ADD</button> */}
