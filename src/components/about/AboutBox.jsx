import React from "react";

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <i className="about__icon icon-fire"></i>
                <div>
                    <h3 className="about__title">198</h3>
                    <span className="about__subtitle">consectetur adipiscing</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-cup"></i>
                <div>
                    <h3 className="about__title">1000</h3>
                    <span className="about__subtitle">Sed non risus</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-people"></i>
                <div>
                    <h3 className="about__title">427</h3>
                    <span className="about__subtitle">Suspendisse lectus</span>
                </div>
            </div>
            <div className="about__box">
                <i className="about__icon icon-badge"></i>
                <div>
                    <h3 className="about__title">35</h3>
                    <span className="about__subtitle">dignissim sit amet</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox