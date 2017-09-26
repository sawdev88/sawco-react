import React from 'react';

const Footer = (props) => {
  return (
    <footer id="footer" className="center-text">

      <form className="email" action="index.html" method="post">
        <label for="email-list">sign up for the email list</label>
        <br />
        <input type="email" name="email-list" value="" />
        <button type="submit" name="button">join</button>
      </form>

      <div className="legal-nonsense">
        <span>© 2017. all rights reserved.</span>
      </div>
      <script src="./js/main.js" charset="utf-8"></script>
    </footer>
  )
}

export default Footer;
