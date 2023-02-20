const HomeBody = () => {
    return (
    <div> 

        <section id="asidePersonal">
            <h1 id="personal"> Background </h1>
        </section>

        <div id="jayhawk"> <a href="https://www.ku.edu"><img id="jayhawkPic" src="https://brand.ku.edu/sites/brand/files/styles/wide_col_xl_6/public/images/2020/KUMarks_Jayhawk.png?h=caf14453&itok=xMjEBOzE" alt="Jayhawk Logo"></img> </a></div>

        <section id="bodyFlex">
       {/* <h3 id="education"> Education / Work History </h3>     */}
            <div id="edFlex"> 
                    
                    <p className="KU"> Education </p>
                    <h1> University of Kansas</h1>
                    
                    <ul>
                        <li> Bachelor of Arts
                            <ul> 
                                <li> Major in Communication Studies </li>
                                <li> Minor in French</li>
                            </ul>
                        </li>
                        <li> Graduated in May 2008</li>
                        <li> Continuing education 2009-2012</li>
                            <ul>
                                <li>Focused on Exercise Science</li>
                            </ul>
                    </ul>
                    <h1> Colorado State University</h1>
                    <ul>
                        <li> Professional Tech Bootcamp
                            <ul>
                                <li> Through Fullstack Academy </li>
                            </ul>
                        </li>
                        <li> Expected Graduation in April 2023</li>
                            <ul>
                                <li> Frontend </li>
                                <li> Backend </li>
                            </ul>
                    </ul>
                
            </div>    
            <div id="workFlex">  
                    <p className="KU"> Work Experience </p>
                    <ul>
                        <li> Personal Trainer </li>
                        <li> Service Industry </li>
                        <li> Operations Manager </li>
                            <ul>
                                <li> UPS 2010-2015 </li>
                                <li> <a href="https://drinkveritas.com">Veritas Selections</a> 2016-2021</li>
                            </ul>
                        <li> Maintenance Manager</li>
                            <ul>
                                <li> <a href="https://investedpm.com">Invested Property Management</a> 2021-2022 </li>
                            </ul>
                        
                    </ul>
                
            </div>
        </section>
        <div id="ram"> <a href="https://www.colostate.edu"> <img id="ramPic" src="https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617.jpg" alt="Ram Pic"></img> </a> </div>
        
        
     </div>
    )
}

export default HomeBody;


/* WILL INSERT A RESUME ONCE COMPLETED INTO THIS SECTION TO TAKE CARE OF BOTH EDUCATION AND WORK EXPERIENCE. */