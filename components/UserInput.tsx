import { Textarea } from "@/components/ui/textarea"

const UserInput = ({ userInput, setUserInput }) => {
    return (
        <Textarea value={userInput}
        placeholder="User Input"
        rows={5}
        onChange={(e) => setUserInput(e.target.value)}/>
    )
}

export default UserInput
