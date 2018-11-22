import React from 'react'

const techstack = () => {
    return (
        <div className="vh-25 dt w-100 bg-black white sans-serif b">
            <div className="dtc v-mid ph3 ph4-l">

                <p className="code">Hi, my name is <span className="gold">Jarret</span>. I'm a NYC based full-stack web developer and technologist. I graduated from Brown University in 2014 with a degree in Science & Technology Studies.</p>
                <p className="code ma0"> I'm particularly interested in exploring the ways that technology informs and transforms our everyday. If you're interested in me or my work, you can download <a href="/J_Bryan_Resume.pdf" className="link dim gold">my resume </a> or <a href="mailto:jarret.bryan@gmail.com" className="link dim gold">email me</a>.</p>
            
                {/* <p className="v-mid measure-narrow lh-title mv0 center tc code">     
                        These words apply to me: <br />
                    <span className="bg-black-90 lh-copy white pa1 tracked-tight">
                        Ruby, Javascript (ES6), HTML5, CSS3, SQL | Sinatra, Rails, React, Redux, Choo | SQLite, PostgreSQL, ActiveRecord, Rspec, Capybara, Mocha, Jest | Git, Dat 
                    </span>
                </p> */}
            </div>
        </div>
    )
}

export default techstack








