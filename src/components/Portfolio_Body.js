const PortfolioBody = () => {
    return (
    <body>

        <main id="project">  Projects </main>
            <aside id="projectAside">
                <p > Here are just a few of my coding projects:
                    <ul>
                        <li> HTML </li>
                        <li> CSS </li>
                        <li> Javascript </li>
                    </ul>
                </p>
            </aside>
            <p id="projectP"> Examples are listed below utilizing several of the concepts we learned
                in the Full Stack Academy Coding Bootcamp.</p>

            <section className="projectFlex">
            
                <section id="projectFlex1">
                    <h3 id="projectOne"> Project One </h3>
                        <img  className="projectPic" src="https://images.freeimages.com/images/large-previews/e5c/mill-house-1637156.jpg" alt="Project One"/>
                        <p className="flexText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>        

                <section id="projectFlex2">
                    <h3 id="projectTwo"> Project Two </h3>
                        <img  className="projectPic" src="https://images.freeimages.com/images/large-previews/3ee/rail-bridges-1637144.jpg" alt="Project Two"/>
                        <p className="flexText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>

                <section id="projectFlex3">
                    <h3 id="projectThree"> Project Three </h3>
                        <img  className="projectPic" src="https://images.freeimages.com/images/large-previews/bd8/red-train-and-rails-1637135.jpg" alt="Project Three"/>
                        <p className="flexText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>

                <section id="projectFlex4">
                    <h3 id="projectFour"> Project Four </h3>
                        <img className="projectPic" src="https://images.freeimages.com/variants/sYz6pakk6zGrtHMLcnTKpAJr/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" alt="Project Four"/>
                        <p className="flexText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </section>
            </section>
    
    
    </body>
    )
}

export default PortfolioBody;