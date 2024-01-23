import React from 'react';
import { Container, Title } from "./styles";
import { VictoryPie } from 'victory-native';

export function Graph() {
    return (
        <Container>
            <Title>Gráfico por status</Title>
            <VictoryPie
                width={200}
                height={200}
                colorScale={["#FBA13A", "#FF004B", "#9747FF"]}
                data={[
                    { x: "Aberto", y: 70 },
                    { x: "Cancelado", y: 15 },
                    { x: "Espera", y: 15 }
                ]}
            />
        </Container>
    );
}
