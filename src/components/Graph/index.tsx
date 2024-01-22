import { Container } from "./styles";
import React, { PureComponent, useState } from 'react';
import { VictoryPie } from 'victory-native'


export function Graph() {
    return (
    <Container>
        <VictoryPie
        width={300}
        height={300}
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