---
---
var dailyAPI = "{{ site.dailyAPI }}";

var app = new Vue({
  el: "#bookmarks",
  data: {
	links: null
  },
  created() {
	axios.get(dailyAPI)
		.then((response) => {
			this.links = response.data;
		});
	}
});