export class Contact {
    private _id: String;
    private _email: String;
    private _subject: String;
    private _body: String;

    static fromJSON(json): Contact {
        const contact = new Contact(json.email, json.subject, json.body);
        contact._id = json._id;
        return contact;
    }

    constructor(email: String, subject: String, body: String) {
        this._email = email;
        this._subject = subject;
        this._body = body;
    }

    get id(): String{
        return this._id;
    }

    get email(): String{
        return this._email;
    }

    get subject(): String{
        return this._subject;
    }

    get body(): String{
        return this._body;
    }

    toJSON() {
        return {
            _id: this._id,
            email: this._email,
            subject: this._subject,
            body: this._body,
        };
    }
}
