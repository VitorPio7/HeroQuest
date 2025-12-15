export interface IUser {
    id:string,
    email: string,
    name: string,
    avatar: string,
    password: string,
    isActive: Boolean,
    created_at:Date,
    updated_at:Date,
}