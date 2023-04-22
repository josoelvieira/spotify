import {
    ShuffleIcon,
    SkipBack,
    PlayIcon,
    SkipForward,
    RepeatIcon,}
from "lucide-react"

export default function Players() {
    return (
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
    )
}