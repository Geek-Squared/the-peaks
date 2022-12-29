export const convertDate = (inputDate: string) => {
    // Parse the input date string using the Date constructor
    const date = new Date(inputDate);
  
    // Get the day of the week as a string
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
  
    // Get the month as a string
    const month = date.toLocaleDateString('en-US', { month: 'long' });
  
    // Get the day of the month as a two-digit string
    const dayOfMonth = date.toLocaleDateString('en-US', { day: '2-digit' });
  
    // Get the hour (in 24-hour format) as a two-digit string
    const hour = date.toLocaleTimeString('en-US', { hour: '2-digit' });
  
    // Get the minute as a two-digit string
    const minute = date.toLocaleTimeString('en-US', { minute: '2-digit' });
  
    // Return the formatted date string
    return `${dayOfWeek} ${dayOfMonth} ${month} ${date.getFullYear()} ${hour}.${minute} BST`;
  }

 // this is a function to remove the trailing slash from the id string so that it can be used in the api call
 export const removeTrailingSlash = (str: string) => {
    return str.replace(/\/$/, "");
  }; 