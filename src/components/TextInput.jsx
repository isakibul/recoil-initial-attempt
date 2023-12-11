import { useRecoilState } from "recoil"
import textState from "../state/atoms";

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);

    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="I am not your property..." />
            <br />
            You are typed: {text}
        </>
    )
}

export default TextInput