import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
    const { id, image, price, rating, title } = item;
    const { rate, count } = rating;

    return (
        <Link href={`items/${id}`}>
            <a className={`border-b-2 border-r-2 border-opacity-5`}>
                <article className={`flex items-center 
                justify-center flex-col gap-8 p-8 h-full`}>
                    <h2 className={`font-bold`}>{title}</h2>
                    <Image src={image} alt={title}
                        width={150} height={200} objectFit={"contain"} />
                    <div className={`w-full flex justify-between
                    flex-1 items-end`}>
                        <div>
                            <h3 className={`text-gray-500 uppercase mb-1`}>
                                Score
                            </h3>
                            <span>{`${rate} (${count})`}</span>
                        </div>
                        <div>
                            <h3 className={`text-gray-500 uppercase mb-1`}>
                                Laagste prijs
                            </h3>
                            <span className="font-bold">€ {price}</span>
                        </div>
                    </div>
                </article>
            </a>
        </Link>
    );
};

export default Card;