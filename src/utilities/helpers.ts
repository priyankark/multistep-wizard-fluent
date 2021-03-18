export const getContainerStyleBasedOnResolution = () => {
    const screenWidth = window.screen.width;
    if (screenWidth < 1600) {
      return {
        panelWidth: '85%',
        navWidth: '25vw',
        contentWidth: '65vw',
      };
    } else {
      return {
        panelWidth: '62%',
        navWidth: '30vw',
        contentWidth: '70vw',
      };
    }
  };
  