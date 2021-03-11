import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import Input from '../Input';
import './styles.css'

function Formulario(){

    //Valor inicial do input será zero
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    return(
        <div id="page-login-form" className="container">
        <PageHeader 
        title="Conferências"         
        />

        <main>            
            <form>
            <fieldset>
                <legend>Seus dados</legend>
                <Input 
                    name="email" 
                    label="Email" 
                    value={name} 
                    // "e" seria um evento feito no input da qual vou pegar o valor desse evento
                    // e setar na variavel name para mudar o estado
                    onChange={(e) => {setName(e.target.value)}}/>
                <Input
                    name="conferencia"
                    label="Conferência" 
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
               
            </fieldset>
            <footer>                
                <button type="button">
                    Enviar
                </button>
            </footer>
            </form>
        </main>

    </div>
    );
}

export default Formulario;