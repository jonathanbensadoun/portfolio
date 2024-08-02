import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import scrollUtils from '../../utils/scrollUtils';
import ProjectDetail from '../../components/Projects/ProjectDetail';
import Osurvivors from '../../data/Osurvivors.json';
import Dinoto from '../../data/Dinoto.json';
import DinotoAPI from '../../data/DinotoAPI.json';
import DinotoAPIText from '../../data/DinotoAPIText.json';
import DinotoText from '../../data/DinotoText.json';
import OsurvivorsText from '../../data/OsurvivorsText.json';
import NimbusText from '../../data/NimbusText.json';
import Nimbus from '../../data/Nimbus.json';

import Loader from '../../components/Loader/Loader';
import { showreaload } from '../../store/slices/projectSlice';

export default function ProjectPage() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { title } = useParams();

  const language = useSelector((state) => state.project.language);
  useEffect(() => {
    scrollUtils.scrollToTop();
  }, []);
  useEffect(() => {
    function handleDOMContentLoaded() {
      dispatch(showreaload(true));
    }

    document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

    return () => {
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
    };
  }, [dispatch]);
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    setTimeout(handleLoad, 1000);
  }, []);
  const getUrl = (name) => {
    switch (name) {
      case 'Osurvivors':
        return 'https://osurvivors.netlify.app/';
      case 'Dinoto':
        return 'https://dinoto.netlify.app/';
      case 'DinotoAPI':
        return 'https://dinotoapi.com/doc';
      case 'Nimbus':
        return 'https://nimbus-sky.netlify.app/';
      default:
        return null;
    }
  };
  const getShortDescription = (titleDescription, languageDescription) => {
    switch (titleDescription) {
      case 'Osurvivors':
        return languageDescription === 'FR'
          ? OsurvivorsText[0].shortDescriptionFR
          : OsurvivorsText[0].shortDescriptionEN;
      case 'Dinoto':
        return languageDescription === 'FR'
          ? DinotoText[0].shortDescriptionFR
          : DinotoText[0].shortDescriptionEN;
      case 'DinotoAPI':
        return languageDescription === 'FR'
          ? DinotoAPIText[0].shortDescriptionFR
          : DinotoAPIText[0].shortDescriptionEN;
      case 'Nimbus':
        return languageDescription === 'FR'
          ? NimbusText[0].shortDescriptionFR
          : NimbusText[0].shortDescriptionEN;
      default:
        return null;
    }
  };
  const getDescription = (titleDescription, languageDescription) => {
    switch (titleDescription) {
      case 'Osurvivors':
        return languageDescription === 'FR'
          ? OsurvivorsText[0].descriptionFR
          : OsurvivorsText[0].descriptionEN;
      case 'Dinoto':
        return languageDescription === 'FR'
          ? DinotoText[0].descriptionFR
          : DinotoText[0].descriptionEN;
      case 'DinotoAPI':
        return languageDescription === 'FR'
          ? DinotoAPIText[0].descriptionFR
          : DinotoAPIText[0].descriptionEN;
      case 'Nimbus':
        return languageDescription === 'FR'
          ? NimbusText[0].descriptionFR
          : NimbusText[0].descriptionEN;
      default:
        return null;
    }
  };
  const getTechnologies = (titleTechnologies) => {
    switch (titleTechnologies) {
      case 'Osurvivors':
        return Osurvivors;
      case 'Dinoto':
        return Dinoto;
      case 'DinotoAPI':
        return DinotoAPI;
      case 'Nimbus':
        return Nimbus;
      default:
        return null;
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ProjectDetail
          url={getUrl(title)}
          title={title}
          shortDescription={getShortDescription(title, language)}
          description={getDescription(title, language)}
          technologies={getTechnologies(title)}
        />
      )}
    </div>
  );
}
