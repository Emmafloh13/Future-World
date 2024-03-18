import { getCollections } from "app/services/shopify/collections"
import Link from "next/link"

export default async function Layout({children}: {children: React.ReactNode}){
    const collections = await getCollections()
    
    return(
        <main>
            <nav>{
                collections.map((collections)=>(
                    <Link key={collections.id} href={'/store/' + collections.handle}>
                        {collections.title}
                    </Link>
                ))
                }

            </nav>
            {children}
        </main>
    )
}