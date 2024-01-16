import { ITarefa } from "../interfaces/tarefa";

export const tarefaData: ITarefa[] = [
  { id: 1, nome: "Estudar React Native", tipo: '1', status: '3' },
  { id: 2, nome: "Trabalhar em Projeto X", tipo: '2', status: '4' },
  { id: 3, nome: "Pagar Contas", tipo: '3', status: '1' },
 
  
];

export const getStatusDescription = (statusId: string): string => {
  switch (statusId) {
    case '1':
      return 'Não Iniciado';
    case '2':
      return 'Cancelado';
    case '3':
      return 'Em Andamento';
    case '4':
      return 'Finalizado';
    case '5':
      return 'Pausado';
    default:
      return 'Desconhecido';
  }
};

export const getTipoDescription = (tipoId: string): string => {
  switch (tipoId) {
    case '1':
      return 'Estudo';
    case '2':
      return 'Trabalho';
    case '3':
      return 'Pagamento';
    case '4':
      return 'Saúde';
    default:
      return 'Desconhecido';
  }
};
