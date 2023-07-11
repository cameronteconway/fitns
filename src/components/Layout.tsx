type ChildrenType = { children?: JSX.Element | JSX.Element[] };

const Layout = ({ children }: ChildrenType) => {
    return (
        <div className='bg-white dark:bg-gray-800 pb-10 px-4 lg:px-6'>
            <main className=' mx-auto max-w-screen-xl'>{children}</main>
        </div>
    );
};

export default Layout;
