import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3 code">hi</h1>
                <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0 sans-serif">
                        {this.props.project.description}
                    </p>
                </div>
            </article>
        );
    }
}

export default Project;
