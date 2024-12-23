import React, { Component } from 'react';

export default class ClassBaseComp extends Component {
    // Declare the variable either as a class property or inside the render method.
    name = "Gourab"; // Declaring as a class property

    render() {
        // You could also declare `name` here if it's only needed inside `render`.
        // const name = "Gourab";

        return (
            <div>
                <h1>Hello, {this.name}!</h1> {/* Accessing the class property using `this` */}
            </div>
        );
    }
}
