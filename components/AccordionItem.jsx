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
            <div className={`flex pb-2 gap-4 
            ${selected !== category && `border-b border-dark`}`}>
                <span className={`font-semibold`}>
                    {selected === category ? '-' : '+'}
                </span>
                <h3 className={`capitalize font-medium`}>
                    {category}
                </h3>
            </div>
            <div className={`ml-3 mt-2 max-h-0 overflow-hidden flex 
            flex-col transition-all shadow-sm
            ${selected === category && `h-auto max-h-96 mb-4 
            border border-dark`}`}>
                {
                    items.map((item, index) => {
                        const { slug, name } = item;

                        return (
                            <div key={index} data-slug={slug}
                                className={`capitalize p-2 border-b 
                                border-dark last:border-none shadow-sm`}>
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