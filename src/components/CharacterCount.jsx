import { useRecoilValue } from "recoil"
import charCountState from "../state/selector"

const CharacterCount = () => {
    const count = useRecoilValue(charCountState)
    return (
        <div>
            <h2>Count: {count}</h2>
        </div>
    )
}

export default CharacterCount