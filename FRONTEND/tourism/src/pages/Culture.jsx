import React from 'react';

const Culture = () => {
  return (
    <section className="font-sans text-gray-900">
      
      {/* Main Hero Section */}
      <div className="relative w-full h-80 sm:h-96 rounded-b-[4rem] overflow-hidden shadow-2xl mb-16">
        <img 
          src="https://tourism.jharkhand.gov.in/app-assets/images/artandculture.jpg" 
          alt="Jharkhand Art and Culture" 
          className="absolute inset-0 w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-green-800/70 to-teal-900/80 flex items-center justify-center p-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-green-300">
            Jharkhand: Repository of one of India's Richest Ethnic Cultures
          </h1>
        </div>
      </div>

      {/* Content Section 1 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="bg-white/70 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <p className="text-gray-700 leading-relaxed text-lg">
                The cultural mosaic of Jharkhand was dreamt about, shaped and polished by generations of communities, which have inhabited this land since time immemorial. From the legendary Asurs and Santhals, to the Banjara, Bihor, Chero, Gond, Ho, Khond, Lohra, Mai Pahariya, Munda, Oraon, Kol or Kawar-over thirty-two tribal groups ($28\%$ of the total population of the state), have left their impression on the culture of the region. And with them, were the cross-cultural influences of local non-tribal communities and successive waves of Buddhism and Jainism, Mughal rule and the reign of the Hindu emperors of Bengal. Art historians ascribe the 'oldest cave paintings' in India, the "scroll paintings" to a Jharkhand tribe known as the Shabars, who today live on the edge of extinction. It is an established fact that Stone Age tools discovered in Hazaribagh district and axes and spearheads found in the Chaibasa area, are remnants of a civilization dating back a few thousand years. $10,000$ to $30,000$ years old rock paintings, paintings in huge caves in the Sati hills and other indicators of ancient, even pre-historic, human settlements are found in profusion.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/index.30_2.jpg" 
                alt="Tribal Art of Jharkhand" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Living Rhythms Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="bg-white/70 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">Living Rhythms</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Every ethnic community has the blood of tribal memory circling their hearts. Today the Adivasis of Jharkhand are coming back, not to the despair that has marked their recent history, but to the strong sounds of drums, flutes, cymbals and voices raised in song. When the tribes of Jharkhand gather to celebrate a very special occasion, whether at home or in village society, they make music and dance to its rhythm. Maybe it makes them happy because it brings that long memory back, into the framework of real life. It does not matter whether you understand the language or the lyrics of the song that they sing - ekhariya damckach, orjapi, jhumar, fagua, veer seren, jhika, philsanjha, adhratiya or bhinsariya, doad, asadi, jhumti, or dhuria or other important folk-songs - you will recognize that they yearn to carry ancient memory and culture into their lives today. Percussion, many kinds of percussion, along with a variety of musical instruments are used by Jharkhand tribes to accompany their singing and dancing. The Nagara, made of wood and stretched animal hide played with drumsticks. Interestingly nagaras sound the best in summers, in winter they lose their vibrant beat. The cylindrical Mandar, played by hand. Dhak, dhamsa, damana, Madan bhewri, ananad lahari, tuila, vyang, ar-bansi, shankh, karha, tasa, thala, ghanta, kadri and gupi jantra are some quaint instruments played.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/index.9.gif" 
                alt="Tribal Musicians" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Folk Dance Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">Folk Dances of Jharkhand</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Dance forms echo warrior-like movements of battles fought long ago. Observations of animal and bird behavior were also blended into the dancing, sometimes light and airy, sometimes heavy and solemn, as the mood demands.
        </p>
        
        {/* Paika Dance */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-2">Paika</h3>
            <p className="text-gray-700 leading-relaxed">
              Paika is one of the very famous dance forms of Jharkhand. In fact, it is a dance form where martial arts are mixed with some other dance steps. This is why the dance form is only performed by the male members of the society. Paika of Jharkhand is a very interesting dance form of the region. It offers a thrilling entertainment to your eyes as the men risk their lives to perform it. The dancers have to handle a sword in one hand and the shield in other. For protection, they are dressed with safety chest plates and head wears and bells are tied on their ankles. in Jharkhand is accompanied by the melodious music of Narsingha, Shahnai, Bheir and the Dhak and Nagara drums. This folk dance of Jharkhand is performed for welcoming guests during various functions. The whole ambience during the performance of this dance form is very charming. The dancers wearing their colorful robes along with the local tribes create fascinating scenery. The dance adds more glaze to the festivities.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/paika.jpg" alt="Paika Dance" className="w-full h-auto object-cover" />
          </div>
        </div>
        
        {/* Chhau Dance */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 mb-8 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-2">Chhau</h3>
            <p className="text-gray-700 leading-relaxed">
              Chhau is one of the finest folk dances of Chhota Nagpur Plateau region. The folk dance is performed in various states that lie in this region such as West Bengal, Bihar, Orissa and Jharkhand. The word Chhau is derived from the Sanskrit word Chhaya which implies shade, image, or mask. Chhau of Jharkhand is a very beautiful dance form where the dancers cover their faces during the dance with a mask and it is this mask that attracts your attention towards the dance. Chhau is different from classical dance because in the latter dance form facial expressions are must, whereas in Chhau, it is the body movements including the neck and head gesture. In Chhau, the dancers use the mask and their body gestures to convey the stories. A commentator stands aside who not only narrates the whole story with dialogues but also sings the songs. During Chhau in Jharkhand, music is played using various instruments such as Nagara, Jhanj, Mohuri, Turi, Clude Dhol, Dhumsa, Flute, Bheri and Conch shells. Over the years, this folk dance of Jharkhand has been classified into various forms but the most authentic and original version of the dance is available only in Jharkhand. The melodious music and the colorful dancers with their brilliant dancing skills intoxicate you so much that you do not feel like leaving the place before its completion. So if you like dancing and are always open to learn, then the best place to learn would be in Jhrakhand where the original version is performed. Some of the very famous stories that have been performed through Chhau in Jharkhand are Ramayana and Mahabharata.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/chhau_dance.jpg" alt="Chhau Dance" className="w-full h-auto object-cover" />
          </div>
        </div>
        
        {/* Santhal Dance */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 mb-8 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-2">Santhal</h3>
            <p className="text-gray-700 leading-relaxed">
              Santhal is a very popular folk dance of Jharkhand. It is a group dance performed by Santhal tribes of Jharkhand. This dance was performed by the Santhal tribes during all special festivals and occasions. This dance not only reveals the culture or traditions of the local tribes but also showcases the strength of unity. The main attraction of the dance in Jharkhand are the colorful costumes worn by the tribal people. The typical garments worn by men during the Santhal are dhoti and a turban but the main attraction is their body decoration with various species of flora. Since the Santhal are believed to be close to nature, they use natural things such as leaves, branches and flowers to do their make-up and design their clothes. If you wish to witness the fun and frolic of Santhal dance at Jharkhand then do visit it during the spring season for it is during this season that the Santhals celebrate the spring festival where they perform the folk dance. The colorful environment of the festival is made more charming and attractive by the musicians who play the music on various folk instruments such as cymbals, pipes, flutes and drums. Moreover, the singers also put the right chord with the rhythm. After, the Bamboo folk dance of Assam and Mizoram, it is the Santhal dance of Jharkhand which is very popular among the tourists of north eastern region. Moreover, the Santhal dance would also help you in exploring the life style and culture of the Santhals.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/santhal.jpg" alt="Santhal Dance" className="w-full h-auto object-cover" />
          </div>
        </div>
        
        {/* Karma Dance */}
        <div className="bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/20 mb-8 flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="w-full md:w-2/3 text-left">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-2">Karma</h3>
            <p className="text-gray-700 leading-relaxed">
              Karma is a very popular folk dance of India. Though the folk dance is performed in other states such as Bihar, Madhya Pradesh and Chhattisgarh, it can be enjoyed the best in Jharkhand. The folk dance is performed in the month of August during the Karma festival.This folk dance of Jharkhand has derived its name from a tree named Karma which is considered sacred because people believe that it brings good luck and prosperity. Hence the Karma festival is nothing but a celebration for the plantation of this tree. Karma at Jharkhand seeks the participation of both men and women. The festival starts with the plantation of trees after which the dancers get into a circle and dance with their hands around each other's waists. While dancing, they pass on the branch of the tree to each other. After the branch of Karma gets a complete circle, it is washed with milk and rice. It is the belief of the local tribes that after these rituals, the branch should not touch the earth. After this, once again the branch is raised in between the dancers. During the Karma of Jharkhand, the men leap forward with the rapid roll of the drums whereas the women bend down with their feet moving to and fro with the beats of the music. The dance of Karma in Jharkhand is accompanied by the melodious music of folk music instruments such as Jhumki, Thumki, Chhalla and Payri. Various forms of Karma are performed in various regions. The two most popular forms of Karma in Jharkhand are Lahsua and Khare. This dance in Jharkand is performed mainly by Baigas and Gonds.
            </p>
          </div>
          <div className="w-full md:w-1/3 rounded-3xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105">
            <img src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/karma.jpg" alt="Karma Dance" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      {/* Art, Craft and Living Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <div className="bg-white/70 backdrop-blur-lg p-8 sm:p-12 rounded-3xl shadow-xl border border-white/20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600">Art, Craft and Living</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Jharkhand is full of surprises. Archeaologists have unearthed pre-Harappan pottery, and pre-historic cave paintings and rock-art, that hint at ancient, cultured civilizations inhabiting these parts. Who exactly were the original settlers of Jharkhand? We will never truly know. But one look at the intricate woodwork, the pitkar paintings, tribal ornaments, stone carvings, dolls and figurines, masks and baskets, will tell you how deep into time these manifestations of culture go, how the well-spring of creativity continues to recharge the spirit of the tribes and the state itself.Among the most delicate, fragile, beautiful ands threatened indigenous traditions of India are for example, the Kohvar and Sohrai paintings, which are sacred, secular and relevant to a woman's world. This is the art practiced exclusively by married women, during weddings and at harvest time, and the skill and the information is handed down to younger females of the clan.Comb-cut or finger-painted, Kohvar art celebrates marriage, and the wall-painted Sohrai, bumper crops. Elaborate design motifs, animal and plant forms, fertility motifs are abundant and often echo ancient cave art found in the surrounds. The colours used are all natural - neutral earth shades, red oxide from stone, red ochre, kaolin white, manganese black earth etc.. Blue and green are aberrant colours and do not feature prominently. Jharkhand is known for its wood work, bamboo works, pitkar paintings, tribal ornaments and stone carving. The beautifully carved wood products and bamboo products show the craftsmanship of the people. Lack of promotion and marketing for these products has mostly resulted in extinction of some crafts like paitkar paintings and stone carvings. Wood Craft: Once a dense forest area, Jharkhand with the abundance of wood, resulted in the use this for creating variety of wood articles for household requirements. Bamboo: The bamboos found in the Jharkhand forest are thin but flexible and strong. Using these, the artisans of Jharkhand produce different artifacts like basket, haunting and fishing equipment.The people here are to be much involved into artistic approaches in whatever they work, to name some of the fame arts in this region could be Oraon Bhitichitra , Santhali Bhitichitra and Jado Patiya are the styles of paintings that still exist.
              </p>
            </div>
            <div className="w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105">
              <img 
                src="https://tourism.jharkhand.gov.in/cms/Application/uploadDocuments/content/index.23_1.jpg" 
                alt="Art and Craft" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Distinctive Traditions Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-green-600">Distinctive Traditions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tradition blocks */}
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-2">Oraon comb-cut paintings</h3>
            <p className="text-gray-700">Oraon comb-cut paintings can be traced back to ancient times. Images of cattle, feeding troughs, papyrus, birds, fish, plants, circled lotus, zigzag, square,opposing triangle geometric forms, arches in series - are common. Floral art forms are used during harvest time.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-2">Ganju</h3>
            <p className="text-gray-700">Ganju art forms are characterized by images of animals, wild and domesticated, and plant forms. Large murals of animals, birds, and floral exotica, decorate homes. Endangered animals are often depicted in picture-story tradition.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">Prajapati, Rana & Teli</h3>
            <p className="text-gray-700">Prajapati, Rana &Teli the three sub-castes decorate their homes with plant and animal fertility forms, using both finer painting and comb cutting techniques. The 'prajapati' style uses filigree work, with emphasis on zoomorphic plants representations and Pashupati (Siva) the God of Animals, and floral motifs filled with colour.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-2">Kurmi</h3>
            <p className="text-gray-700">Kurmi an unique style of 'sohrai', where drawing outlines are scratched onto the surface of a wall with nails and a wooden compass is used to etch the segmented lotus. Pashupati or Lord Shiva is depicted as a horned deity on the back of a bull. Red, black and white lines are drawn in pairs on either side to represent the ashes of ancestors. The Kurmis of Bhehwara use glyptic art to represent plants on the walls and floors of their homes.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-2">Mundas</h3>
            <p className="text-gray-700">Mundas use their fingers to paint in the soft, wet earth of their homes and use unique motifs like the rainbow snake and plant forms of deities. Lavender-gray coloured mud from rock-art sites next to Munda villages, are used with ochre mud as contrast colour.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">Ghatwals</h3>
            <p className="text-gray-700">Ghatwals use glyptic paintings of animals on their forest dwellings.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-green-600 mb-2">Turi</h3>
            <p className="text-gray-700">Turi who are a small community of basket-makers use predominantly floral and jungle-based motifs in natural earthy tones on the walls of their homes.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600 mb-2">Birhor & Bhuiya</h3>
            <p className="text-gray-700">Birhor & Bhuiya use simple, strong, and authentic graphic forms like 'mandalas', painting with their fingers. Crescents, stars, yoni, rectangles with corner petals, ovals with flared lines and concentric circles, are common.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white/20 transform transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600 mb-2">Manjhi Santhal</h3>
            <p className="text-gray-700">Manjhi Santhal - the striking warring figures painted in black on simple clay plaster walls are startling reminders that their origins probably had links with the Indus Valley civilization.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
