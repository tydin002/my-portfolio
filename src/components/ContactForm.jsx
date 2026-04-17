import { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="cf-name">Name</label>
      <input
        id="cf-name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="name"
      />
      <label htmlFor="cf-email">Email</label>
      <input
        id="cf-email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <label htmlFor="cf-msg">Message</label>
      <textarea
        id="cf-msg"
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit" className="btn-primary">
        Send
      </button>
      {sent && (
        <p className="contact-form__thanks" role="status">
          Thanks! (FYI this form is front-end only — doesn&apos;t actually email me yet lol)
        </p>
      )}
    </form>
  );
}

export default ContactForm;
