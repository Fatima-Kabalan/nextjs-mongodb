import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicsList() {
  return (
    <>
      <div className="flex justify-between items-start gap-5 p-4 border border-slate-300 my-3">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic description</div>
        </div>

        <div className="flex  gap-2">
          <RemoveBtn />
          <Link href={"/editTopic/123"}>
            <HiPencilAlt className="pencilIcon" size={24}/>
          </Link>
        </div>
      </div>
    </>
  );
}
