var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const oneDay = 24 * 60 * 60 * 1000; 
    const time1 = date1.getTime();
    const time2 = date2.getTime();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = Math.abs(time1 - time2);
    const differenceInDays = Math.round(differenceInMilliseconds / oneDay);

    return differenceInDays;
};

// Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));
