import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center  gap-2 mb-5">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5">
            <a
              className="flex item-center gap-3 text-xs font-semibold text-zinc-200"
              href=""
            >
              <HomeIcon />
              Home
            </a>

            <a
              className="flex item-center gap-3 text-xs font-semibold text-zinc-200"
              href=""
            >
              <SearchIcon />
              Search
            </a>

            <a
              className="flex item-center gap-3 text-xs font-semibold text-zinc-200"
              href=""
            >
              <LibraryIcon />
              Your Library
            </a>
          </nav>
          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2">
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Aniversario
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Fest funk
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Pagode
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Rave
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              techno
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Meu rap
            </a>
            <a className="text-sm  text-zinc-400 hover:text-zinc-100" href="">
              Gringo
            </a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className=" rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>
          <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/src/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
            </div>
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/src/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
            </div>
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/src/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>

            </div>
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/src/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>

            </div>
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/src/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>

            </div>
            <div className=" bg-white/10 overflow-hidden  rounded">
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>

            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
