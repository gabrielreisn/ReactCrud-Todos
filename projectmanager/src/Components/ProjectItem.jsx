import * as React from 'react';
import PropTypes from 'prop-types';

const ProjectItem = ({ project, onDelete }) => {
  const handleDelete = () => onDelete(project.id);

  return (
    <li className="Projects">
      <strong>{project.title}</strong>
      {`: ${project.category}`}
      <button type="button" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};

ProjectItem.defaultProps = {
  project: {},
  onDelete: () => {},
};

ProjectItem.propTypes = {
  project: {
    title: PropTypes.string,
    category: PropTypes.string,
  },
  onDelete: PropTypes.func,
};

export default ProjectItem;
