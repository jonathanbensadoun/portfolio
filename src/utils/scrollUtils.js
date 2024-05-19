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
  scrollToContact: function () {
    const contactElement = document.getElementById('contact');

    contactElement.scrollIntoView({ behavior: 'smooth' });
  },
  scrollToDescription: function () {
    const descriptionElement = document.getElementById('description');
    descriptionElement.scrollIntoView({ behavior: 'smooth' });
  },
};

export default scrollUtils;
