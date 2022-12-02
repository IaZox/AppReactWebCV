import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Routes, Link, Form } from "react-router-dom";
import ButtonHeaderLeft from "../components/button/homepage/ButtonHeaderLeft";
import ButtonTest from "../components/button/homepage/ButtonTest";
import ButtonTestAdd from "../components/button/homepage/ButtonTestAdd";
import ButtonHeaderRight from "../components/button/homepage/ButtonHeaderRight";
import Formulaire from "../components/formulaire/Form";
import Image from "../components/image/HomeImage"
import ButtonHomePage from "../components/button/homepage/ButtonHomePage"

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header_left">
          <Link to="Connect">
            <ButtonHeaderLeft name="Mon Espace" />
          </Link>
          <ButtonHeaderLeft name="Offre" />;
          <ButtonHeaderLeft name="Candidature" />;
        </div>
        <div className="Header_right">
          <Link to="Login">
            <ButtonHeaderRight name="Se Connecter" />;
          </Link>
        </div>
      </header>
      <section id="Page" className="Page">
        <div className="Page01" id="Page01">
          <div className="img">
            <Image/>       
          </div>
          <div className="bouton">
              <Link to="Presentation">
                <ButtonHomePage name="Présentations"/>;
              </Link>
              <ButtonHomePage name="Mes projets" />;
              <ButtonHomePage name="Mes compétences" />;
              <ButtonHomePage name="Mes Ressources" />;
          </div>
        </div>
      </section>
    </div>
  )
};

export default Home;
