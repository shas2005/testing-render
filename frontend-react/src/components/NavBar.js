import React from 'react';

class NavBar extends React.Component
{
    constructor() {
        super()
    }

    render()
    {
        return (
            <div id='Nav'>
                <a href='/'>Home</a>
                <a href='/products'>Products</a>
                <a href='/cart'>Cart</a>
                <a href='/users/888'>Profile</a>
            </div>
        );
    }
}

export default NavBar;