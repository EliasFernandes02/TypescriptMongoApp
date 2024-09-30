import User, { IUserModel } from '../models/User';
import { IUser } from '../interfaces/IUser';

class UserRepository {
    // indica que a função create está retornando uma promessa que resolve para um objeto do tipo IUserModel.
    public async create(user: IUser): Promise<IUserModel> {
        const newUser = new User(user);
        return newUser.save();
    }

    public async findAll(): Promise<IUserModel[]> {
        return User.find();
    }

    public async findById(id: string): Promise<IUserModel | null> {
        return User.findById(id);
    }

    public async update(id: string, userData: IUser): Promise<IUserModel | null> {
        return User.findByIdAndUpdate(id, userData, { new: true });
    }

    public async delete(id: string): Promise<IUserModel | null> {
        return User.findByIdAndDelete(id);
    }
}

export default new UserRepository();
