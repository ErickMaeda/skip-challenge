export default class User {
    constructor(args={}) {
        this.email = args.email;
        this.password = args.password;
        this.idType = args.idType;
    }

    setEmail = (email) => {
        this.email = email;
    }

    setPassword = (password) => {
        this.password = password;
    }

    setIdType = (idType) => {
        this.idType = idType;
    }

    getEmail = () => this.email;

    getPassword = () => this.password;

    getIdType = () => this.idType;
};