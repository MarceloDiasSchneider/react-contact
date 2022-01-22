function Contact({img, name, phone, email}) {
  return (
    <div className="contact-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <div className="info-group">
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Contact;
