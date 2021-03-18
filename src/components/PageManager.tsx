import * as React from "react";
import { NavContext } from "../context/NavContext";
import { IStepPageMap } from "./Wizard";

export const PageManager = ({ steps }: { steps: IStepPageMap[] }) => {
  const { stepDetails } = React.useContext(NavContext);
  return steps[stepDetails.currentPageIndex].element;
};
