import './Home.css';

export function Home(){
  return(
    <div id="home">
      <h1>Hello!</h1>
      <p id="aboutme">
        My name is Adam Winter! I&apos;m a 19 year old computer science student currently enrolled 
        at Dawson College!
        <br/>
        I&apos;m currently part of Dawson&apos;s robotics club and am captain of it&apos;s website team. <br />
        As a team captain I&apos;m in charge of teaching members the basics of web development using react js and 
        ensuring everyone has a role and work to do!
      </p>
      <div id="skills">
      <h2>Skills</h2>
      <p>Languages: Java, C#, python, Javascript, SQL, PL/SQL, Kotlin</p>
      <p>Frameworks: React, Flask, Avalonia</p>
      <p>Tools: Git, Visual Studio, Android Studio, Oracle SQL Developer </p>
      </div>
    </div>
  );
}