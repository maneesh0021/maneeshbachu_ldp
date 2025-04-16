function getData(uId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("skc@gmail.com");
      }, 4000);
    });
  }
  async function showEmail() {
        const email = await getData("skc");                          // Waits here until getData resolves
   
  }
  
  showEmail();
  
