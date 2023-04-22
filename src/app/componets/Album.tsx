import { PlayIcon } from "lucide-react";
import Image from "next/image";

export default function Album(props) {
  return (
    <a
      href=""
      className="bg-white/5 group p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
    >
      <Image
        width={120}
        height={120}
        src={props.foto}
        alt="Capa Album red hot"
        className="w-full"
      />
      <button className=" invisible p-3 pl-4 w-12 h-12 flex itens-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible justify-end ">
        <PlayIcon />
      </button>
      <strong className="font-semibold">{props.album}</strong>
      <span className="text-sm text-zinc-500">Artist</span>
    </a>
  );
}
