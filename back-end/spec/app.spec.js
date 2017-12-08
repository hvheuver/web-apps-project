var Request = require("request");

describe("Server", () => {
    let server;
    let blogid;
    beforeAll(() => {
        server = require("../app");
    });
    afterAll(() => {
    });

    describe("POST /API/blogposts", () => {
        let data = {};
        beforeAll((done) => {
            Request(
                { method: 'POST'
                , uri: 'http://localhost:3000/API/blogposts'
                , json: true
                , body: {
                    title: "test",
                    body: "testbody",
                    imageUrl: "www.testurl.be/test"
                }
                }, (error, response, body) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("status 200", () => {
            expect(data.status).toBe(200);
        });
        it("check body", () => {
            expect(data.body.title).toBe("test");
            expect(data.body.body).toBe("testbody");
            expect(data.body.imageUrl).toBe("www.testurl.be/test");
            expect(data.body._id).toBeDefined();
            blogid = data.body._id;
        });
    });

    describe("GET /API/blogposts", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/blogposts", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            })
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(1);
            let post = data.body[0];
            expect(post.title).toBe("test");
            expect(post.body).toBe("testbody");
            expect(post.imageUrl).toBe("www.testurl.be/test");
            expect(post._id).toBe(blogid);
        });
    });

    describe(`DELETE /API/blogposts/${blogid}`, () => {
        var data = {};
        beforeAll((done) => {
            Request.delete(`http://localhost:3000/API/blogposts/${blogid}`, (error, response, body) => {
                data.status = response.statusCode;
                done();
            }).auth(null, null, true, process.env.TEST_VALID_TOKEN);
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    
    });

    describe("GET /API/blogposts", () => {
        var data = {};
        beforeAll((done) => {
            Request.get("http://localhost:3000/API/blogposts", (error, response, body) => {
                data.status = response.statusCode;
                data.body = JSON.parse(body);
                done();
            })
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
        it("Body", () => {
            expect(data.body.length).toBe(0);
        });
    });
});