---
---
var dailyAPI = "{{ site.dailyAPI }}";

var app = new Vue({
  el: "#days",
  data: {
		days: null
  },
  created() {
		axios.get(dailyAPI)
			.then((response) => {
				this.days = response.data;
			});
	}
});