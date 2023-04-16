import Sidebar from "@/componets/Sidebar";
import Footer from "@/componets/footer";
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
        <Sidebar />
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
      <Footer /> 
    </div>
  );
}
