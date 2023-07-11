type ChildrenType = { children?: JSX.Element | JSX.Element[] };

const Layout = ({ children }: ChildrenType) => {
    return (
        <div className='bg-white dark:bg-gray-800 pb-10'>
            <main className='px-4 mx-auto max-w-screen-xl'>{children}</main>
        </div>
    );
};

export default Layout;
