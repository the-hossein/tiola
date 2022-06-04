

const convertDate = (oldDate) => {
   let date=oldDate
    let mydate = date.split("T")[0];
    let timestamp = new Date(mydate).getTime();
    let options = { year: "numeric", month: "numeric", day: "numeric" };
    let newDate = new Date(timestamp).toLocaleDateString("fa-IR", options);

    return newDate
};

export default convertDate;
