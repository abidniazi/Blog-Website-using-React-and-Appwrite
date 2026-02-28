import conf from '../conf/conf'
import { Client, Account,ID } from 'appwrite'

export class AuthService{
 Client = new Client();
 account;
 
 constructor(){
    this.Client
    .setEndpoint(conf.appWriteurl)
    .setProject(conf.appwriteProjectId);
    this.account= new Account(this.Client);
 }
 async createAccount({email,password,name}){
    try {
const userAccount= await this.account.create(ID.unique(),email,password,name)
if(userAccount){
// call another method
return this.login({email,password})
}    else{
    return userAccount
    
}

} catch (error) {
        console.log()
    }
 }

 async login({email,password}){
    try {
        return await this.account.createEmailSession(email,password)

    } catch (error) {
        throw error
    }
 }

 async getCurrentUser(){
    try {
       return await this.account.get();
        
    } catch (error) {
        console.log("appwrite getcurrent user:",error); 
    }
 }

async logout(){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("logOut:",error);
        
    }
}

}


const authservice = new AuthService();
export default authservice