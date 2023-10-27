export default {
	myFun1: () => {
		var data = {
			filter : [
				{
					"field": "createdAt",
					"operator": "range",
					"value": [start_date_topup.selectedDate, end_date_topup.selectedDate],
    		},
			],
		 "pagination": {
				"page": 1,
				"pageSize": 10
			}
		};
		if (filter_topup_status_hka.selectedOptionValue) {
			data.filter.push(
				{
					"field": "topUpStatus",
					"operator": "eq",
					"value": filter_topup_status_hka.selectedOptionValue
				}
			)
		}
		return data;
	},
}