const request = require("supertest")
const app = require("../app")
const {User} = require("../models")
const { signToken } = require("../helpers/jwt")




beforeAll(async () => {
    try {
        let user = await User.create({            
        userName: "admin1",
        email: "admin1@gmail.com",
        password: "admin1",
        role: "Admin",
        phoneNumber: "085726261222",
        address: "456 Oak Avenue, Townsville"
        })

        token = signToken({ id: user.id });
    } catch (error) {
        console.log(error);
    }
});

describe("POST /register", () => {
    test("add-user on success", async () => {
        const dummyData = {
        userName: "admin1",
        email: "admin1@gmail.com",
        password: "admin1",
        role: "Admin",
        phoneNumber: "085726261222",
        address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(201);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("email", dummyData.email);
    });


    test("throw error email null", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Please input Email!");
    });


    test("throw error password null", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Please input Password!");
    });


    test("throw error email empty", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Please input Email!");
    });


    test("throw error password empty", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Please Input Password");
    });

    test("throw error format email", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `Bearer ${token}`).send(dummyData);
        
        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Email must be in email format");
    });


    test("throw error token is undefined", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', null).send(dummyData);
        
        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Invalid Token");
    });



    test("throw error token is not valid", async () => {
        const dummyData = {
            userName: "admin1",
            email: "admin1@gmail.com",
            password: "admin1",
            role: "Admin",
            phoneNumber: "085726261222",
            address: "456 Oak Avenue, Townsville"
        }
        
        const response = await request(app).post("/register").set('Authorization', `3y273y12ehjadasjdn3131`).send(dummyData);
        
        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Invalid Token");
    });
});


describe("POST /login", () => {
    test("login on success", async () => {
        const dummyData = {
            email: "admin1@gmail.com",
            password: "admin1",
        }

        const response = await request(app).post("/login").send(dummyData);

        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("access_token");
    });

    
    test("throw error email null", async () => {
        const dummyData = {
            password: "admin1",
        }

        const response = await request(app).post("/login").send(dummyData);

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Email is required");
    });


    test("throw error password null", async () => {
        const dummyData = {
            password: "admin1",
        }

        const response = await request(app).post("/login").send(dummyData);

        expect(response.status).toBe(400);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Password is required");
    });


    test("throw error email invalid", async () => {
        const dummyData = {
            email: "aqdmin1@gmail.com",
            password: "aadmin1",
        }

        const response = await request(app).post("/login").send(dummyData);

        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Invalid Email/Password");
    });


    test("throw error password invalid", async () => {
        const dummyData = {
            email: "adminn1@gmail.com",
            password: "adminn1",
        }

        const response = await request(app).post("/login").send(dummyData);

        expect(response.status).toBe(401);
        expect(response.body).toBeInstanceOf(Object);
        expect(response.body).toHaveProperty("message", "Invalid Email/Password");
    });


}); 



afterAll(async () => {
    await User.destroy({truncate: true, cascade: true, restartIdentity: true});
});



