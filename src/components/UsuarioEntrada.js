function UsuarioEntrada (props) {

    

    return (
        <div className="containerEntrada">
            <form>
                <div>
                <label htmlFor="">Nome: </label>
                    <input type="text" 
                    id="name" 
                    name="nome"
                    placeholder="Digite seu nome "/>        
                </div>
              
            </form>
                
        </div>
    );
}
export default UsuarioEntrada