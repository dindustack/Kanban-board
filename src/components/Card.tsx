import React from 'react'

interface CardProps {
    text: string
}
export const Card = ({ text }: CardProps) => {
    return (
        <div>
            {text}
        </div>
    )
}
