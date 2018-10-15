import React, { Component } from 'react';
import Project from '../components/project'

import data from '../data/projects.json'

class ProjectContainer extends Component {

    state = {
        test: data
    }

    render() {
        return (
            <div className="cf">
                <div className="fl w-third pa2">
                    <Project project={data.projects[0]} />
                </div>
                <div className="fl w-third pa2">
                    <Project />
                </div>
                <div className="fl w-third pa2">
                    <Project />
                 </div>
            </div>
        );
    }
}

export default ProjectContainer;
