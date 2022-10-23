const ejemploVif = Vue.createApp({
  data() {
    return {
      info: {},
    };
  },
  created() {
    this.fetchData(
      "https://api.waqi.info/feed/here/?token=58a8c90c15e1f7397d19a2a0e7b4eddc6f6eb565"
    );
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.info = data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
}).mount("#app");
