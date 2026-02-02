import React from 'react';

const SolutionsGrid = () => (
  <section className="bg-white pb-20 text-black">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Soluciones a medida para el éxito de tu proyecto</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { title: 'Desarrollo', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' },
          { title: 'DevOps', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=400' },
          { title: 'Outsourcing', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400' }
        ].map((item, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-4 h-56">
              <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt={item.title} />
            </div>
            <h4 className="font-bold uppercase text-sm mb-1">{item.title}</h4>
            <span className="text-set-blue text-xs font-bold group-hover:underline">Leer más &gt;</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsGrid;