import React, {Component} from "react";
import Car from "./Car/Car";

class Cars extends Component {
   state = {
      cars: [
         {name: 'Ford', year: 2018},
         {name: 'Audi', year: 2016},
         {name: 'Mazda', year: 2010}
      ]
   };

   goToHomePage = () => {
      this.props.history.push('/')
   };

   render() {
      return (
         <div style={{
            width: 400,
            margin: 'auto',
            paddingTop: '20px',
            textAlign: 'center'
         }}>
            <button onClick={this.goToHomePage}>GoHome</button>
            <hr/>
            {this.state.cars.map((car, index) => {
               return (
                  <Car
                     key={index}
                     name={car.name}
                     year={car.year}
                  />
               )
            })}
         </div>
      )
   }
}

export default Cars;
