import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from '../interfaces/IUser';

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
}, {
    timestamps: true
});
//A interface IUserModel no código que você forneceu tem o propósito de combinar a interface de usuário (IUser) com a interface Document do Mongoose. Isso é feito para garantir que o modelo User tenha acesso tanto às propriedades do usuário (como name, email, age) quanto aos métodos e propriedades especiais que o Mongoose adiciona a cada documento. 
export interface IUserModel extends IUser, Document {}
//A linha const User = mongoose.model<IUserModel>('User', userSchema); faz o seguinte:

// Cria um modelo chamado User baseado no esquema userSchema.
// O modelo será associado a uma coleção chamada users no MongoDB.
// O tipo do modelo é definido por IUserModel, que combina os dados do usuário (nome, email, idade) com as propriedades e métodos que o Mongoose adiciona (como _id, save(), find(), etc.).
// Esse modelo é usado para realizar operações no banco de dados, como criar, buscar, atualizar e excluir documentos na coleção MongoDB users.
const User = mongoose.model<IUserModel>('User', userSchema);

export default User;
