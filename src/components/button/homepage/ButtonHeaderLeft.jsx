import { useEffect, useState } from "react"

export default function ButtonHeaderLeft(props) {

    return (
        <button className="Header_button_left" type="button">{props.name}</button>
    )
} 