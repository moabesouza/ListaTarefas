import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Title } from './styles'; 
import { useTaskContext } from '../../context/taskContext'; 
import { getStatusColor, getStatusDescription, getTipoDescription } from '../../utils/statusUtils';
import { statusEnum, tipoEnum } from '../../Enum/enums';

interface ChartData {
  name: string;
  population: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
}

export function Graph() {
  const { tasks } = useTaskContext();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const calculateStatusDistribution = () => {
      const statusCounts: Record<string, number> = {};
      const statusDescriptions: Record<string, string> = {};
  
      tasks.forEach((task) => {
        const status = task.status;
        const statusDescription = getStatusDescription(status as statusEnum);
  
        if (statusCounts[status]) {
          statusCounts[status]++;
        } else {
          statusCounts[status] = 1;
        }
  
        statusDescriptions[status] = statusDescription;
      });
  
      const chartData: ChartData[] = Object.entries(statusCounts).map(([status, count]) => ({
        name: statusDescriptions[status],
        population: count,
        color: getStatusColor(status as statusEnum), 
        legendFontColor: '#333',
        legendFontSize: 12,
      }));
  
      setChartData(chartData);
    };
  
    calculateStatusDistribution();
  }, [tasks]);
  
  const containerStyle = {
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  };

  return (
    <View style={containerStyle}>
      <Title style={{ textAlign: 'center', marginBottom: 10 }}>Gráfico por status</Title>
      <PieChart
        data={chartData}
        width={300}
        height={150}
        chartConfig={{
          backgroundGradientFrom: '#1E2923',
          backgroundGradientTo: '#08130D',
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="20"
        absolute
      />
    </View>
  );
}
