import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Perform the form submission
    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = formData.get('goto');
        } else {
          // Handle error case
          console.error('Form submission error');
        }
      })
      .catch((error) => {
        console.error('Form submission error', error);
      });
  };

  return (
    <form
      action="//secure.whatcounts.com/bin/listctrl"
      method="post"
      onSubmit={handleSubmit}
    >
      <input name="slid" value="6B5869DC547D3D46650B4D6780487885" type="hidden" />
      <input name="cmd" value="subscribe" type="hidden" />
      <input name="goto" value="https://newint.org/newsletter/success/" type="hidden" />
      <input name="custom_source_web_quickjoin" value="1" type="hidden" />
      <input name="custom_is_double_optin" value="1" type="hidden" />
      <input name="custom_source_web_sub_page" value="Interactive feature: abortion in Ethiopia" type="hidden" />
      <input name="custom_pref_monthly_edition" value="1" type="hidden" />
      <input name="format" value="html" type="hidden" />

      <label htmlFor="email">Enter your email address</label>
      <br />
      <input
        className="email-field"
        name="email"
        placeholder="you@site.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input className="btn" value="Sign-up" type="submit" />
    </form>
  );
};

export default NewsletterForm;
