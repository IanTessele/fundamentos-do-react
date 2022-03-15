import First from "./components/base/first";
import Second from "./components/base/second";
import WithParams from "./components/base/WithParams";
import React from "react";
import "./index.css";
import "./App.css"
import Card from './components/layout/card';
import Family from './components/base/family'
import FammilyMember from './components/base/familyMember'
import StudentList from "./components/repetition/StudentList";
import TabelaProdutos from "./components/repetition/tabelaProdutos";
import ParOuImpar from "./components/condition/ParOuImpar";
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos do React</h1>

      <div className="Cards">

        <Card title='#01 - primeiro'
          color="#080">
          <First /> </Card>

        <Card title='#02 - segundo'
          color='#269'>
          <Second /> </Card>

        <Card title='#03 - nota aleatória'
          color="#932">
          <WithParams
            title="Situação do aluno"
            aluno="ian"
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
            <StudentList/>
        </Card>

        <Card title='#06 - Tabela de Preços'
          color="#393">
            <TabelaProdutos/>
        </Card>
        <Card title='#07 - Teste de Par ou Impar'
          color="#900">
            <ParOuImpar/>
        </Card>

      </div>
    </div>
  );
};
