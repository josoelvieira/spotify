import { PlayIcon } from "lucide-react";
import Image from "next/image";


export default function Musica({nome} ){
    return (
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
              <strong>{nome}</strong>
              <button className="invisible p-3 pl-4 w-12 h-12 flex itens-center justify-center rounded-full bg-green-400 text-black ml-auto mr-8 group-hover:visible">
                <PlayIcon />
              </button>
            </a>
    )
}