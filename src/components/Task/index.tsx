// import { useContext, useState } from "react";
// import { Text } from "react-native";
// import { TaskProps } from "../../screens/Home";
// import {
//   Container,
//   TaskDelete,
//   TaskText,
//   ContainerEnd,
//   ContainerSecondary,
// } from "./styles";
// import { Entypo, Feather } from "@expo/vector-icons";
// import { TaskContext } from "../../context/taskContext";

// import { useNavigation } from "@react-navigation/native";
// import type { NativeStackScreenProps } from "@react-navigation/native-stack";

// type RootStackParamList = {
//   Home: undefined;
//   Detail: TaskProps;
// };

// type Props = NativeStackScreenProps<RootStackParamList>;

// export function Task({ id, title, done, ...others }: TaskProps) {
//   const [task, setTask] = useState<TaskProps>({ id, title, done });
//   const { selectTask } = useContext(TaskContext);

//   const navigation = useNavigation<Props["navigation"]>();

//   function handlePress() {
//     selectTask(task);
//     navigation.navigate("Detail", task);
//   }

//   return (
//     <Container {...others} onPress={() => handlePress()}>
//       <ContainerSecondary>
//         <TaskText>
//           <Feather name="info" size={20} color="#9747FF" />
//           <Text> Não iniciado </Text>
//         </TaskText>
//         <TaskDelete>
//           <Entypo name="dots-three-horizontal" size={24} color="black" />
//         </TaskDelete>
//       </ContainerSecondary>
//       <ContainerEnd>
//         <Text style={{ fontSize: 20 }}>{title}</Text>
//       </ContainerEnd>
//     </Container>
//   );
// }
