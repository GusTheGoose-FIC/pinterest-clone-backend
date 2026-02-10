import Navbar from "../components/Navbar";
import Pin from "../components/Pin";
import "./Home.css";

const pins = [
  {
    image: "https://picsum.photos/400/600",
    title: "Idea de decoración",
    description: "Inspiración para tu sala moderna",
    user: "Gustavo",
  },
  {
    image: "https://picsum.photos/400/500",
    title: "Diseño web",
    description: "Layout moderno estilo Pinterest",
    user: "FrontendDev",
  },
  {
    image: "https://picsum.photos/400/700",
    title: "Fotografía",
    description: "Paisaje minimalista",
    user: "PhotoLover",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
        <div className="masonry">
          {pins.map((pin, i) => (
            <Pin key={i} pin={pin} />
          ))}
        </div>
      </div>
    </>
  );
}
