import React from 'react'
import DragScrollXBlock from './dragtoscroll'
import Card from './card'

const CardList = (props) => {
    const { title, dataSource } = props
    return (
        <div className="f-container mt-4 pr-0">
            <h3 className='f-title'>{title}</h3>
            <div className="w-100">
                <DragScrollXBlock className='f-drag'>
                    {
                        dataSource.map((card, idx) =>
                            <Card key={card.id} card={card}
                            />
                        )
                    }
                </DragScrollXBlock>
            </div>
        </div>
    )
}

export default CardList