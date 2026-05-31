import { useState } from 'react';
import { Mail, MapPin, Send, Check } from 'lucide-react';
import { Github, Linkedin, Twitter } from './Icons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message to backend API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="section-header">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations, project inquiries, or just to say hello.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-info">
          <div className="contact-method-card glass-panel">
            <div className="contact-icon-box">
              <Mail size={22} />
            </div>
            <div>
              <div className="contact-method-title">Email Me</div>
              <a href="mailto:sahilkumar.dev@example.com" className="contact-method-value">
                sahil.kumar@example.com
              </a>
            </div>
          </div>

          <div className="contact-method-card glass-panel">
            <div className="contact-icon-box">
              <MapPin size={22} />
            </div>
            <div>
              <div className="contact-method-title">Location</div>
              <div className="contact-method-value">New Delhi, India</div>
            </div>
          </div>

          <div style={{ padding: '24px' }} className="glass-panel">
            <div className="contact-method-title" style={{ marginBottom: '16px' }}>
              Connect Socially
            </div>
            <div className="social-links">
              <a
                href="https://github.com/sahilkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/sahilkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/sahilkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Twitter Profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card glass-panel">
          {isSubmitted ? (
            <div className="form-success-message">
              <div className="success-icon-box">
                <Check size={36} />
              </div>
              <h3>Thank You!</h3>
              <p style={{ color: '#9ca3af', marginTop: '10px', maxWidth: '400px' }}>
                Your message has been sent successfully. Sahil will get back to you as soon as possible.
              </p>
              <button
                className="btn btn-secondary"
                style={{ marginTop: '24px' }}
                onClick={() => setIsSubmitted(false)}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <span style={{ color: '#ff007f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <span style={{ color: '#ff007f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project Collaboration"
                />
                {errors.subject && (
                  <span style={{ color: '#ff007f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                    {errors.subject}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Hi Sahil, I would love to discuss a project..."
                />
                {errors.message && (
                  <span style={{ color: '#ff007f', fontSize: '0.85rem', marginTop: '4px', display: 'block' }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
