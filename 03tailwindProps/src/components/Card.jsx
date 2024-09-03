// Card.js
function Card({ username, btnText = 'Visit Me' }) {
    console.log("props", username);
    
    const cardsData = [
      {
        id: 1,
        title: 'Nike Airmax v2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?',
        imageUrl: 'https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60'
      },
      // Add more card data objects if needed
    ];
  
    return (
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
        {cardsData.map((card) => (
          <div key={card.id} className="relative aspect-[16/9] w-auto rounded-md md:aspect-auto md:h-[400px]">
            <img
              src={card.imageUrl}
              alt={card.title}
              className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
              <h1 className="text-lg font-semibold text-white">{card.title}</h1>
              <p className="mt-2 text-sm text-gray-300">
                {card.description}
              </p>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {btnText}
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Card;
  