import { Text, TouchableOpacity, View } from "react-native";
import React, { useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ButtonRight, ButtonLeft, ButtonCenter, MainFooter, SecondaryFooter } from "./styles";
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types/navigation';

import { useRoute } from '@react-navigation/native';




export function Baseboard() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const isDashboardActive = route.name === 'Dashboard';

  return (
    <MainFooter>
      <Animated.View style={{ zIndex: 1, transform: [{ scale: pulseAnim }] }}>
        <ButtonCenter onPress={() => navigation.navigate('Create')}>
       
            <AntDesign
              name="pluscircle"
              size={50}
              color={'#646FD4'}
            />
        
        </ButtonCenter>
      </Animated.View>
      <SecondaryFooter>
        <ButtonLeft onPress={() => navigation.navigate('Dashboard')}>
          <View style={{ borderTopWidth: 2, borderTopColor: isDashboardActive ? '#646FD4' : 'transparent', paddingTop: 10 }}>
            <AntDesign
              name="dashboard"
              size={25}
              color={isDashboardActive ? '#646FD4' : '#8A8B94'}
            />
          </View>
          <Text style={{ color: isDashboardActive ? '#646FD4' : '#8A8B94', marginTop: 5 }}>Dashboard</Text>
        </ButtonLeft>
        <ButtonRight onPress={() => navigation.navigate('List')}>
          <View style={{ borderTopWidth: 2, borderTopColor: isDashboardActive ? 'transparent' : '#646FD4', paddingTop: 10 }}>
            <AntDesign
              name="profile"
              size={25}
              color={isDashboardActive ? '#8A8B94' : '#646FD4'}
            />
          </View>
          <Text style={{ color: isDashboardActive ? '#8A8B94' : '#646FD4', marginTop: 5 }}>Tarefas</Text>
        </ButtonRight>
      </SecondaryFooter>
    </MainFooter>
  );
}

