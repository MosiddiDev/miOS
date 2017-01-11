import React from 'react';
var { Nav } = require('react-bootstrap');

var MenuItem = require('./MenuItem');
var { header } = require('../config');

// <header className="app-header">
//     <div className="container">
//         <Nav bsStyle='pills' activeKey={1}>
//            {
//                header.menu.map(function(menuItem, index){
//                    return (
//                        <MenuItem route={"#/" + menuItem.route} text={menuItem.text} key={index} />
//                    )
//                })
//            }
//        </Nav>
//     </div>
// </header>

const Screen = React.createClass({

    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

});

module.exports = Screen;
