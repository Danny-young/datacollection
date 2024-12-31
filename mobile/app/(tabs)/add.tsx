import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';
import React from 'react';
import {
  Button,
  ButtonText,
  ButtonSpinner,
  ButtonIcon,
  ButtonGroup,
} from "@/components/ui/button"
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Input, InputField } from '@/components/ui/input';
import { BarChart, PieChart } from "react-native-gifted-charts";
import { VStack } from '@/components/ui/vstack';
// import { Heading } from '@/components/ui/heading';  
import { FormControl, 
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
 } from '@/components/ui/form-control';
import { AlertCircleIcon } from '@/components/ui/icon';
import { useToast, Toast, ToastTitle, ToastDescription } from '@/components/ui/toast';

        


export default function add() {

 
  const [isInvalid, setIsInvalid] = React.useState(false)
  const [inputValue, setInputValue] = React.useState("12345")
  const handleSubmit = () => {
    // if (inputValue.length < 6) {
    //   setIsInvalid(true)
    // } else {
    //   setIsInvalid(false)
    // }
   console.log("successfully saved");}

  return (
    <ScrollView className='mx-4 my-6'>
    
      
    <VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4">
      <FormControl
        isInvalid={isInvalid}
        size="lg"
        isDisabled={false}
        isReadOnly={false}
        isRequired={false}
      >
        <FormControlLabel>
          <FormControlLabelText>First Name</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1"
        size="xl">
          <InputField
            type="text"
            placeholder="First Name"
           // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Surname</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1"
        size="xl">
          <InputField
            type="text"
            placeholder="Surname"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Telephone Number</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1"
         variant="outline"
         size="xl"
         isDisabled={false}
         isInvalid={false}
         isReadOnly={false}>
          <InputField          
          keyboardType='number-pad'
            type="text"
            placeholder="Telephone"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Electoral Area</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="xl">
          <InputField
            type="text"
            placeholder="Electoral Area"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Town/Locality</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="xl">
          <InputField
            type="text"
            placeholder="Town/Locality"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Nationality</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="xl">
          <InputField
            type="text"
            placeholder="Nationality"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Street Name</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="xl">
          <InputField
            type="text"
            placeholder="Street Name"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Valuation Number</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1"
          isReadOnly={true}
          size="xl">            
          <InputField
            type="text"
            placeholder="Valuation No."
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        <FormControlLabel>
          <FormControlLabelText>Data type</FormControlLabelText>
        </FormControlLabel>
        <Input className="my-1" size="xl">
          <InputField
            type="text"
            placeholder="ID"
            // value={inputValue}
            // onChangeText={(text) => setInputValue(text)}
          />
        </Input>
        
       
      </FormControl>
      <Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}>
        <ButtonText>Submit</ButtonText>
      </Button>
    </VStack>
     </ScrollView>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
