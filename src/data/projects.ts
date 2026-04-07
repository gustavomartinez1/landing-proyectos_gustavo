export interface Project {
  id: string;
  name: string;
  type: string;
  category: string;
  description: string;
  url: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "monstera-cafe",
    name: "Monstera. Café",
    type: "Cafetería",
    category: "Landing one-page",
    description:
      "Sitio para cafetería de especialidad en Aguascalientes. Menú interactivo por categorías, formulario de eventos vía WhatsApp, horarios dinámicos y Google Maps.",
    url: "https://cdf5e477.cafe-monstera.pages.dev",
    image: "/images/projects/monstera-cafe.webp",
    tags: ["menú interactivo", "WhatsApp", "Google Maps"],
  },
  {
    id: "viajes-3m",
    name: "Viajes 3M",
    type: "Agencia de viajes",
    category: "Landing one-page",
    description:
      "Sitio para agencia de viajes en Aguascalientes. Destinos, ofertas, información de contacto y CTA a WhatsApp.",
    url: "https://gustavomartinez1.github.io/viajes3m-landing/",
    image: "/images/projects/viajes-3m.webp",
    tags: ["destinos", "ofertas", "WhatsApp"],
  },
  {
    id: "toroperro",
    name: "Torperro",
    type: "Cafetería",
    category: "Landing one-page con agenda de eventos",
    description:
      "Sitio para cafetería con secciones de servicios, galería y formulario de cotización de eventos directo a WhatsApp.",
    url: "https://toroperro.pages.dev/",
    image: "/images/projects/toroperro.webp",
    tags: ["servicios", "galería", "cotización eventos"],
  },
  {
    id: "villa-del-mar",
    name: "Villa del Mar",
    type: "Restaurante",
    category: "Landing one-page",
    description: "Sitio desarrollado para cliente local.",
    url: "https://master.villa-del-mar.pages.dev",
    image: "/images/projects/villa-del-mar.webp",
    tags: ["restaurante", "cliente local"],
  },
  {
    id: "rifa-medica-felix",
    name: "Rifa Médica Félix",
    type: "Evento",
    category: "Landing one-page",
    description:
      "Sitio para rifa con información del evento y mecánica de participación.",
    url: "https://rifa-medica.gustavomartinez1.workers.dev/",
    image: "/images/projects/rifa-medica.webp",
    tags: ["evento", "rifa", "participación"],
  },
];
