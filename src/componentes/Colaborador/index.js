import './Colaborador.css'
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart  } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {

    function deletarColaborador() {
        aoDeletar(colaborador.id);
      }

      function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (<div className="colaborador">
        <AiFillCloseCircle 
            size={25} 
            className="deletar" 
            onClick={deletarColaborador} />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito
                    ? <AiFillHeart {...propsfavorito} color='#ff0000' onClick={favoritar} />
                    : <AiOutlineHeart {...propsfavorito} onClick={favoritar} />
                }
            </div>
        </div>
    </div>)
}

export default Colaborador