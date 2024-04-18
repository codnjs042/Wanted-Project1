import axios from 'axios';

const instance = async (number="", page="") => {
    try {
        let url = "https://api.github.com/repos/angular/angular-cli/issues";
        if(number!==""){
            url+=`/${number}`;
        }
        else {
            url+=`?page=${page}`
        }
        const response = await axios.get(url);
        console.log(`${page} ${number} 응답`, response);
        return response.data;
    } catch (error) {
        console.log("Error", error);
        return error;
    }
}

export const allInstance = async() => {
    const allData=[];
    let page=1;
    while(true){
        const data = await instance("", page);
        if(data.length==0) break;
        allData.push(...data);
        page++;
    }
    return allData;
}

export default instance;