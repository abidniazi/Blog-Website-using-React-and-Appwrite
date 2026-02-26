import conf from '../conf/conf'
import { Client, Databases,Storage,Query,ID } from 'appwrite'


export class Service{
    Client=new Client();
    databases;
    bucket;

    constructor(){
       this.Client
    .setEndpoint(conf.appWriteurl)
    .setProject(conf.appwriteProjectId);
    this.databases= new Databases(this.Client);
    this.bucket=new Storage(this.Client);

    }

    async createPost({title,slug,content,featutredImage,status,userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,{
                title,
                content,
                featutredImage,
                status,
                userId,
            }
        )

        } catch (error) {
            console.log("app config",error)
        }
    }

    async updatePost(slug,{title,content,featutredImage,status}){
     try {
        return this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featutredImage,
                status,
            }
        )
     } catch (error) {
        console.log("appwrite update post",error);
        
     }

    }

   async deletePost(slug){
    try {
        
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true;
    } catch (error) {
        console.log("config appwrite:",error);
        return false;
    }
   }

   async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("get post :",error);
        
    }
   }

   async getPosts(Queries=[Query.equal("status","active")]){
     try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            appwriteCollectionId,
            Queries,
        )
     } catch (error) {
        console.log("get posts",error);
        return false;
     }
   }

   async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBusketId,
            ID.unique(),
            file
        )

    } catch (error) {
        console.log("uploadfile :",error);
        return false;
    }
   }

   async deleteFile(fileId){
    try {
        await this.bucket.deleteFile(
            conf.appwriteBusketId,
            fileId
        )


    } catch (error) {
        console.log("delete file",error);
        
    }
   }

   gefilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBusketId,
        fileId,
    )
   }

   


}

const service=new Service()

export default service;