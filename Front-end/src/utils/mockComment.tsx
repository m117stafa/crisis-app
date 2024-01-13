import { User } from './User';

const mockUser: User = {
    id: "1",
    username: "JohnDoe",
    firstName: "John",
    lastName: "Doe",
    email: "jhon.doe@gmail.com",
    phone: "1234567890",
    age: 20,
};
export const mockComment = {
    id: "1",
    user: mockUser,
    content: "This is a comment",
};
