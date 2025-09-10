import { useState } from 'react';

// Inline AccordionItem Component for a self-contained solution
const AccordionItem = ({ item, isOpen, onClick }) => {
  return (
    <div className="bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out hover:shadow-lg overflow-hidden my-4">
      <button
        className="flex justify-between items-center w-full p-6 text-xl font-semibold text-left text-[#152A4C] focus:outline-none"
        onClick={onClick}
      >
        <span>{item.title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {item.content.map((contact, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow-inner flex flex-col items-center text-center">
                <img 
                  src={contact.avatarUrl} 
                  alt={contact.name} 
                  className="w-20 h-20 rounded-full mb-4" 
                  onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/80x80/cccccc/333333?text=User'; }}
                />
                <h4 className="text-lg font-semibold text-[#152A4C]">{contact.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{contact.subheading}</p>
                {contact.phone && contact.phone !== 'N/A' && (
                  <p className="text-gray-700"><strong>Phone:</strong> <a href={`tel:${contact.phone}`} className="text-[#4CAF50] hover:underline">{contact.phone}</a></p>
                )}
                {contact.landline && contact.landline !== 'N/A' && (
                  <p className="text-gray-700"><strong>Landline:</strong> <a href={`tel:${contact.landline}`} className="text-[#4CAF50] hover:underline">{contact.landline}</a></p>
                )}
                {contact.fax && contact.fax !== 'N/A' && (
                  <p className="text-gray-700"><strong>Fax:</strong> {contact.fax}</p>
                )}
                {contact.email && contact.email !== 'N/A' && (
                  <p className="text-gray-700">
                    <strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-[#4CAF50] hover:underline">{contact.email}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  const accordionData = [
    {
      title: 'Online Booking Feedback and Support',
      content: [
        {
          name: 'Tourist Info Center',
          subheading: 'Online Booking (10:00AM to 05:00PM)',
          phone: '9102403884',
          landline: 'N/A',
          fax: 'N/A',
          email: 'jtdcltd@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Technical Support',
          subheading: 'Online Booking (Monday to Saturday, 10:00AM to 05:00PM)',
          phone: 'N/A',
          landline: 'N/A',
          fax: 'N/A',
          email: 'jtdcltd@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        }
      ]
    },
    {
      title: 'Department of Tourism Art Culture, Sports and Youth Affairs',
      content: [
        {
          name: 'Shri Manoj Kumar (IAS)',
          subheading: 'Secretary, Department of Tourism, Art Culture, Sports and Youth Affairs',
          phone: 'N/A',
          landline: 'N/A',
          fax: '0651-2400982',
          email: 'govjharkhandtourism@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Smt. Vijaya N. Jadhav, IAS',
          subheading: 'Director Tourism',
          phone: 'N/A',
          landline: '0651-2400493',
          fax: '0651-2400492',
          email: 'dirjharkhandculture@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        }
      ]
    },
    {
      title: 'Directorate of Tourism',
      content: [
        {
          name: 'Smt. Vijaya N. Jadhav, IAS',
          subheading: 'Director Tourism',
          phone: 'N/A',
          landline: '0651-2400493',
          fax: '0651-2400492',
          email: 'dirjharkhandculture@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        }
      ]
    },
    {
      title: 'Jharkhand Tourism Development Corporation (JTDCL)',
      content: [
        {
          name: 'Shri Prem Ranjan (JAS)',
          subheading: 'Managing Director',
          phone: 'N/A',
          landline: '0651-2331828',
          fax: 'N/A',
          email: 'jtdcltd@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Shri Rajeev Kr. Singh, JAS',
          subheading: 'General Manager(Finance)',
          phone: 'N/A',
          landline: '0651-2331828',
          fax: 'N/A',
          email: 'jtdcltd@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
      ]
    },
    {
      title: 'JTDC Hotels',
      content: [
        {
          name: 'Hotel Prabhat Vihar, Netarhat',
          subheading: 'Hotel Manager',
          phone: '9102403883',
          landline: 'N/A',
          fax: 'N/A',
          email: 'hotelprabhatvihar@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Birsa Vihar, Ranchi',
          subheading: 'Hotel Manager',
          phone: '7632987037',
          landline: 'N/A',
          fax: 'N/A',
          email: 'birsaviharjtdc@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Van Vihar, Betla',
          subheading: 'Hotel Manager',
          phone: '9102403882',
          landline: 'N/A',
          fax: 'N/A',
          email: 'vanviharjtdc@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Natraj Vihar, Deoghar',
          subheading: 'Hotel Manager',
          phone: '9102403877',
          landline: 'N/A',
          fax: 'N/A',
          email: 'hotelnatrajvihar@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Baidanath Vihar, Deoghar',
          subheading: 'Hotel Manager',
          phone: '9102403877',
          landline: 'N/A',
          fax: 'N/A',
          email: 'hotelbaidyanathvihar@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Ratan Vihar, Dhanbad',
          subheading: 'Hotel Manager',
          phone: '9102403878',
          landline: 'N/A',
          fax: 'N/A',
          email: 'hotelratanvihar@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Complex, Tenughat',
          subheading: 'Hotel Manager',
          phone: '9102403879',
          landline: 'N/A',
          fax: 'N/A',
          email: 'tctenughat@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Complex, Itkhori',
          subheading: 'Hotel Manager',
          phone: '9102403881',
          landline: 'N/A',
          fax: 'N/A',
          email: 'tcitkhori@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Hotel Basuki Vihar, Basukinath',
          subheading: 'Hotel Manager',
          phone: '9102403876',
          landline: 'N/A',
          fax: 'N/A',
          email: 'hotelbasukivihar@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Complex, Trikut',
          subheading: 'Hotel Manager',
          phone: '7091591308',
          landline: 'N/A',
          fax: 'N/A',
          email: 'tctrikut@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Wayside Amenity , Madhupur',
          subheading: 'Hotel Manager',
          phone: '7091591307',
          landline: 'N/A',
          fax: 'N/A',
          email: 'waysideamenityjtdc@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Sarovar Vihar, Patratu Lake Resort',
          subheading: 'Hotel Manager',
          phone: '9905900149',
          landline: 'N/A',
          fax: 'N/A',
          email: 'sarovarviharpatratu@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'WSA, Bagodar',
          subheading: 'Hotel Manager',
          phone: '8789020527',
          landline: 'N/A',
          fax: 'N/A',
          email: 'bagodarwsa@gmail.com',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
      ]
    },
    {
      title: 'Tourist Info. Center (TIC)',
      content: [
        {
          name: 'Tourist Information Center, JTDC HQ',
          subheading: 'Manager TIC',
          phone: '9102403884',
          landline: 'N/A',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Information Center, Kolkata',
          subheading: 'Manager TIC',
          phone: '8697094790',
          landline: '0332-2820601',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Information Center, Deoghar',
          subheading: 'Manager TIC',
          phone: '9102403877',
          landline: 'N/A',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Information Center, Parasnath',
          subheading: 'Manager TIC',
          phone: '7091591310',
          landline: 'N/A',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Information Center, Airport, Ranchi',
          subheading: 'Manager TIC',
          phone: '9771334050',
          landline: 'N/A',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'TIC, Ranchi Railway Station, Ranchi',
          subheading: 'Manager TIC',
          phone: '9771334050',
          landline: 'N/A',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Tourist Information Center, Dhanbad',
          subheading: 'Manager TIC',
          phone: 'N/A',
          landline: '0326-2311022',
          fax: 'N/A',
          email: 'N/A',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
        {
          name: 'Manoranjan Mangaraj',
          subheading: 'Director',
          phone: '7209997776',
          landline: 'N/A',
          fax: 'N/A',
          email: 'sales@destination-unlimited.in',
          avatarUrl: 'https://png.pngtree.com/png-vector/20220807/ourmid/pngtree-man-avatar-wearing-gray-suit-png-image_6102786.png'
        },
      ]
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <div className="relative w-full h-48 md:h-64 rounded-xl overflow-hidden mb-8">
        <img 
          src="https://tourism.jharkhand.gov.in/app-assets/images/common-banner.jpg" 
          alt="Contact Us Banner" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-[#152A4C] bg-opacity-70 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl font-bold text-[#152A4C] text-center mb-8">STAFF DIRECTORY</h2>
        
        <div className="accordion-wrapper max-w-4xl mx-auto">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact;
