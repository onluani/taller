import "./register.css"

const main = () => {
    return (
        <div className="container">
            <h1>Horizontes Lejanos</h1>
                <form action="">
                    <div className="usuario">
                    <label htmlFor="username" >Usuario</label>
                    <input type="text" name="username" placeholder="Usuario" />

                    <label htmlFor="password" >Contraseña</label>
                    <input type="password" name="password" placeholder="Contraseña" />
                    </div>
                </form>

                <div>
                    <button className="login">Iniciar Sesion</button> <br></br>
                    <button className="register">Registrarme</button> <br></br>
                    <button className="google">Continuar con Google</button><br></br>
                </div>
        </div>
    )
}

export default main