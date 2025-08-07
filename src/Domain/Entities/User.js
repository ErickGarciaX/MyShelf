
//Domain Layer for User Management 


export class User {
    constructor(id, name, userName, email, password, createdAt) {

        this.id = id;

        this.name = name;

        this.userName = userName;

        this.email = email;

        this.password = password;
        
        this.createdAt = createdAt;
    }

}