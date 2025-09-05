const AccordionItem = ({ item, isOpen, onClick }) => {
    const ChevronDownIcon = ({ className }) => (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      );
    
      const PhoneIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V3z" />
        </svg>
      );
    
      const PrinterIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7V9h6v3z" clipRule="evenodd" />
        </svg>
      );
    
      const MailIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      );
    
    return (
        <div className="accordion-item">
            <button
                onClick={onClick}
                className={`accordion-header ${isOpen ? 'open' : ''}`}
            >
                <span>{item.title}</span>
                <ChevronDownIcon
                className={`chevron-icon ${isOpen ? 'open' : ''}`}
                />
            </button>

            <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                <div className="accordion-content-inner">
                    {item.content && item.content.length > 0 ? (
                        <div className="content-grid">
                        {item.content.map((person, index) => (
                            <div key={index} className="person-card">
                                <img src={person.avatarUrl} alt={person.name} className="person-avatar" />
                                <p className="person-booking-time">{person.bookingTime}</p>
                                <h3 className="person-name">{person.name}</h3>
                                <div className="person-contact-container">
                                    <div className="contact-info-row">
                                    <PhoneIcon />
                                    <span>{person.phone}</span>
                                    </div>
                                    <div className="contact-info-row">
                                    <PhoneIcon />
                                    <span>{person.landline}</span>
                                    </div>
                                    <div className="contact-info-row">
                                    <PrinterIcon />
                                    <span>{person.fax}</span>
                                    </div>
                                    <div className="contact-info-row">
                                    <MailIcon />
                                    <span>{person.email}</span>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    ) : (
                        <p className="no-details">No details available for this section.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccordionItem