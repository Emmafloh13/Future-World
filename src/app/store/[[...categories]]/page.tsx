interface CategoryProps{
    params: {
        categories: string[],
        searchParams: string
    }
}
export default function Category(props: CategoryProps){
   
    const {categories} = props.params 
    // throw new Error('Error:BOOM!')
    return(
        <h1>Category: {categories}</h1>
    )
}