export class Blogpost {
    private _id: Number;
    private _title: String;
    private _body: String;
    private _imageUrl: String;

    constructor(title: String, body: String, imageUrl: String){
        this._title = title;
        this._body = body;
        this._imageUrl = imageUrl;
    }

    get id(): Number{
        return this._id;
    }

    get title(): String{
        return this._title;
    }

    get body(): String{
        return this._body;
    }

    get imageUrl(): String{
        return this._imageUrl;
    }

    toJson() {
        return {
            _id: this._id,
            title: this._title,
            body: this._body,
            imageUrl: this._imageUrl
        };
    }
}
