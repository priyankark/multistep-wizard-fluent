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
* **Footer: ** This component is a default footer component exposed by the package containing a 'Next' and 'Back' button. This is passed as a prop to the Wizard component. Alternatively, you may choose to supply your own footer component to the Wizard.
* **Stepper:**: This component represents a default Stepper component which can be passed as a prop to the Wizard component. Internally it uses a package called vertical-stepper-nav which was also built by us. Alternatively, you may choose to supply your own  Stepper component as a prop to the Wizard. 
* **NavContext:** This represents the 'Navigation Context.' It exposes several important methods that you can use to control which component gets shown on click of the buttons in the footer or for that matter control navigation from a custom stepper component that you may have chosen to supply to the Wizard component. 