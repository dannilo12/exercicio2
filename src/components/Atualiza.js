import { useState } from "react"

function Atualiza() {

    const [value, setValue] = useState('');
    return (
        <div className="container">
            <div>
                <input type="text" 
                    id="name" 
                    value={value}
                    placeholder="Digite algo"
                    onChange = {e => setValue(e.target.value)}
                    autofocus={true} />
                <p>Pegando parametro por State:</p>
                {value}
            </div>                        
        </div> 
    )
}
export default Atualiza   