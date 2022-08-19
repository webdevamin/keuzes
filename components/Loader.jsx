const Loader = () => {
    return (
        <div className="flex flex-col gap-8 items-center mt-16">
            <span className="font-semibold">
                Gegevens aan het laden...
            </span>
            <div className="animate-spin rounded-full
          h-10 w-10 border-dark border-b-2"></div>
        </div>
    );
};

export default Loader;