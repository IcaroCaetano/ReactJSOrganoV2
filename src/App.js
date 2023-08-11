import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      
      cor: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      
      cor: '#FFEEDF'
    }
  ])
   
  

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  const  deletarColaborador = () => {
    console.log('deletando colaborador pelo App');
  }  

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)}
        aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)} 
      />
      {times.map(time => 
        <Time 
          mudarCor={mudarCorDoTime}
          key={time.nome} 
          nome={time.nome}
          cor={time.cor}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletarPeloApp={deletarColaborador}
        /> 
      )}
      <Rodape/>
    </div>
  );
}

export default App;
