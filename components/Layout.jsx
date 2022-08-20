const Layout = ({ children }) => {
    return (
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 
        mx-auto py-8">
            {children}
        </div>
    );
}

export default Layout;