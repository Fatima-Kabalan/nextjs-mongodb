import RemoveBtn from "./RemoveBtn";

export default function TopicsList(){
    return(
        <>
            <div>
                <div>
                    <h2>Topic Title</h2>
                    <div>Topic description</div>
                </div>

                <div>
                    <RemoveBtn/>
                </div>
            </div>
        </>
    )
}