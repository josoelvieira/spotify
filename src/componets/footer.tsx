import Image from "next/image"
import { ShuffleIcon, SkipBack, PlayIcon, SkipForward, RepeatIcon,Maximize2Icon, VolumeIcon, Mic2, LayoutList, Laptop2Icon} from "lucide-react"
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
    )
}