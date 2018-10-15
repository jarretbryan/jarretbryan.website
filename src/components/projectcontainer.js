import React, { Component } from 'react';
import Project from '../components/project'

import data from '../data/projects.json'

class ProjectContainer extends Component {

    state = {
        test: data
    }

    render() {
        return (
            <div className="flex flex-wrap">
                    <Project project={data.projects[0]} />
                    <Project project={data.projects[1]} />
                    <Project project={data.projects[2]} />
                    <Project project={data.projects[3]} />
            </div>
        );
    }
}

export default ProjectContainer;
