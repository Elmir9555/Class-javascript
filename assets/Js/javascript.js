class MyArray {

    elements;

    constructor() {
        this.elements = arguments;
    }

    find(callback) {
        let result;
        for (const item of this.elements) {
            if(callback(item)){
                result = item;
                break;
            }
        }

        return result;
    }

    
}


let arr = new MyArray(1, 2, 3, 4, 5)



