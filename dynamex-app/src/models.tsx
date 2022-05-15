export interface IAsyncData<T>{
    error?:string,
    data?:T,
    loading?:boolean
}
export interface ILanguage{
    id:number,
    name:string,
    code:string
}