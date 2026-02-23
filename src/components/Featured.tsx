const specializations = [
  "Corporate summits and conferences",
  "Luxury weddings and private celebrations",
  "Music festivals and cultural events",
  "Product launches and brand activations",
  "Hybrid and virtual events",
];

const eventTypes = [
  { name: "Trade Events", icon: "🤝" },
  { name: "Corporate Events", icon: "🏢" },
  { name: "Special Events", icon: "✨" },
  { name: "Exhibitions", icon: "🖼️" },
  { name: "Open Business", icon: "📂" },
  { name: "Fair", icon: "🎪" },
  { name: "Press Conference", icon: "🎙️" },
  { name: "Festival", icon: "🎶" },
  { name: "Master Class", icon: "🎓" },
  { name: "Conference", icon: "📊" },
  { name: "Team Building", icon: "🧩" },
  { name: "Ceremony", icon: "🏛️" },
  { name: "Wedding Day", icon: "💍" },
  { name: "VIP Event", icon: "⭐" },
];

const services = [
  {
    title: "Contractor Selection",
    items: [
      "Hosts, photographers, videographers",
      "Decorators, coordinators, hostesses",
      "Models, stylists, florists, pyrotechnicians",
    ],
  },
  {
    title: "Music & Shows",
    items: [
      "Company anthems & commercial jingles",
      "Music for individuals / events",
      "Artists, musicians, DJs from other countries",
      "Dance shows: drummers, cabaret, ballerinas",
      "Magic shows: tricks, light shows",
      "Circus: gymnasts, stiltwalkers, mimes",
      "Special effects: neons, lasers, fire shows",
      "Bartender shows",
    ],
  },
  {
    title: "Creative Production",
    items: [
      "Writing scripts, directors, staging",
      "Master classes: drawing, pastry, manufactures",
      "Themed quests for children and adults",
      "Children's event organization",
    ],
  },
  {
    title: "Event Management",
    items: [
      "Management of corporate and private events",
      "Regatta organization",
      "Business breakfasts",
      "Cultural and official event staging",
    ],
  },
];

export default function Featured() {
  return (
    <div id="services" className="bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-16 lg:py-0">
        <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
          <img
            src="/images/woman-horse.jpg"
            alt="Grand event atmosphere"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
          <h3 className="uppercase mb-4 text-xs tracking-widest text-neutral-500">Who We Are</h3>
          <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-light">
            Five continents. One standard — <span className="font-bold">exceptional.</span>
          </p>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            We specialize in:
          </p>
          <ul className="space-y-3 mb-8">
            {specializations.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-neutral-700 text-sm md:text-base">
                <span className="text-neutral-400 mt-1">—</span>
                {item}
              </li>
            ))}
          </ul>
          <a href="#contact" className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
            Get in touch
          </a>
        </div>
      </div>

      <div className="px-6 py-20 bg-neutral-50">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Event Types & Capabilities</h2>
        <p className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">We deliver:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {eventTypes.map((type, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-4 bg-white border border-neutral-200 hover:border-neutral-900 transition-all duration-300 group"
            >
              <span className="text-3xl mb-3">{type.icon}</span>
              <span className="text-xs text-neutral-700 font-medium uppercase tracking-wide leading-tight group-hover:text-neutral-900">
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 py-20 bg-white">
        <h2 className="text-xs uppercase tracking-widest text-neutral-500 mb-3">Full Scope</h2>
        <p className="text-3xl md:text-4xl font-bold text-neutral-900 mb-12">General list of event organization services</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div key={i}>
              <h4 className="font-bold text-neutral-900 uppercase tracking-wide text-sm mb-4 pb-3 border-b border-neutral-200">
                {service.title}
              </h4>
              <ul className="space-y-2">
                {service.items.map((item, j) => (
                  <li key={j} className="text-neutral-600 text-sm leading-relaxed flex gap-2">
                    <span className="text-neutral-300 shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
