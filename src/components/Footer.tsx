import * as React from 'react';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';
import { NavContext } from '../context/NavContext';
import { getContainerStyleBasedOnResolution } from '../utilities/helpers';

export const Footer = () => {
    const { stepDetails, setStepDetails, stepList } = React.useContext(NavContext);
    return <footer style={{ marginLeft: getContainerStyleBasedOnResolution().navWidth }}>
        <Stack horizontal horizontalAlign="space-between">
            <Stack.Item>
                {
                    (stepDetails.currentPageIndex !== 0) &&
                    <PrimaryButton onClick={() => setStepDetails({ currentPageIndex: stepDetails.currentPageIndex - 1 })}>
                        Back
                    </PrimaryButton>
                }
            </Stack.Item>
            <Stack.Item>
                {
                    (stepDetails.currentPageIndex !== stepList.length - 1) &&
                    <PrimaryButton onClick={() => setStepDetails({ currentPageIndex: stepDetails.currentPageIndex + 1 })}>
                        Next
                    </PrimaryButton>
                }
            </Stack.Item>
        </Stack>
    </footer>
}