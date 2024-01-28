import { StyledEmptyTask, EmptyTaskText } from './styles';
import { AntDesign } from '@expo/vector-icons';

interface EmptyTaskProps {
  text: string; 
}

export function EmptyTask({ text }: EmptyTaskProps) {
  return (
    <StyledEmptyTask >
       <AntDesign style={{ marginTop: 15 }} name="profile" size={30} />
      <EmptyTaskText>{text}</EmptyTaskText>
    </StyledEmptyTask>
  );
}
