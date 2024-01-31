
import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ButtonRight, ButtonLeft, ButtonCenter, MainFooter, SecondaryFooter } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation';




export function Baseboard() {
  const navigation = useNavigation<NavigationProp>();

  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true
        })
      ])
    ).start();
  }, []);

  return (
    
    <MainFooter>
     <Animated.View style={{  zIndex: 1, transform: [{ scale: pulseAnim }] }}>
        <ButtonCenter onPress={() => navigation.navigate('Create')}>
          <AntDesign name="pluscircle" size={50} color="#646FD4" />
        </ButtonCenter>
      </Animated.View>
      <SecondaryFooter>
        <ButtonLeft onPress={() => navigation.navigate('Dashboard')}>
          <AntDesign name="dashboard" size={25} color="#646FD4" />
          <Text style={{ color: '#646FD4', marginTop: 5 }}>Dashboard</Text>
        </ButtonLeft >
        <ButtonRight onPress={() => navigation.navigate('List')}>
          <AntDesign name="profile" size={25} color="#646FD4" />
          <Text style={{ color: '#646FD4', marginTop: 5 }}>Tarefas</Text>
        </ButtonRight>
      </SecondaryFooter>
    </MainFooter>
  );
}


