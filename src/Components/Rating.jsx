import React, { useState } from 'react'

const Rating = ({ className }) => {

    const [rating, setRating] = useState(2)
    const [hover, setHover] = useState(2)

    return (
        <div className={className}>

            {[...Array(5)].map((item, index) => {

                let star = index + 1

                return (
                    <span
                        key={index}
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        className='text-amber-500 text-xl lg:text-2xl cursor-pointer'
                    >
                        {star <= (hover || rating) ? "★" : "☆"}
                    </span>
                )
            })}

        </div>
    )
}

export default Rating