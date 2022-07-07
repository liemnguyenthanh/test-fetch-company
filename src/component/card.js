import React from 'react'

const Card = (props) => {
    const { img, content, title, link, icon } = props.card
    return (
        <li className="f-card">
            {img && <img src={img} alt={title} />}

            <div className="f-card--container">
                <h3 className='d-flex align-items-center'>
                    {icon && <img src={icon} alt={title}  className='mr-1'/>}
                    {title && title}
                </h3>
                <p className='color-gray spacing-05 over-hidden mb-0' style={{height : link ? '46px' : '70px'}}>{content && content}</p>
                {link && <a href='/' className='f-link mt-2'>{link}</a>}
            </div>
        </li>
    )
}

export default Card