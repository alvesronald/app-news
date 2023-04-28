

interface LayoutProps{
    children: React.ReactNode;
    title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
    return(
        <div className="h-full min-h-screen relative">
            <div className="w-full h-72 bg-black rounded-b-[6.25rem] pt-11 px-32 flex justify-center  items-center text-center text-white">
                <h1 className="text-white text-4xl w-8/12">{title}</h1>
            </div>

            {children}

            <div className="pt-40" />
            <footer className="bg-black text-white w-full h-28 absolute bottom-0 flex justify-center items-center">
                <div className="w-4/5 h-4/5 flex items-center flex-wrap">
                    <hr className="border-t border-[#ff2147] w-full" />
                    <h3>2023 - Todos os direitos reservados.</h3>
                </div>
            </footer>

        </div>
    )
}