export interface Todo{
    id?: number,
    userId : number,
    title : string,
    body : string
}

export interface Comment{
    id?:number,
    postId:number,
    name : string ,
    body : string
}