import {ChevronDown, UserIcon} from "lucide-react";

export default function User() {
    return (
        <div className="bg-zinc-800 flex justify-between rounded-full p-1">
              <span className="bg-zinc-400 rounded-full">
                <UserIcon />
              </span>
              Josoel <ChevronDown />
            </div>
    )
}