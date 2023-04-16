import { Maximize2Icon } from "lucide-react";
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  ChevronLeft,
  ChevronRight,
  PlayIcon,
  ShuffleIcon,
  SkipBack,
  PlayCircle,
  SkipForward,
  Repeat1Icon,
  RepeatIcon,
  Mic2,
  LayoutList,
  Laptop2Icon,
  VolumeIcon,
  MaximizeIcon,
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
            <a
              href=""
              className=" bg-white/10 group overflow-hidden  group rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex itens-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className=" bg-white/5 group overflow-hidden  rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex itens-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className=" bg-white/5 group overflow-hidden  rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className=" bg-white/5 group overflow-hidden  rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className=" bg-white/5 group overflow-hidden  rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
            <a
              href=""
              className=" bg-white/5 group overflow-hidden  rouded flex items-center gap-4 hover:bg-white/20 transition-colors"
            >
              <Image
                width={104}
                height={104}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
              />
              <strong>Carlifornaction</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
          </div>
          <h2 className="font-semibold text-2xl mt-10">
            Made for Josoel Vieira
          </h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
            >
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
                className="w-full"
              />
              <strong className="font-semibold">Californication</strong>
              <span className="text-sm text-zinc-500">
                Wallows, Coin, girl in red
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
                className="w-full"
              />
              <strong className="font-semibold">Californication</strong>
              <span className="text-sm text-zinc-500">
                Wallows, Coin, girl in red
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
                className="w-full"
              />
              <strong className="font-semibold">Californication</strong>
              <span className="text-sm text-zinc-500">
                Wallows, Coin, girl in red
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
                className="w-full"
              />
              <strong className="font-semibold">Californication</strong>
              <span className="text-sm text-zinc-500">
                Wallows, Coin, girl in red
              </span>
            </a>
            <a
              href=""
              className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
            >
              <Image
                width={120}
                height={120}
                src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
                alt="Capa Album red hot"
                className="w-full"
              />
              <strong className="font-semibold">Californication</strong>
              <span className="text-sm text-zinc-500">
                Wallows, Coin, girl in red
              </span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            width={56}
            height={56}
            src="/Red_Hot_Chili_Peppers_-_Californication.jpg"
            alt="Capa Album red hot"
            className="w-full"
          />
          <div className="flex flex-col">
            <strong className="font-normal">Californication</strong>
            <span className="text-xs text-zinc-400">Red hot chilli pepers</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <ShuffleIcon size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />
            <button className="p-3 pl-4 w-10 h-10 flex items-center justify-center rounded-full bg-white text-black ml-auto">
              <PlayIcon />
            </button>
            <SkipForward size={20} className="text-zinc-200" />
            <RepeatIcon size={20} className="text-zinc-200" />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">0.31</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600 ">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>

            <span className="text-sm text-zinc-500">2.20</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Mic2 size={16} />
          <LayoutList size={16} />
          <Laptop2Icon size={16} />
          <div className="flex items-center gap-2">
            <VolumeIcon size={16} />
            <div className="h-1 rounded-full w-24 bg-zinc-600 ">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2Icon size={16} />
        </div>
      </footer>
    </div>
  );
}
