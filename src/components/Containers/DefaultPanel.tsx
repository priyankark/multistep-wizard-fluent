import * as React from "react";
import { Panel, PanelType } from "@fluentui/react/lib/Panel";
import { IContainerProps } from "../Wizard";
import { getContainerStyleBasedOnResolution } from "../../utilities/helpers";
import { FontWeights } from "@fluentui/react/lib/Styling";
import { initializeIcons } from "@fluentui/react/lib/Icons";

initializeIcons();

export const DefaultPanel = (props: IContainerProps) => {
  const onRenderFooter = () => {
    return props.Footer ?? null;
  };
  return (
    <Panel
      isOpen={props.isOpen}
      headerText={props.headerText}
      type={PanelType.custom}
      customWidth={getContainerStyleBasedOnResolution().panelWidth}
      onDismiss={props.onDismiss}
      closeButtonAriaLabel={props.closeButtonAriaLabel ?? "close"}
      onRenderFooterContent={onRenderFooter}
      isFooterAtBottom={true}
      styles={{
        scrollableContent: { overflowY: "hidden" },
        headerText: { fontSize: 14, fontWeight: FontWeights.bold },
        commands: { marginTop: 10 },
        footer: {
          borderTopStyle: "solid",
          borderTopColor: "rgb(237, 235, 233)",
          borderTop: 1,
        },
        header: {
          borderBottomStyle: "solid",
          borderBottomColor: "rgb(237, 235, 233)",
          borderBottom: 1,
        },
      }}
    >
      {props.children}
    </Panel>
  );
};
