import { Separator } from '@fluentui/react/lib/Separator';
import { Stack } from '@fluentui/react/lib/Stack';
//import { mergeStyles } from '@fluentui/react/lib/Styling';
import * as React from 'react';
import { NavContextWrapper } from '../context/NavContext';
import { getContainerStyleBasedOnResolution } from '../utilities/helpers';
import { DefaultPanel } from './Containers/DefaultPanel';
import { PageManager } from './PageManager';
import { ScrollablePane, ScrollbarVisibility } from '@fluentui/react/lib/ScrollablePane';
//import { getTheme } from '@fluentui/react/lib/Styling';

//const theme = getTheme();
export interface IContainerProps {
    children: JSX.Element;
    isOpen: boolean;
    onDismiss?: () => void;
    headerText?: string;
    closeButtonAriaLabel?: string;
    Footer?: JSX.Element;
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
    Footer?: JSX.Element;
}

export const WizardMainContent = (props: IWizard) => {
    const { Stepper } = props;
    return <Stack tokens={{ maxHeight: 'calc(100vh - 110px)' }}>
        <Separator
            styles={{
                root: [
                    {
                        selectors: { '::before': { top: '100%' } },
                        height: 2,
                        paddingTop: 0,
                    },
                ],
            }} />
        <Stack horizontal tokens={{ maxHeight: 'inherit' }}>
            <Stack.Item
                styles={{
                    root: [
                        {
                            marginTop: 30,
                            selectors: {
                                '::-webkit-scrollbar': { width: '4px', height: '6px' },
                                '::-webkit-scrollbar-track': {
                                    borderRadius: '10px',
                                    background: 'rgba(0,0,0,0.05)',
                                },
                                '::-webkit-scrollbar-thumb': {
                                    borderRadius: '10px',
                                    background: 'rgba(0,0,0,0.1)',
                                },
                                '::-webkit-scrollbar-thumb:hover': {
                                    background: 'rgba(0,0,0,0.2)',
                                },
                                '::-webkit-scrollbar-thumb:active': {
                                    background: 'rgba(0,0,0,0.3)',
                                },
                            },
                            height: 'inherit',
                            overflowY: 'auto',
                            width: getContainerStyleBasedOnResolution().navWidth,
                        },
                    ],
                }}>
                <Stack>
                    <Stepper steps={props.steps} />
                </Stack>
            </Stack.Item>
            <Stack.Item>
                <Separator vertical styles={{ root: { padding: 0 } }} />
            </Stack.Item>
            <Stack grow={true} styles={{
                root: {
                    maxWidth: getContainerStyleBasedOnResolution().contentWidth,
                },
            }}>
                <Stack styles={{
                    root: {
                        height: 'inherit',
                        position: 'relative',
                        maxHeight: 'calc(100vh - 110px)',
                        minHeight: '80vh',
                        marginTop: 30,
                        marginLeft: 30
                    },
                }}>
                    <ScrollablePane scrollbarVisibility={ScrollbarVisibility.auto}>
                        <PageManager steps={props.steps} />
                    </ScrollablePane>
                </Stack>
            </Stack>
        </Stack>
    </Stack >
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