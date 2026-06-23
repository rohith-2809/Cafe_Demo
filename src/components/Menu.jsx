import { useEffect, useRef, useState } from 'react'

const MENU_CARDS = [
  {
    category: 'Espresso Drinks',
    title: 'The Classics',
    items: [
      { name: 'Cortado', desc: 'equal parts, no rush', price: '₹120' },
      { name: 'Flat White', desc: 'velvety, twice pulled', price: '₹140' },
      { name: 'Piccolo', desc: 'strong, small, honest', price: '₹110' },
    ],
  },
  {
    category: 'Pour Overs',
    title: 'Single Origins',
    items: [
      { name: 'Ethiopian Yirgacheffe', desc: 'bright, floral, alive', price: '₹180' },
      { name: 'Colombian Huila', desc: 'caramel, balanced, clean', price: '₹170' },
      { name: 'Blend of the Week', desc: 'ask your barista', price: '₹160' },
    ],
  },
  {
    category: 'Bites',
    title: 'Small Plates',
    items: [
      { name: 'Brown Butter Banana Bread', desc: 'warm on request', price: '₹90' },
      { name: 'Ricotta Toast + Honey', desc: 'house-made ricotta', price: '₹130' },
      { name: 'Almond Croissant', desc: 'baked at 6am daily', price: '₹110' },
    ],
  },
]

export default function Menu() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="menu" ref={ref} className="py-28 bg-cream">
      <div className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Menu Hero Image */}
        <div className="w-full h-64 md:h-96 mb-20 relative">
          <img 
            src="/Menu_Hero_image.jpg" 
            alt="Barista pouring coffee" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-ink/30 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="font-playfair text-4xl text-cream md:text-6xl mb-4 tracking-wide">
                What We Serve
              </h2>
              <p className="text-cream/90 font-light text-lg tracking-wider">
                A short menu, done well.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          {/* Coffee & Bites Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {MENU_CARDS.map((card) => (
              <div
                key={card.title}
                className="group border border-divider bg-card-bg rounded-lg p-8 transition-all duration-300 hover:-translate-y-1 hover:border-latte shadow-sm"
              >
                <span className="text-xs tracking-widest text-muted uppercase">
                  — {card.category}
                </span>
                <h3 className="mt-3 font-playfair text-2xl text-espresso">
                  {card.title}
                </h3>
                <hr className="my-5 border-t border-latte" />
                <ul className="space-y-5">
                  {card.items.map((item) => (
                    <li key={item.name} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-normal text-ink">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted italic">{item.desc}</p>
                      </div>
                      <span className="shrink-0 text-sm text-muted">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Extended Food Menu Section */}
          <div className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="text-xs tracking-widest text-muted uppercase block mb-4">
                Beyond Coffee
              </span>
              <h3 className="font-playfair text-4xl text-espresso mb-6">
                Hearty Plates
              </h3>
              <p className="text-muted font-light leading-relaxed mb-8">
                Because sometimes you need more than a pastry. Our extended food menu features warm, comforting dishes made from scratch, perfect for a slow afternoon or a light dinner. Pair them with a filter coffee or a cold brew.
              </p>
              
              <ul className="space-y-6">
                <li className="flex items-start justify-between gap-4 border-b border-divider pb-4">
                  <div>
                    <p className="text-lg font-playfair text-ink">Aglio e Olio Pasta</p>
                    <p className="text-sm text-muted italic mt-1">Garlic, olive oil, parsley, parmesan</p>
                  </div>
                  <span className="shrink-0 text-md text-espresso mt-1">₹320</span>
                </li>
                <li className="flex items-start justify-between gap-4 border-b border-divider pb-4">
                  <div>
                    <p className="text-lg font-playfair text-ink">Mushroom Truffle Toast</p>
                    <p className="text-sm text-muted italic mt-1">Sourdough, wild mushrooms, truffle oil</p>
                  </div>
                  <span className="shrink-0 text-md text-espresso mt-1">₹280</span>
                </li>
                <li className="flex items-start justify-between gap-4 border-b border-divider pb-4">
                  <div>
                    <p className="text-lg font-playfair text-ink">Classic Caprese Sandwich</p>
                    <p className="text-sm text-muted italic mt-1">Fresh mozzarella, tomatoes, basil pesto</p>
                  </div>
                  <span className="shrink-0 text-md text-espresso mt-1">₹250</span>
                </li>
              </ul>
            </div>
            
            <div className="order-1 md:order-2">
              <img 
                src="/Pasta_Menu.webp" 
                alt="Aglio e Olio Pasta" 
                className="w-full h-auto rounded-lg object-cover aspect-square shadow-sm" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
