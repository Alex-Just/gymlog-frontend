import { Control, Controller } from 'react-hook-form';
import { TextInput } from 'react-native';

import { useTheme } from '@/theme';
import { IRoutineFormValues } from '@/types/forms';

interface IEditRoutineExerciseNoteProps {
  name: `routineExercises.${number}.note`;
  control: Control<IRoutineFormValues>;
  placeholder: string;
}

function EditRoutineExerciseNote({
  name,
  control,
  placeholder,
}: IEditRoutineExerciseNoteProps) {
  const { backgrounds, fonts, gutters, borders } = useTheme();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={[
            backgrounds.lightCard,
            gutters.marginBottom_4,
            gutters.marginTop_4,
            gutters.paddingHorizontal_8,
            gutters.paddingVertical_12,
            borders.rounded_4,
            fonts.size_16,
            fonts.text,
          ]}
          placeholder={placeholder}
          value={value ?? ''}
          onChangeText={onChange}
        />
      )}
    />
  );
}

export default EditRoutineExerciseNote;
