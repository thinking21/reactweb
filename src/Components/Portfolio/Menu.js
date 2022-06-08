import React from 'react';
import './Portfolio.css'


function Menu({menuItem}){
    return(
        <div className="item">
            {
                menuItem.map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu;