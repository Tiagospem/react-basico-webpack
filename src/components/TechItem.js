import React from 'react'
import PropTypes from 'prop-types'

function TechItem({tech, onDelete}){
  return (
    <li key={tech}>
      {tech}
      <button onClick={ onDelete }>Remover</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'oculto'
}
TechItem.propTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
}

export default TechItem;