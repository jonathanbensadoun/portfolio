const scrollUtils = {
  scrollToTop: function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  },

  scrollToProjects: function () {
    const projectsElement = document.getElementById('projects');

    projectsElement.scrollIntoView({ behavior: 'smooth' });
  },
};

export default scrollUtils;
