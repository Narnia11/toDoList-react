import "./inputText.css"
import { Button, TextField } from "@mui/material"

const style = { TextField: { width: "100%" } }

interface IInput {

    task: string
    handleClick(): void
    handleChange(e: any): void
}

function InputText({ task, handleClick, handleChange }: IInput) {
    return (<>

        <div className="input">
            <TextField style={style.TextField} value={task} onChange={(e) => handleChange(e)} id="outlined-basic" label="  Att göra:" variant="outlined" />
            <Button onClick={handleClick} variant="contained">LÄGG TILL</Button>
        </div>
    </>)
}

export default InputText
