import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu Nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu Cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
    )
}

export default Formulario