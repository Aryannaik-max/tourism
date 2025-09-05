import { useState } from 'react';
import AccordionItem from '../components/AccordionItem'

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
    <div className="contact_us">
        <div className="banner">
            <img src="https://tourism.jharkhand.gov.in/app-assets/images/common-banner.jpg" alt="" />
            <div className="banner-text">
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className="heading">
            <h2>STAFF DIRECTORY</h2>
        </div>
        <div className="dropdowns">
            <div className="app-container">
              <div className="accordion-wrapper">
                <h1 className="main-title">Contact & Support</h1>
                {accordionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    item={item}
                    isOpen={openIndex === index}
                    onClick={() => handleItemClick(index)}
                  />
                ))}
              </div>
              <button className="info-button">
                i
              </button>
          </div>
        </div>
    </div>
  )
}

export default Contact