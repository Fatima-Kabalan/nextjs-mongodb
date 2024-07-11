import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

// connect frontend to backend
const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store", // in order to get the updated topics without refreshing so you need to move cache
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics");
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();
  return (
    <>
      {topics.map((t) => (
        <div className="flex justify-between items-start gap-5 p-4 border border-slate-300 my-3">
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex  gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt className="pencilIcon" size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
