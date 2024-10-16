import "./Content1.css";

const Data1 = () => {
    return (
        <div className="container" id="home">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 text-center text-lg-start">
                    <h6 className="fade-in">Hello, I'm Pravin Potadar</h6>
                    <h1 className="fade-in">I am a Professional Web Designer & Developer</h1>
                    <a href="../Pravin.pdf" className="btn btn-primary download-btn fade-in" download>
                        <i className="fas fa-download"></i> Resume
                    </a>
                </div>

                <div className="col-lg-6 col-md-12 text-center">
                    <img 
                        src="https://pravin-potadar.github.io/PravinPotadar/assets/img/man.png" 
                        alt="Pravin Potadar"
                        className="img-fluid animated-img" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Data1;
