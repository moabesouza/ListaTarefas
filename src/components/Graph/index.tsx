import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Title, Container } from './styles'; 
import { useTaskContext } from '../../context/taskContext'; 
import { getStatusColor, getStatusDescription } from '../../utils/statusUtils';
import { statusEnum } from '../../Enum/enums';

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
  

  return (
    <Container>
      <Title style={{ textAlign: 'center', marginBottom: 10 }}>Gráfico por status</Title>

      {tasks.length === 0 ? (
        <Text style={{ textAlign: 'center', color: '#666' }}>Nenhuma tarefa disponível.</Text>
      ) : (
        <PieChart
          data={chartData}
          width={320}
          height={150}
          chartConfig={{
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="2"
          absolute
        />
      )}
    </Container>
  );
}
