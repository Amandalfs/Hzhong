'use client'
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { ContainerListForm } from './style'
import { FormAccont } from './FormAccont'
import { useContext } from 'react'
import { userRegisterContext } from '@/app/contexts/userRegisterContext'


export function FormStepperRegister(){
    const { activeStep, steps } = useContext(userRegisterContext);
    
    return (<ContainerListForm>
        <FormAccont />
        <Stepper index={activeStep} orientation='vertical' height='200px' gap='0'>
            {steps.map((step, index) => (
            <Step key={index}>
                <StepIndicator>
                <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                />
                </StepIndicator>

                <Box flexShrink='0'>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
            </Step>
            ))}
        </Stepper>
    </ContainerListForm>)
}