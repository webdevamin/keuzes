import Image from "next/image";
import Link from "next/link";

const Card = ({ item }) => {
    const { id, image, price, rating, title } = item;
    const { rate, count } = rating;

    return (
        <Link href={`items/${id}`}>
            <a className={`border-b-2 border-r-2 border-gray-100`}>
                <article className={`flex justify-center flex-col gap-6 
                p-8 h-full`}>
                    <h2 className={`font-semibold
                    capitalize text-base`}>
                        {title}
                    </h2>
                    <Image src={image} alt={title}
                        width={90} height={90} objectFit={"contain"} />
                    <div className={`w-full flex justify-between
                    flex-1 items-end`}>
                        <div>
                            <h3 className={`text-gray-500 capitalize 
                            mb-1 text-base font-semibold`}>
                                Score
                            </h3>
                            <span className="font-bold">
                                {`${rate} 
                                (${count})`}
                            </span>
                        </div>
                        <div>
                            <h3 className={`text-gray-500 capitalize 
                            mb-1 text-base font-semibold`}>
                                Prijs
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