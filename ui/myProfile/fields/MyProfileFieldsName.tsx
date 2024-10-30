import { FormControl, Input } from '@chakra-ui/react';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

import type { FormFields } from '../types';

import FormInputPlaceholder from 'ui/shared/forms/inputs/FormInputPlaceholder';

const MyProfileFieldsName = () => {
  const { control } = useFormContext<FormFields>();
  const { field, fieldState, formState } = useController<FormFields, 'name'>({
    control,
    name: 'name',
  });

  const isDisabled = formState.isSubmitting;

  return (
    <FormControl variant="floating" isDisabled={ isDisabled } size="md" mb={ 3 }>
      <Input
        { ...field }
        isInvalid={ Boolean(fieldState.error) }
        isDisabled={ isDisabled }
        isReadOnly={ true }
        autoComplete="off"
      />
      <FormInputPlaceholder text="Name" error={ fieldState.error }/>
    </FormControl>
  );
};

export default React.memo(MyProfileFieldsName);
