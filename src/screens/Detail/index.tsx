import { StatusBar } from 'expo-status-bar';
import { ContainerMain } from "./styles";
import { Graph } from '../../components/Graph';
import { Table } from '../../components/Table';

export  function Detail() {
  return (
    <ContainerMain>
      <StatusBar style="auto" />
      <Table/>
      <Graph/>
    </ContainerMain>
  );
}