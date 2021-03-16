# multistep-wizard-fluent
An easy-to-use multi-step Wizard component using Fluent design.

Published at https://www.npmjs.com/package/multistep-wizard-fluent

Usage Example: https://codesandbox.io/s/winter-shape-n7v8n?file=/src/App.tsx

Screenshot: 

![Screenshot](https://snipboard.io/oaHrPJ.jpg)



### Getting Started

* Make sure you have the latest versions of node and npm installed.
* From your terminal run `npm install --save multistep-wizard-fluent`  in the root directory of your project to install and add this package as  a dependency.

### Usage Instructions

The package exposes 4 major components:
* **Wizard:** This component represents the whole N-step wizard along with the container.
* **Footer:**  This component is a default footer component exposed by the package containing a 'Next' and 'Back' button. This is passed as a prop to the Wizard component. Alternatively, you may choose to supply your own footer component to the Wizard.
* **Stepper:**: This component represents a default Stepper component which can be passed as a prop to the Wizard component. Internally it uses a package called vertical-stepper-nav which was also built by us. Alternatively, you may choose to supply your own  Stepper component as a prop to the Wizard. 
* **NavContext:** This represents the 'Navigation Context.' It exposes several important methods that you can use to control which component gets shown on click of the buttons in the footer or for that matter control navigation from a custom stepper component that you may have chosen to supply to the Wizard component. 

### Sample Usage

Use the example from https://codesandbox.io/s/winter-shape-n7v8n?file=/src/App.tsx

Explanation of the props to pass to the Wizard component:

* isOpen: A boolean which controls the visibility of the Wizard
* containerType: Currently it only takes the value 0 to make the Wizard use 'Panel' from fluent ui as the container. We are working on adding support for other contianers like Modal.
* steps: steps is a an array of label and element pairs. The label represents the text shown in the stepper and element represents a React component representing the screen to show corresponding to that label.
* Stepper: Stepper represents the stepper component you want to supply. You can supply a custom Stepper or simply use the one from the package. If you wish to customize the stepper, head to src/components/Stepper.tsx to see how the stepper is implemented in this package and follow a similar template. (We shall add examples soon).
* Footer: Represents the footer in the panel. Again you may choose to build your own and for that follow the template in src/components/Footer.tsx
* headerText: Text describing the Wizard.
* onDismiss : A function representing what should happen when user hits the cross icon.

### Explaining NavContext

The whole Wizard is wrapped with the NavContext which is just a Context defining functions for navigating around different screens from the footer (on press of next/back buttons) or the stepper buttons and also to get information on the current screen the user is in. Refer the interface INavContext to check on the functions available and you can choose to modify the default Footer component's code to have your own custom behavior for the footer (fore example a footer with additional buttons).

### For Additional Support

For more help, consider adding a new issue and we shall be glad to assist you. This component is still undergoing more development and we would be glad to hear on any feedback.