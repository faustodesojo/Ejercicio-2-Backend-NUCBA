import { Model, Schema, model, ObjectId } from "mongoose";

export interface IUser {
    username: string;
    email: string;
    password: string;
    estado: boolean;
    expenses: ObjectId[];
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        required: true,
        default: true
    },
    expenses: [{
        type: Schema.Types.ObjectId,
        ref: "Expense",
        required: true
    }]
});

const User: Model<IUser> = model<IUser>("User", UserSchema);

export default User;
 