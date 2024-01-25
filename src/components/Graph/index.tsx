import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { Title } from "./styles";

export function Graph() {
  const chartData = [
    { name: "Em Aberto", population: 70, color: "#FBA13A", legendFontColor: "#333", legendFontSize: 12 },
    { name: "Cancelado", population: 15, color: "#FF004B", legendFontColor: "#333", legendFontSize: 12 },
    { name: "Pausado", population: 15, color: "#9747FF", legendFontColor: "#333", legendFontSize: 12 },
  ];

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
          backgroundGradientFrom: "#1E2923",
          backgroundGradientTo: "#08130D",
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
