import "./contact.css";
export function Contact() {
  return (
    <div id="contactSection" className="contentBlock">
      <section className="contentBody" id="contactBody">
        <aside id="contactInfo">
          <h1>Contact Me!</h1>
        </aside>
        <aside id="contactLinks">
          <a href="mailto:adamwintercs@gmail.com" id="Mail" className="contacts">
            <img src="/images/logos/mail.png" />
            <p> adamwintercs@gmail.com </p>
          </a>
          <a href="https://github.com/AdamSW1" id="GitHub" className="contacts">
            <img src="/images/logos/github-mark-white.svg" />
            <p>GitHub</p>
          </a>
          <a href="https://gitlab.com/AdamSW12" id="GitLab" className="contacts">
            <img src="/images/logos/gitlab-logo.png" />
            <p>GitLab</p>
          </a>
          <a href="https://www.linkedin.com/in/adam-winter-409bab2b1/" id="LinkedIn" className="contacts">
            <img src="images/logos/In-White-26.png" />
            <p>LinkedIn</p>
          </a>
        </aside>
      </section>
    </div>
  );
}
