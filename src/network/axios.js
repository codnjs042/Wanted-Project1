import axios from 'axios';

const instance = async (number="", page="") => {
    try {
        const response = await axios.get("https://api.github.com/repos/angular/angular-cli/issues" + number + page);
        console.log("response", response);
        return response.data;
    } catch (error) {
        console.log("Error", error);
        return error;
    }
}

export default instance;