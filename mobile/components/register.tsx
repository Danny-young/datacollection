import React from 'react'
import { View } from 'react-native'
import { FormControl, FormControlError, FormControlErrorIcon, FormControlErrorText, FormControlHelper, FormControlHelperText, FormControlLabel, FormControlLabelText } from './ui/form-control'
import { Input, InputField } from './ui/input'
import { VStack } from './ui/vstack'
import { Button, ButtonText } from './ui/button'
import { AlertCircleIcon } from './ui/icon'

export default function Register() {
    // const [isInvalid, setIsInvalid] = React.useState(false)
    // const [inputValue, setInputValue] = React.useState("12345")

  return (
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
        
    <FormControl
    //   isInvalid={isInvalid}
      size="md"
      isDisabled={false}
      isReadOnly={false}
      isRequired={false}
    >
      <FormControlLabel>
        <FormControlLabelText>Register</FormControlLabelText>
      </FormControlLabel>
      <Input 
      size='xl'
      className="my-1" /* size={xl} */ >
        <InputField
          type="text"
          placeholder="Name"
        //   value={inputValue}
        //   onChangeText={(text) => setInputValue(text)}
        />
      </Input>
      {/* <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel> */}
      <Input size='xl' className="my-1">
        <InputField
          type="text"
          placeholder="email"
        //   value={inputValue}
        //   onChangeText={(text) => setInputValue(text)}
        />
      </Input>
     
      {/* <FormControlLabel>
        <FormControlLabelText>Password</FormControlLabelText>
      </FormControlLabel> */}
      <Input size='xl' className="my-1">
        <InputField
          type="text"
          placeholder="Telephone Number"
        //   value={inputValue}
        //   onChangeText={(text) => setInputValue(text)}
        />
      </Input>
      {/* <FormControlHelper>
        <FormControlHelperText>
          Must be atleast 6 characters.
        </FormControlHelperText>
      </FormControlHelper> */}
      {/* <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>
          Atleast 6 characters are required.
        </FormControlErrorText>
      </FormControlError> */}
    </FormControl>
    <VStack className='flex  gap-5 mt-4'>
    {/* <Button size="sm" variant="outline">
      <ButtonText>Forgot Password?</ButtonText>
    </Button> */}
    <Button className="w-fit self-end mt-4" size="sm" /* onPress={handleSubmit} */>
      <ButtonText>Register</ButtonText>
    </Button>
    </VStack>
  </VStack>
  )
}
