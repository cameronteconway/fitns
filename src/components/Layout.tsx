type ChildrenType = { children?: JSX.Element | JSX.Element[] };

const Layout = ({ children }: ChildrenType) => {
    return (
        <div className='border border-blue-500 bg-white dark:bg-gray-800 pb-10'>
            <main className='mx-auto max-w-screen-xl'>{children}</main>
        </div>
    );
};

export default Layout;
