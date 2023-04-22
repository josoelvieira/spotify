import Sidebar from "@/app/componets/Sidebar";
import Footer from "@/app/componets/Footer";
import Musica from "@/app/componets/Musica";
import Album from "@/app/componets/Album";
import Buttons from "@/app/componets/Buttons";
import { ArrowBigDown, ChevronDown, UserIcon } from "lucide-react";
import User from "./componets/User";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="flex flex-row justify-between">
            <Buttons />
            <User />
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-6">
            <Musica nome="Californation" />
            <Musica nome="Cas't Stop" />
            <Musica nome="Snow" />
            <Musica nome="Otherside" />
            <Musica nome="Scar Tissue" />
            <Musica nome="Dani California" />
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Josoel Vieira
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <Album
              album="Californication"
              foto="/Red_Hot_Chili_Peppers_-_Californication.jpg"
            />
            <Album album="Stadiu Arcadium" foto="/Stadiumarcadium.jpg" />
            <Album album="Return of the Dream Canteen" foto="/images.jpeg" />
            <Album album=" Unlimited Love" foto="/unlimited.jpeg" />
            <Album album="By the Way" foto="/Rhcp9.jpg" />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
