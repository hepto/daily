var app = new Vue({
  el: '#bookmarks',
  data: {
	links: null
  },
  created() {
	axios.get('https://hepto.github.io/daily-api/data.json')
		.then((response) => {
			this.links = response.data;
		});
	}
});