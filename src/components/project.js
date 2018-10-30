import React, { Component } from 'react';

class Project extends Component {



    render() {
        // debugger;
        return (
            <article className="center mw5 mw6-ns hidden ba mv4">
                <h1 className="f4 bg-near-black white mv0 pv2 ph3 code">{this.props.project.title}</h1>
                <div className="pa3 bt">
                    <p className="f6 f5-ns lh-copy measure mv0 sans-serif" >
                       {this.props.project.description}
                    </p>
                    <br /><hr />
                    <div className='flex justify-around'>
                        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-yellow code">Live</button>
                        <button className="f6 link dim br-pill ba ph3 pv2 mb2 dib bg-blue code">Source</button>
                    </div>
                </div>
            </article>
        );
    }
}

export default Project;
