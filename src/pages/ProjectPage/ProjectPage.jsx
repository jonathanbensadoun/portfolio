import { useParams } from 'react-router-dom';
import scrollUtils from '../../utils/scrollUtils';
import { useEffect } from 'react';
import ProjectDetail from '../../components/Projects/ProjectDetail';
import Osurvivors from '../../data/Osurvivors.json';
import Dinoto from '../../data/Dinoto.json';
import DinotoAPI from '../../data/DinotoAPI.json';

export default function ProjectPage() {
  const { title } = useParams();
  const data = title;
  useEffect(() => {
    scrollUtils.scrollToTop();
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
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at volutpat pharetra, nisl nisl congue erat, nec interdum justo risus at est. Nulla facilisi.'
        }
        description={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc at volutpat pharetra, nisl nisl congue erat, nec interdum justo risus at est. Nulla facilisi.'
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
