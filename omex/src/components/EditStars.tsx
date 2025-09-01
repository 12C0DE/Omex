import { useState } from "react";
import { EmptyStar } from "./EmptyStar";

export const EditStars = () => {
    const [starCount, setStarCount] = useState(0)
    const [hoveredStar, setHoveredStar] = useState(0)

    const handleMouseEnter = (index: number) => {
        setHoveredStar(index)
    }

    const handleMouseLeave = () => {
        setHoveredStar(0)
    }

    const handleClick = (index: number) => {
        setStarCount(index)
    }
    
    return (

    )
}