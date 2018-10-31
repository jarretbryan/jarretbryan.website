import React, { Component } from 'react';

class Project extends Component {



    render() {
        // debugger;
        return (
            <article className="mv0 w-100 h-100 w-50-m w-25-l mw5 center">
                {/* <img src="http://placekitten.com/g/600/300" className="db w-100 br2 br--top" alt="Photo of a kitten looking menacing." /> */}
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h4 className="f5 f4-ns mv0 code">{this.props.project.title}</h4>
                            </div>
                        </div>
                        <p className="f6 lh-copy measure mt2 mid-gray">
                            {this.props.project.description}
                    </p>
                    <section className="">
                        <a className="link hover-gold b no-underline black dib code" href={this.props.project.live}>live</a> <span>|</span>| 
                        <a className="link b hover-blue no-underline black dib code" href={this.props.project.repo}>repo</a>
                    </section>
                    </div>
            </article>
        );
    }
}

export default Project;
