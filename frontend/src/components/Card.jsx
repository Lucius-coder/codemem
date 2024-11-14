

const Card = ({cardName,due,learnt,New,classes}) => {
    return (
        <div>
            <div
                className={`w-full flex  flex-wrap dark:bg-[rgba(0,0,0,0.2)] m-4 bg-white rounded active:scale-90 active:rounded-2xl transition duration-200 ${classes}`}>
                <div className=" font-bold text-2xl m-2 p-4">{cardName}</div>
                <div className="flex   gap-2 justify-around px-3 py-5">
                    <div className="flex flex-col items-center">
                        <span>New</span> <span className="text-blue-500">{New}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Learn</span> <span className="text-green-500">{learnt}</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span>Due</span> <span className="text-red-500">{due}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;