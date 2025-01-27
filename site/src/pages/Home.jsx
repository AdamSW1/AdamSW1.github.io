import "./Home.css";
import { Contact } from "./contact";
import { Featured } from "./featured";

export function Home() {
  return (
    <>
      <div className="contentBlock">
        <section className="contentBody">
          <h1>Adam Winter</h1>
          <h2>Aspiring Junior Software developer</h2>
          <div id="fold">
            <section id="foldLeftSide">
              <p id="aboutMe">
                Hi! I&apos;m computer science student currently
                enrolled at Dawson College!
                <br />
                I&apos;m currently part of Dawson&apos;s robotics club and am
                captain of it&apos;s website team. <br />
                As a team captain I&apos;m in charge of teaching members the
                basics of web development using react js and ensuring everyone
                has a role and work to do!
              </p>
              <div id="skills">
                <h2>Skills</h2>
                <p>
                  Languages: Java, C#, python, Javascript, SQL, PL/SQL, Kotlin
                </p>
                <p>Frameworks: React, Flask, Avalonia</p>
                <p>
                  Tools: Git, Visual Studio, Android Studio, Oracle SQL
                  Developer{" "}
                </p>
              </div>
            </section>
            <div id="myPhoto">
              <img src="/images/me.png" alt="A picture of me" />
            </div>
          </div>
        </section>
      </div>
      <Featured />
      <Contact />
      <footer>
        <div id="footerIcons">
        <a href="mailto:adamwintercs@gmail.com" id="Mail" className="contacts">
              <img src="/images/logos/mail.png" />
            </a>
            <a href="https://github.com/AdamSW1" id="GitHub" className="contacts">
              <img src="/images/logos/github-mark-white.svg" />
            </a>
            <a href="https://gitlab.com/AdamSW12" id="GitLab" className="contacts">
              <img src="/images/logos/gitlab-logo.png" />
            </a>
            <a href="https://www.linkedin.com/in/adam-winter-409bab2b1/" id="LinkedIn" className="contacts">
              <img src="images/logos/In-White-26.png" />
            </a>
        </div>
        <p>Adam Winter</p>
      </footer>
    </>
  );
}
