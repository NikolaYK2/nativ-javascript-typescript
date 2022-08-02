import React, {MouseEvent} from "react";
// export const callback =()=> {
//     alert('hay')
// }
//
// window.setTimeout( callback, 1000)

export const User = () => {
    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        console.log(event.currentTarget.name)
    }

    const nameChanged = () => {

        console.log("name chang")
    }
    const focusLost = () => {
        console.log("LOST!")
    }
    return (
        <div>
            <textarea onChange={nameChanged} onBlur={focusLost}>Niko</textarea>
            <button name={"delete"} onClick={deleteUser}>x</button>
            <button name={"save"} onClick={deleteUser}>x</button>
        </div>
    )
}