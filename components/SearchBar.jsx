import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(query);
    }

    const onChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <form onSubmit={onSubmit} className={`lg:flex lg:gap-5`}>
            <div className={`flex items-center mt-2 border 
            border-dark lg:mt-0 shadow`}>
                <FontAwesomeIcon icon={faSearch}
                    className={`h-10 w-10 p-3 border-r border-dark`} />
                <label htmlFor="search" className={`w-full`}>
                    <input type="text" name="search" id="search"
                        className={`mt-0 border-none border-l border-dark p-2 
                        lg:w-80 xl:w-96 focus:rounded-none`}
                        value={query} onChange={onChange} />
                </label>
            </div>
            <button className={`w-full bg-theme p-2 lg:px-5 
            shadow-lg mt-3 lg:mt-0 font-semibold 
            hover_effect_bg border-2 border-dark`}>
                Zoeken
            </button>
        </form>
    );
};

export default SearchBar;