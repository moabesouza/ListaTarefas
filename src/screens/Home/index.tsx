import { StatusBar } from 'expo-status-bar';
import { Container, Scroll,ButtonContainer } from "./styles";
import { Baseboard } from '../../components/Baseboard';
import { Task } from "../../components/Task";

export interface TaskProps {
  id: number;
  title: string;
  done: boolean;
}

const TASKS = [
  {
    id: 1,
    title: "Ir ao cinema",
    done: false,
  },
  {
    id: 2,
    title: "Ir ao medico",
    done: false,
  },
  {
    id: 3,
    title: "Caminhar na praia",
    done: true,
  },
];


export function Home() {
  return (
    <Container>
      <StatusBar style="dark" />
      
      <Scroll showsVerticalScrollIndicator={false} contentContainerStyle={{ gap: 16, paddingTop: 18, paddingBottom: 18, }}>
        {TASKS.map((task) => {
          return(
            <Task id={task.id} title={task.title} done={task.done} />
          )
        })}
      </Scroll>
      {/*<Baseboard/>*/}
    </Container>
  );
}
