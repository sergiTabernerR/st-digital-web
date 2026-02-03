import React from 'react';

const SolutionsGrid = ({ setView }) => {
  const items = [
    { 
      title: 'Desarrollo', 
      id: 'Desarrollo', // Exacto como en App.js
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' 
    },
    { 
      title: 'DevOps', 
      id: 'Devops', // ¡OJO! En tu App.js pusiste 'Devops' (o minúscula)
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=400' 
    },
    { 
      title: 'Outsourcing', 
      id: 'Outsourcing', // Exacto como en App.js
      img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400' 
    }
  ];

  return (
    <section className="bg-white pb-20 text-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 uppercase">
          Soluciones a medida
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div 
                className="overflow-hidden rounded-xl mb-4 h-56 shadow-md"
                onClick={() => { setView(item.id); window.scrollTo(0,0); }}
              >
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
              </div>
              <h4 className="font-black uppercase text-sm mb-1">{item.title}</h4>
              <button 
                onClick={() => { setView(item.id); window.scrollTo(0,0); }}
                className="text-blue-600 text-xs font-black hover:underline"
              >
                Leer más &gt;
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;