import React, { useState } from 'react'
import { CONSTANT_FOOTER } from '../constant'
const Footer = () => {
    const [activeRoute, setActiveRoute] = useState(CONSTANT_FOOTER[1])
    return (
        <div className="f-footer">
            <div className="f-container">
                <div className="f-footer--wrap">
                    {
                        CONSTANT_FOOTER.map(item =>
                            <div key={item.id} className={`${item.id === activeRoute.id ? item.active : ''}`} onClick={()=>setActiveRoute(item)}>
                                <img src={item.icon} alt={item.id} />
                            </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer