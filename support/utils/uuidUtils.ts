const { v4: uuidv4 } = require('uuid');


class UuidUtils{

    getRandomEmail(){
        
    return uuidv4()+'@gmail.com'
    }

}

export default new UuidUtils()