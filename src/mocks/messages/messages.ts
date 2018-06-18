import { Profile } from '../../models/profile/profile';
import { Message } from '../../models/messages/message';

const userList: Profile[] = [
{firstName: 'Tushar', lastName: 'Adhao', avatar: 'assets/imgs/avatar.png', email: 'tadhao@gmail.com', dob: new Date()},
{firstName: 'Vaishnavi', lastName: 'Adhao', avatar: 'assets/imgs/avatar.png', email: 'vaishadhao@gmail.com', dob: new Date()},
{firstName: 'Rutuja', lastName: 'Bhoge', avatar: 'assets/imgs/avatar.png', email: 'rutubhoge@gmail.com', dob: new Date()},
{firstName: 'Anuja', lastName: 'Bhoge', avatar: 'assets/imgs/avatar.png', email: 'anubhoge@gmail.com', dob: new Date()},
{firstName: 'Madhura', lastName: 'Sontakke', avatar: 'assets/imgs/avatar.png', email: 'madhura@gmail.com', dob: new Date()}
];

/*
const messageList: Message[] = [
{user: userList[0], date: new Date()},
{user: userList[1], date: new Date()},
{user: userList[2], date: new Date()},
{user: userList[3], date: new Date()},
{user: userList[4], date: new Date()}
];
*/

const messageList: Message[]= [];
userList.forEach(user=> {
  messageList.push({user: user, date: new Date(), lastMessage: 'Hello '+ user.firstName});
})

export const MESSAGE_LIST = messageList;
export const USER_LIST = userList;
