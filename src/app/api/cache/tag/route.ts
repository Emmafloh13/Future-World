import { revalidatePath } from "next/cache";
import { env } from "process";

export async function POST(request: Request) {
    const body = await request.json();
    const {tag, token} = body; 

    if (!tag || !token){
        return Response.json({error: "Missing tag or token"}, {status: 400});
        
    }
    if(token !== env.CACHE_TOKEN){
        return Response.json({error: "Token Invalido"}, {status: 401});
    }

    revalidatePath(tag);
    return Response.json({success: true});
}