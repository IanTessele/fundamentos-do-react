//#region todas as importações
import First from "./components/base/first";
import Second from "./components/base/second";
import WithParams from "./components/base/WithParams";
import React from "react";
import "./index.css";
import "./App.css";
import Card from './components/layout/card';
import Family from './components/base/family';
import FammilyMember from './components/base/familyMember';
import StudentList from "./components/repetition/StudentList";
import TabelaProdutos from "./components/repetition/tabelaProdutos";
import ParOuImpar from "./components/condition/ParOuImpar";
import UsuarioInfo from "./components/condition/UsuarioInfo";
import FatherDirect from "./components/comunication/FatherDirect";
import StateConfig from "./components/useState/StateConfig";
import TextInput from "./components/form/input";
import Contador from "./components/contador/contador";
import EffectAppName from "./components/useEffect/EffectAppName";
//#endregion

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>

      <div className="Cards">

        <Card title='#01 - primeiro'
          color="#080">
          <First /> </Card>

        <Card title='#02 - segundo com style aplicado'
          color='#239'>
          <Second /> </Card>

        <Card title='#03 - nota aleatória'
          color="#932">
          <WithParams
            title="Situação do aluno"
            aluno="vitor"
            min={0}
            max={10} /> </Card>

        <Card title='#04 - Componentes com filhos'
          color="#905">
          <Family sobrenome="santos brasil">
            <FammilyMember nome='gunter' />
            <FammilyMember nome='ana' />
            <FammilyMember nome='vitor' />
          </Family>
        </Card>

        <Card title='#05 - Lista de Alunos'
          color="#305">
          <StudentList />
        </Card>

        <Card title='#06 - Tabela de Preços'
          color="#393">
          <TabelaProdutos />
        </Card>

        <Card title='#07 - Renderização Condicional'
          color="#900">
          <ParOuImpar numero={2} />
          <UsuarioInfo User={{ name: 'gunter' }} />
          <UsuarioInfo User={{ email: 'gunter@email.com' }} />
        </Card>

        <Card title='#08 - Comunicação direta'
          color="#839">
          <FatherDirect />
        </Card>

        <Card title='#09 - useState'
          color="#753">
          <StateConfig />
        </Card>

        <Card title='#10 - useEffect'
          color="#755">
          <EffectAppName />
        </Card>

        <Card title='#10 - Componentes controlados'
          color="#313">
          <TextInput />
        </Card>

        <Card title='#11 - Contador e Classes'
          color="#113">
          <Contador />
        </Card>


      </div>
    </div>
  );
};
