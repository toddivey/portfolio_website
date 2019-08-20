import React, { Component } from 'react';

export default class ErrorNotFound extends Component {
    render() {
        return (
            <div id='error'>
                <h1 className="notFoundTitle">Oops! 404 Dead Link.</h1>
                <img src="images/PinClipart.com_graveyard-clipart_3178648.png" alt="dead_link"/>
                <p className="notFoundDesc">
                        It looks like {this.props.location.pathname} does not exsist.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
}
