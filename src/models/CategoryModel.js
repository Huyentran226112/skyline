import axios from "axios";

class CategoryModel  {
    constructor(){
        this.api_url = "http://127.0.0.1:8000/api/categories";
    }
    getAll(){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
}
export default new CategoryModel();
