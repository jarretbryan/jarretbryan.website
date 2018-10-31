import React, { Component } from 'react';
import Project from '../components/project'

import data from '../data/projects.json'

class ProjectContainer extends Component {


    mapData = (index) => {
        return data.projects.map(project => <Project project={project} key={index} />)
    }

    render() {
        return (
            <div className="flex flex-wrap">
                    {this.mapData()}
            </div>
        );
    }
}

export default ProjectContainer;
