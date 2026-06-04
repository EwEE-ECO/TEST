export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Интерьер барбершопа",
    width: 600,
    height: 800,
    category: "interior",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Мужская стрижка",
    width: 600,
    height: 400,
    category: "work",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=600&q=80",
    alt: "Бритье бороды",
    width: 600,
    height: 750,
    category: "work",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1585747861115-542350d1e32d?w=600&q=80",
    alt: "Рабочее место барбера",
    width: 600,
    height: 450,
    category: "interior",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1567894340315-735d7c361db7?w=600&q=80",
    alt: "Стрижка ножницами",
    width: 600,
    height: 600,
    category: "work",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1593702288056-1a9e4e89aad4?w=600&q=80",
    alt: "Атмосфера барбершопа",
    width: 600,
    height: 500,
    category: "interior",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80",
    alt: "Зона ожидания",
    width: 600,
    height: 700,
    category: "interior",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80",
    alt: "Результат стрижки",
    width: 600,
    height: 380,
    category: "work",
  },
];

export const galleryCategories = [
  { id: "all", label: "Все" },
  { id: "interior", label: "Интерьер" },
  { id: "work", label: "Работы" },
];
