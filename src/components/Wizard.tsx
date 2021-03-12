import { Separator } from '@fluentui/react/lib/Separator';
import { Stack } from '@fluentui/react/lib/Stack';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import * as React from 'react';
import { NavContextWrapper } from '../context/NavContext';
import { getContainerStyleBasedOnResolution } from '../utilities/helpers';
import { DefaultPanel } from './Containers/DefaultPanel';
import { PageManager } from './PageManager';

export interface IContainerProps {
    children: JSX.Element;
    isOpen: boolean;
    onDismiss?: () => void;
    headerText?: string;
    closeButtonAriaLabel?: string;
    Footer?: React.ReactElement;
}

export enum ContainerType {
    PANEL
}

export interface IStepPageMap {
    label: string;
    element: JSX.Element;
}

export interface IStepper {
    steps: IStepPageMap[]
}

export interface IWizard {
    containerType: ContainerType,
    Stepper: (props: IStepper) => JSX.Element,
    steps: IStepPageMap[],
    isOpen: boolean,
    onDismiss?: () => void,
    headerText?: string,
    closeButtonAriaLabel?: string;
    Footer?: React.ReactElement;
}

export const WizardMainContent = (props: IWizard) => {
    const { Stepper } = props;
    return <Stack>
        <Stack horizontal tokens={{ childrenGap: 10 }}>
            <Stack styles={{
                root: {
                    maxWidth: getContainerStyleBasedOnResolution().navWidth,
                    marginTop: 30
                },
            }}>
                <Stepper steps={props.steps} />
            </Stack>
            <Stack.Item className={mergeStyles({
                height: 'calc(100vh - 110px)',
            })}>
                <Separator vertical styles={{ root: { padding: 0 } }} />
            </Stack.Item>
            <Stack styles={{
                root: {
                    maxWidth: getContainerStyleBasedOnResolution().contentWidth,
                    marginTop: 30
                },
            }}>
                <PageManager steps={props.steps} />
            </Stack>
        </Stack>
    </Stack>
}


export const Wizard = (props: IWizard) => {
    if (props.containerType === ContainerType.PANEL) {
        return <NavContextWrapper initialStepList={props.steps}>
            <DefaultPanel isOpen={props.isOpen} Footer={props.Footer} headerText={props.headerText} onDismiss={props.onDismiss} closeButtonAriaLabel={props.closeButtonAriaLabel} >
                <WizardMainContent {...props} />
            </DefaultPanel>
        </NavContextWrapper>
    }
    return <NavContextWrapper initialStepList={props.steps}>
        <WizardMainContent {...props} />
    </NavContextWrapper>
}