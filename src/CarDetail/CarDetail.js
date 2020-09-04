import React from "react";
import classes from './CarDetail.module.css';

export default class CarDetail extends React.Component {
   render() {
      return (
         <div className={classes.CarDetail}>
            <h1>{this.props.match.params.name}</h1>
         </div>
      )
   }
}
