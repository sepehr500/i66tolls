import React from 'react';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';

const About = () => (
  <div>
    <h1> About <i>Should I take I66?</i></h1>
    <h3>
      Should I take I66? Is an open source toll monitoring
      app and should be used for estimation purposes only.
    </h3>
    <Divider style={{ marginBottom: '10px' }} />
    <h1>Contact us</h1>
    <h2>Suggestions? Let us know!</h2>

    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact" />
      <TextField
        name="message"
        hintText="message"
        multiLine
        rows={2}
        rowsMax={4}
      />
      <p>
        <button type="submit">Send</button>
      </p>
    </form>


  </div>
);

export default About;
