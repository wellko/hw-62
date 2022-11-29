
export interface MailForm {
    mail:string;
    text:string;
}

export interface Movie {
    id: string;
    name: string;
    index?: number;
}

export interface MovieForList {
    id: string;
    name: string;
    index?: number;
    inputOnChange: React.ChangeEventHandler<HTMLInputElement>;
}

export interface Joke {
    categories:[];
    created_at: string;
    icon_url:string;
    id:string;
    updated_at:string;
    url:string;
    value:string;
}

export interface JokeMutation {
    value:string;
}

export interface Posts{
    author: string;
    message:string;
}

export  interface PostsResponse {
    message:string;
    author:string;
    datetime:string;
    _id?:string;
    index: number
}

export interface Country {
    name: string;
    alpha3Code: string;
    independent: boolean;
}

export  interface  CountryInfoResponse {
    name: string;
    region:string;
    population:string;
    flag:string;
    borders: string[];
}

export interface Flag {
    flag:string;
    name:string
}
