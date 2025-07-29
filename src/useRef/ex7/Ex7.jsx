import { useRef} from "react"

export default function Ex7 () {

    const inputRef = useRef(null)

    const focus = () => {
       if(inputRef.current) {
            inputRef.current.style.border = "1px solid black"
       }
    }

    const blur = () => {
        if(inputRef.current) {
            inputRef.current.style.border = "2px solid red"
        }
    }

    return (
        <>
        <input ref={inputRef} type="text" onFocus={focus} onBlur={blur}/>
        </>
    )
}