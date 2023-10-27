export default {
	myFun1: () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, '0');
		var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		var yyyy = today.getFullYear();
		
		var today_date = yyyy  + '-' + mm + '-' + dd;		
		storeValue("todaydate",today_date);
		
		today.setDate(today.getDate() - 7);
		dd = String(today.getDate()).padStart(2, '0');
		mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		yyyy = today.getFullYear();

		var seven_days = yyyy  + '-' + mm + '-' + dd;		
		storeValue("sevendate",seven_days);
	},
}