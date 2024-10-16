import "./ab.css";

const About = () => {
    return (
        <section  className="about-section py-5">
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-12">
                        <h1 id="about" className="text-center">About Us</h1>
                    </div>
                    
                    <div className="col-lg-6 mb-4 mb-lg-0 text-center">
                        <img 
                            src="https://pravin-potadar.github.io/PravinPotadar/assets/img/about.png" 
                            alt="About Me" 
                            className="img-fluid rounded about-img"
                        />
                    </div>
                    
                    <div className="col-lg-6" >
                        <h2 className="fade-in">Pravin Potadar</h2>
                        <h3 className="fade-in">A professional web designer & developer</h3>
                        <p className="fade-in">
                            I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores. My passion is to design digital user experiences through meaningful interactions.
                        </p>
                        <p className="fade-in" >
                            I design and develop services for customers specializing in creating stylish, modern websites, web services, and online stores.
                        </p>
                    </div>
                    <div className=" mt-5 col-lg-6 skills-content fade-in">
                        <h2>My Skills</h2>
                        <ul className="list-unstyled">
                            <li className="skill-item">HTML</li>
                            <li className="skill-item">CSS</li>
                            <li className="skill-item">Bootstrap</li>
                            <li className="skill-item">JavaScript</li>
                            <li className="skill-item">jQuery</li>
                            <li className="skill-item">React</li>
                        </ul>
                    </div>
                   
                    <div className=" mt-5 col-lg-6 education-content fade-in">
                        <h2>Education</h2>
                        <p><strong>2021-2025</strong><br />
                            Dr. Babasaheb Ambedkar Technological University<br />
                            Fabtech Technical Campus College of Engineering & Research Sangola<br />
                            <em>B.Tech in Computer Science & Engineering</em>
                        </p>
                        <p><strong>2021-2019</strong><br />
                            Kolhapur Divisional Board<br />
                            M V High School & Jr College Umadi<br />
                            <em>12th in Science</em>
                        </p>
                        <p><strong>2019-2018</strong><br />
                            Kolhapur Divisional Board<br />
                            M V High School & Jr College Umadi<br />
                            <em>10th</em>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
