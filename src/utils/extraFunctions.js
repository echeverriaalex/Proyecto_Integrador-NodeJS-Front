export const extractYear = (dateString) => {
    if(dateString === undefined || dateString === null) return "N/A";
    dateString = dateString.trim().split("-");
    return dateString[0];
}