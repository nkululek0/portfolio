$(document).ready(function () {
  /**
   * Global Selectors related to the project slider.
   */
  const projectsContentSelector = ".projects-content";
  const projectsSelector = `${ projectsContentSelector } .project-container`;
  const projectButtonSelector = `${ projectsContentSelector } .project-arrow-button`;
  const projectsLeftButtonsSelector = `${ projectsContentSelector } .left-arrow`;
  const projectsRightButtonsSelector = `${ projectsContentSelector } .right-arrow`;

  /**
   * Classes that will be used to make web page dynmaic.
   */
  const classActive = "active";

  /**
   * The state of the project slider
   */
  const projectSliderState = {
    slideIndex: 0,
    length: $(projectsSelector).length -1,
    slides: $(projectsSelector)
  }

  /**
   * Event logic: For going to previous projects when clicking left arrow button
   */
  $(projectsLeftButtonsSelector).on("click", function () {
    showProjects(-1);
  });

  /**
   * Event logic: For going to next projects when clicking right arrow button
   */
  $(projectsRightButtonsSelector).on("click", function () {
    showProjects(1);
  });

  /**
   * Event logic: Reveals arrow buttons for projects section so that navigation is possible.
   */
  $(`${ projectsSelector }, ${ projectButtonSelector}`)
    .on("mouseover", function () {
      $(projectButtonSelector).addClass(classActive);
    })
    .on("mouseout", function () {
      $(projectButtonSelector).removeClass(classActive);
    });


  /**
   * Hides and Reveals projects in project slider.
   * @param { Number } n Number of times that the project slider should navigate.
   */
  function showProjects(n) {
    projectSliderState.slideIndex += n;
    let slides = projectSliderState.slides;
  
    if (projectSliderState.slideIndex > projectSliderState.length) {
      projectSliderState.slideIndex = 0;
    } else if (projectSliderState.slideIndex < 0) {
      projectSliderState.slideIndex = projectSliderState.length;
    }
  
    slides.removeClass(classActive);
    $(slides[projectSliderState.slideIndex]).addClass(classActive);
  }
});