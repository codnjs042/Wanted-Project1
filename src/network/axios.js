import axios from 'axios';

const instance = async (number = "", page = "") => {
    try {
        let url = "https://api.github.com/repos/angular/angular-cli/issues";
        if (number !== "") {
            url += `/${number}`;
        } else {
            url += `?page=${page}`;
        }
        const response = await axios.get(url);
        console.log(`${page} ${number} 응답`, response);
        return response.data;
    } catch (error) {
        console.log("Error", error);
        return error;
    }
}

export const allInstance = async () => {
    const allData = [];
    const totalPages = 9; // 전체 페이지 수
    const promises = [];

    // 각 페이지 요청을 병렬로 실행
    for (let page = 1; page <= totalPages; page++) {
        promises.push(instance("", page));
    }

    // 병렬 요청 실행 및 데이터 수집
    const responses = await Promise.all(promises);
    responses.forEach(data => {
        allData.push(...data);
    });
    const openedData = allData.filter(item => item.state === "open");
    const sortedData = openedData.sort((a, b) => b.comments - a.comments);
    return sortedData;
}

export default instance;