import Image from 'next/image';
import Link from 'next/link';

export const data = [
  {
    "id": 1,
    "slug": "andean-llama",
    "image_url": "https://images.unsplash.com/photo-1682024619121-aabb0305a496?w=600&auto=format&fit=crop&q=60",
    "heading": "The Majestic Andean Llama",
    "description": "Standing tall against the verdant slopes, the llama remains a vital part of high-altitude ecosystems.",
    "content": "The Andean Llama (Lama glama) is a South American camelid, widely used as a meat and pack animal by Andean cultures since the Pre-Columbian era. Standing tall against the verdant slopes, these majestic creatures are perfectly adapted to the thin air and rugged terrain of the high Andes. Their distinctive silhouette, characterized by their long neck and confident posture, is a common sight in the mountainous regions of Peru, Bolivia, Ecuador, Chile, and Argentina.\n\nBeyond their utility as pack animals, llamas play a crucial ecological role. As grazers, they help maintain the health of the high-altitude grasslands. Their soft padded feet minimize soil erosion compared to hooved livestock, making them environmentally friendly stewards of their habitat. Their wool, which comes in a variety of colors from white to black and brown, provides essential warmth for local communities against the biting mountain winds, serving as a renewable resource for clothing and textiles."
  },
  {
    "id": 2,
    "slug": "high-altitude",
    "image_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop",
    "heading": "High Altitude Habitats",
    "description": "The rugged terrain of the Andes offers a breathtaking backdrop for local wildlife.",
    "content": "The rugged terrain of the Andes offers a breathtaking backdrop for local wildlife, characterized by steep peaks, deep valleys, and expansive plateaus known as the Altiplano. Navigating these rocky slopes requires agility and endurance in oxygen-thin environments, a feat that local fauna like the llama, alpaca, and vicuña perform with grace.\n\nThese high-altitude habitats are subject to extreme weather conditions, including intense solar radiation during the day and freezing temperatures at night. The vegetation here is sparse and tough, consisting mainly of ichu grass and low-lying shrubs. Despite these harsh conditions, life thrives. The ecosystem supports a unique biodiversity that has evolved specific adaptations to survive and reproduce at elevations exceeding 4,000 meters above sea level."
  },
  {
    "id": 3,
    "slug": "resilience",
    "image_url": "https://images.unsplash.com/photo-1594734567623-b8f43e13078a?w=600&auto=format&fit=crop&q=60",
    "heading": "Adaptation and Resilience",
    "description": "Evolution has equipped these creatures with unique physiological traits to thrive.",
    "content": "Evolution has equipped Andean creatures with unique physiological traits to thrive where others cannot. One of the most remarkable adaptations is their blood composition; they have a high count of red blood cells, which allows for efficient oxygen transport in the thin mountain air. This resilience enables them to graze and travel long distances at altitudes where human breathing becomes difficult.\n\nTheir keen senses and social structures ensure survival in the wilderness. Llamas and their relatives possess excellent eyesight and hearing, allowing them to detect predators such as pumas and foxes from a distance. Their thick, double-layered coats provide insulation against the cold, while their digestive systems are highly efficient at extracting nutrients from the poor-quality forage available in the highlands."
  },
  {
    "id": 4,
    "slug": "social-dynamics",
    "image_url": "https://images.unsplash.com/photo-1672713543300-437d12564280?w=600&auto=format&fit=crop&q=60",
    "heading": "Social Dynamics of the Herd",
    "description": "Llamas are highly social animals that rely on group cohesion for protection.",
    "content": "Llamas are highly social animals that rely on group cohesion for protection and wellbeing. A typical herd consists of females, their young (crias), and a dominant male. This social structure is vital for their defense against predators. A lead alpha often keeps watch from a high vantage point while the rest of the herd grazes on sparse mountain vegetation.\n\nCommunication within the herd is complex and involves a variety of vocalizations, body postures, and ear positions. Humming is a common sound used to express distinct emotions or to keep contact with the herd. When threatened, they can let out a rhythmic alarm call to warn others. This strong sense of community and mutual awareness is key to their survival in the exposed and often dangerous landscape of the Andes."
  },
  {
    "id": 5,
    "slug": "conservation",
    "image_url": "https://images.unsplash.com/photo-1637580981046-6e14709be202?w=600&auto=format&fit=crop&q=60",
    "heading": "Conservation of the Highlands",
    "description": "Protecting these natural corridors is essential for maintaining biodiversity.",
    "content": "Protecting these natural corridors is essential for maintaining biodiversity in the Andean region. The delicate balance of high-altitude ecosystems is increasingly threatened by climate change, mining activities, and overgrazing. Conservation efforts are now focusing on sustainable land management practices that respect both the traditional ways of local communities and the needs of the wildlife.\n\nPrograms to protect the vicuña, the wild ancestor of the alpaca, have been particularly successful, bringing the species back from the brink of extinction. Similar efforts are being applied to protect the habitats of llamas and other Andean fauna. Sustainable tourism and the promotion of ethically sourced natural fibers are helping to create economic incentives for conservation, ensuring that both the wildlife and the local communities can thrive together for generations to come."
  }
]

export default function LlamaPage() {
  return (
    <main className="min-h-screen bg-theme-section p-8 md:p-16 m-2 rounded-md ">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {data.map((item) => (
          <Link href={`/blog/${item.slug}`} key={item.id} className="flex flex-col md:flex-row gap-8 items-start group cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full md:w-[400px] aspect-video overflow-hidden rounded-sm">
              <Image
                src={item.image_url}
                alt={item.heading}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-theme-primary group-hover:opacity-80 transition-colors">
                {item.heading}
              </h2>
              <p className="text-theme-secondary leading-relaxed text-sm md:text-base max-w-2xl">
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}