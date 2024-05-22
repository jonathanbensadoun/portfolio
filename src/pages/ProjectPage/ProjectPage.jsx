import { useParams } from 'react-router-dom';
import scrollUtils from '../../utils/scrollUtils';
import { useEffect } from 'react';
import ProjectDetail from '../../components/Projects/ProjectDetail';
import Osurvivors from '../../data/Osurvivors.json';
import Dinoto from '../../data/Dinoto.json';
import DinotoAPI from '../../data/DinotoAPI.json';
import { useDispatch, useSelector } from 'react-redux';
import DinotoAPIText from '../../data/DinotoAPIText.json';
import DinotoText from '../../data/DinotoText.json';
import OsurvivorsText from '../../data/OsurvivorsText.json';

export default function ProjectPage() {
  const dispatch = useDispatch();
  const { title } = useParams();
  const data = title;
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
  }, []);
  return (
    <div>
      <ProjectDetail
        url={
          title === 'Osurvivors'
            ? 'https://osurvivors.netlify.app/'
            : title === 'Dinoto'
            ? 'https://dinoto.netlify.app/'
            : title === 'DinotoAPI'
            ? 'https://dinotoapi.com/doc'
            : null
        }
        title={title}
        shortDescription={
          title === 'Osurvivors'
            ? language === 'FR'
              ? OsurvivorsText[0].shortDescriptionFR
              : OsurvivorsText[0].shortDescriptionEN
            : title === 'Dinoto'
            ? language === 'FR'
              ? DinotoText[0].shortDescriptionFR
              : DinotoText[0].shortDescriptionEN
            : title === 'DinotoAPI'
            ? language === 'FR'
              ? DinotoAPIText[0].shortDescriptionFR
              : DinotoAPIText[0].shortDescriptionEN
            : null
          // title === 'Osurvivors'
          //   ? OsurvivorsText[0].shortDescriptionFR
          //   : title === 'Dinoto'
          //   ? DinotoText[0].shortDescriptionFR
          //   : title === 'DinotoAPI'
          //   ? DinotoAPIText[0].shortDescriptionFR
          //   : null
        }
        description={
          title === 'Osurvivors'
            ? language === 'FR'
              ? OsurvivorsText[0].descriptionFR
              : OsurvivorsText[0].descriptionEN
            : title === 'Dinoto'
            ? language === 'FR'
              ? DinotoText[0].descriptionFR
              : DinotoText[0].descriptionEN
            : title === 'DinotoAPI'
            ? language === 'FR'
              ? DinotoAPIText[0].descriptionFR
              : DinotoAPIText[0].descriptionEN
            : null
        }
        technologies={
          title === 'Osurvivors'
            ? Osurvivors
            : title === 'Dinoto'
            ? Dinoto
            : title === 'DinotoAPI'
            ? DinotoAPI
            : null
        }
      />
    </div>
  );
}
