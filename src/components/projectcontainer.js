import React, { Component } from 'react';
import Project from '../components/project'

class ProjectContainer extends Component {
    render() {
        return (
            <div className="cf">
                <div className="fl w-third pa2">
                    <Project title="Radiowired"/>
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
