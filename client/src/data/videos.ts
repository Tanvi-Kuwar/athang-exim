import mango_guava from "@/assets/Mango_Guava.mp4";
import mangoes from "@/assets/Mangoes.mp4";

export interface Video {
  id: string;
  title: string;
  description: string;
  src: string;
}

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Mango & Guava",
    description: "Discover our mango and guava products.",
    src: mango_guava,
  },
  {
    id: "video-2",
    title: "Mangoes",
    description: "Learn more about our mango products.",
    src: mangoes,
  },
];