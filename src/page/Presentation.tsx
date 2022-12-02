import { Link } from "react-router-dom";
import ButtonHeaderLeft from "../components/button/homepage/ButtonHeaderLeft";
import ButtonHeaderRight from "../components/button/homepage/ButtonHeaderRight";
import ButtonPresentation from "../components/button/presentationpage/ButtonPresentation";
import InputPresentation from "../components/button/presentationpage/InputPresentation";
import Image from "../components/image/HomeImage"

const presentation = () => (
    <><header className="App-header">
        <div className="Header_left">
            <ButtonHeaderLeft name="Mon Espace" />
            <ButtonHeaderLeft name="Offre" />;
            <ButtonHeaderLeft name="Candidature" />;
        </div>
        <div className="Header_right">
            <ButtonHeaderRight name="Se Connecter" />;
        </div>
    </header><section id="Page" className="Page">
            <div className="Baniere" id="Baniere">
                <div className="baniere_gauche">
                    <div className="img">
                        <Image />
                    </div>
                    <div className="bouton">
                        <InputPresentation name="Questionnaire Video"/>;
                        <Link to="Video">
                            <ButtonPresentation type="button" name="Quels est votre plus grande fierté"/>;
                        </Link>
                        <ButtonPresentation type="button" name="Question / Cv"/>;
                        <ButtonPresentation type="button" name="Question / Cv"/>;
                    </div>   
                </div>
                <div className="baniere_droite">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/CODE_YOUTUBE"
                    frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
                    picture-in-picture" allowFullScreen className="video"></iframe>    
                </div>
            </div>
        </section></>
);

export default presentation;