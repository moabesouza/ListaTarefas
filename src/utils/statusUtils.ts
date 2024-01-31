import { statusEnum, tipoEnum } from '../Enum/enums'; 

export const getStatusColor = (statusId: statusEnum): string => {
  switch (statusId) {
    case statusEnum.NaoIniciado:
      return '#9747FF';
    case statusEnum.Cancelado:
      return '#FF004B';
    case statusEnum.EmAndamento:
      return '#FBA13A';
    case statusEnum.Finalizado:
      return '#00D43B';
    case statusEnum.Pausado:
      return '#146A90';
    default:
      return '#000000';
  }
};

export const getStatusDescription = (statusId: statusEnum): string => {
  switch (statusId) {
    case statusEnum.NaoIniciado:
      return 'Não Iniciado';
    case statusEnum.Cancelado:
      return 'Cancelado';
    case statusEnum.EmAndamento:
      return 'Em Andamento';
    case statusEnum.Finalizado:
      return 'Finalizado';
    case statusEnum.Pausado:
      return 'Pausado';
    default:
      return 'Desconhecido';
  }
};

export const getTipoDescription = (tipoId: tipoEnum): string => {
  switch (tipoId) {
    case tipoEnum.Estudo:
      return 'Estudo';
    case tipoEnum.Trabalho:
      return 'Trabalho';
    case tipoEnum.Pagamento:
      return 'Pagamento';
    case tipoEnum.Saude:
      return 'Saúde';
    case tipoEnum.Outros:
        return 'Outros';
    default:
      return 'Desconhecido';
  }
};
