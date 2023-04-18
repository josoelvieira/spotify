
import {
  Maximize2Icon,
  VolumeIcon,
  Mic2,
  LayoutList,
  Laptop2Icon,
} from "lucide-react";
import Image from "next/image";
import Players from "./Player";

export default function Footer() {
  return (
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

      <Players />
      
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
  );
}
