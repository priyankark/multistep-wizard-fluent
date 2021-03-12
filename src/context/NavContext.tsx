import * as React from 'react';
import { IStepPageMap } from '../components/Wizard';

interface INavContext {
    stepDetails: {
        currentPageIndex: number,
    },
    setStepDetails: any,
    stepList: IStepPageMap[],
    setStepList: any
}

export const NavContext= React.createContext<INavContext>({
    stepDetails: {
        currentPageIndex: 0,
    },
    setStepDetails: () => { },
    stepList: [], 
    setStepList: ()=>{}
});

export const NavContextWrapper = (props: {initialStepList: IStepPageMap[], children: JSX.Element}) => {
    const [stepDetails, setStepDetails] = React.useState({
        currentPageIndex: 0,
    });
    const [stepList, setStepList] = React.useState(props.initialStepList);
    return <NavContext.Provider value={{ stepDetails, setStepDetails, stepList, setStepList }}>
        {props.children}
    </NavContext.Provider>
}