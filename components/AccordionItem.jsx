import { useState } from "react";

const AccordionItem = ({ category, items }) => {
    const [selected, setSelected] = useState(null);

    const handleClick = (slug) => {
        if (selected === slug) {
            return setSelected(null);
        }

        setSelected(slug);
    }

    return (
        <div className={`pt-1 cursor-pointer flex flex-col`}
            onClick={() => handleClick(category)}>
            <div className={`flex gap-2`}>
                <h3 className={`font-bold`}>
                    {selected === category ? '-' : '+'}
                </h3>
                <h3 className={`capitalize`}>{category}</h3>
            </div>
            <div className={`pt-2 max-h-0 mt-0 overflow-hidden transition-all 
            ${selected === category ? `h-auto max-h-96 transition` : ``}`}>
                {
                    items.map((item, index) => {
                        const { slug, name } = item;

                        return (
                            <div key={index} data-slug={slug}
                                className={`capitalize`}>
                                {name}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AccordionItem;