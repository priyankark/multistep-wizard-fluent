import * as React from 'react';
import { IStepper } from './Wizard';
import { StepperNav } from 'vertical-stepper-nav';
import { NavContext } from '../context/NavContext';
import { Stack } from '@fluentui/react/lib/Stack';
import { getContainerStyleBasedOnResolution } from '../utilities/helpers';

export const Stepper = (props: IStepper) => {
    const { setStepDetails, stepDetails } = React.useContext(NavContext);
    const stepperMapProps = props.steps.map((element, index) => {
        return {
            stepContent: () => <div>{element.label}</div>,
            onClickHandler: () => setStepDetails({ currentPageIndex: index }),
            stepStateColor: 'white'
        }
    })
    stepperMapProps[stepDetails.currentPageIndex] = {
        stepContent: () => <div style={{ fontSize: 14, fontWeight: 'bold' }}>
            {props.steps[stepDetails.currentPageIndex].label}
        </div>,
        onClickHandler: () => setStepDetails({ currentPageIndex: stepDetails.currentPageIndex }),
        stepStateColor: '#0078D4'
    }
    return <Stack styles={{ root: { minWidth: getContainerStyleBasedOnResolution().navWidth, maxWidth: getContainerStyleBasedOnResolution().navWidth } }}>
        <StepperNav steps={stepperMapProps} />
    </Stack>
}