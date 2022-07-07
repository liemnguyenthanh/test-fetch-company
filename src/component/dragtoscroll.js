import React, { useRef, useState } from 'react'

const DragScrollXBlock = (props) => {
    const { className, style } = props;
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollX, setScrollX] = useState(0);
    const [clientX, setClientX] = useState(0);
    const scrollRef = useRef(null);

    const onMouseDown = (e) => {
        e.preventDefault();
        setIsScrolling(true);
        setClientX(e.clientX);
        if (scrollRef.current)
            setScrollX(scrollRef.current.scrollLeft)
    };

    const onMouseUp = (e) => {
        setIsScrolling(false);
        setClientX(e.clientX);
        if (scrollRef.current) scrollRef.current.style.cursor = "unset";
    };

    const onMouseMove = (e) => {
        if (isScrolling) {
            e.preventDefault();
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = scrollX + (clientX - e.clientX);
                scrollRef.current.style.cursor = "grabbing";
                setScrollX(scrollRef.current.scrollLeft);
            }
            setClientX(e.clientX);
        }
    };

    return (
        <ul
            className={className}
            style={style}
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
        >
            {props.children}
        </ul>
    )
}

export default DragScrollXBlock
