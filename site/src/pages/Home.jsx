import "./Home.css";
import { Featured } from "../components/featured";

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
                Hi, I&apos;m a 19 year old computer science student currently
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
    </>
  );
}
