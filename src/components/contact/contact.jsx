import React from "react";
import "./contact.css";

const contact = () => {
    return (
        <section className="contact container section" id="contact">
            <h2 className="section__title">Nous Contacter</h2>

            <div className="contact__container grid">
                <div className="contact__info">
                    <h3 className="contact__title">Parlons de tout !</h3>
                    <p className="contact__details">
                        Vous n'aimez pas les formulaires ? Envoyez-nous un email.
                    </p>
                </div>
                <form action="" className="contact__form">
                    <div className="contact__form-group">
                        <div className="contact__form-div">
                            <input type="text" className="contact__form-input" placeholder="votre nom" />
                        </div>
                        <div className="contact__form-div">
                            <input type="email" className="contact__form-input" placeholder="votre email" />
                        </div>
                    </div>
                    <div className="contact__form-div">
                        <input type="text" className="contact__form-input" placeholder="votre sujet" />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <textarea name="" id="" cols="30" row="10" className="contact__form-input" placeholder="Rédigez votre message" />
                    </div>
                    <button className="btn">Envoyer le message</button>
                </form>
            </div>
        </section>
    )
}

export default contact