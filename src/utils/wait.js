// for fetching/wait a page.
const wait = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 5000); //5000 = 5sec
    });
};

export default wait;