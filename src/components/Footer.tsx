import * as React from 'react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';
import { NavContext } from '../context/NavContext';
import { getContainerStyleBasedOnResolution } from '../utilities/helpers';

export type IFooterProps = {
    shouldDisablePrev: () => boolean;
    shouldDisableNext: () => boolean;
};

export const Footer = (props: IFooterProps) => {
    const { stepDetails, setStepDetails, stepList } = React.useContext(NavContext);
    return <footer style={{ marginLeft: getContainerStyleBasedOnResolution().navWidth }}>
        <Stack horizontal tokens={{childrenGap: 12}}>
            <Stack.Item>
                {
                    (stepDetails.currentPageIndex !== 0) &&
                    <DefaultButton 
                        onClick={() => {
                            setStepDetails({ currentPageIndex: stepDetails.currentPageIndex - 1 });
                        }}
                        disabled={
                            props.shouldDisablePrev()
                        }>
                        Back
                    </DefaultButton>
                }
            </Stack.Item>
            <Stack.Item>
                {
                    (stepDetails.currentPageIndex !== stepList.length - 1) &&
                    <PrimaryButton 
                        onClick={() => {
                            setStepDetails({ currentPageIndex: stepDetails.currentPageIndex + 1 });
                        }}
                        disabled={
                            props.shouldDisableNext()
                        }>
                        Next
                    </PrimaryButton>
                }
            </Stack.Item>
        </Stack>
    </footer >
}