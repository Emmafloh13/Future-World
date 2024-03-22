import { Hero } from "../../components/home/Hero";
import { Descripcion } from "../../components/home/Description";
import { Children } from "react";

export default function HomeLayout({ children }:{ children: React.ReactNode}){

    return(

<div>
 <Hero />
 <Descripcion /> 

 {children}

</div>

    )
}