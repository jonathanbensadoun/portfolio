const scrollUtils = {
  /**
   * Scroll to top
   * @returns {void} Scroll to top
   */
  scrollToTop: function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },
  /**
   * Scroll to projects
   * @returns {void} Scroll to projects
   */
  scrollToProjects: function () {
    const projectsElement = document.getElementById('projects');

    projectsElement.scrollIntoView({ behavior: 'smooth' });
  },
  /**
   * Scroll to about
   * @returns {void} Scroll to about
   */
  scrollToContact: function () {
    const contactElement = document.getElementById('contact');

    contactElement.scrollIntoView({ behavior: 'smooth' });
  },
  /**
   * Scroll to description
   * @returns {void} Scroll to description
   */
  scrollToDescription: function () {
    const descriptionElement = document.getElementById('description');
    descriptionElement.scrollIntoView({ behavior: 'smooth' });
  },
};

export default scrollUtils;
