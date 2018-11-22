import React, { Component, Fragment } from 'react';
import Project from '../components/project'

import data from '../data/projects.json'

class ProjectContainer extends Component {


    mapData = (index) => {
        return data.projects.map(project => <Project project={project} key={index} />)
    }

    render() {
        return (
            <div className="tc vh-50">
                <h4 className= "ma0 pa2 underline code">Selected Projects:</h4>
                <div className="flex flex-wrap white ">
                        {this.mapData()}
                </div>
            </div>
        );
    }
}

export default ProjectContainer;
