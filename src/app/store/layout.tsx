export default function Layout({children}: {children: React.ReactNode}){
    return(
        <main>
            <nav>Categorias de productos</nav>
            {children}
        </main>
    )
}