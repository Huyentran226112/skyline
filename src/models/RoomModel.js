import axios from "axios";

class RoomModel {
    constructor(){
        this.api_url = 'http://127.0.0.1:8000/api/rooms';
    }
    getAll(page = 1){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url+'?page='+page)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    find(id){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url+'/'+id)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

    store(data){
        return new Promise( (resolve, reject) => {
            axios
            .post(this.api_url,data )
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    
    update(id,data){
        return new Promise( (resolve, reject) => {
            axios
            .put(this.api_url+'/'+id , data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    delete(id){
        return new Promise( (resolve, reject) => {
            axios
            .delete(this.api_url+'/'+id)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            });
        });
    }
    getRelatedRooms(id){
        return new Promise( (resolve, reject) => {
            axios
            .get(this.api_url+'/'+id+"/related")
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err)
            });
        });
    }

}
export default new RoomModel();