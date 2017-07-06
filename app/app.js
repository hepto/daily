var dailyAPI = "https://hepto.github.io/daily-api/v0.1/all.json";

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