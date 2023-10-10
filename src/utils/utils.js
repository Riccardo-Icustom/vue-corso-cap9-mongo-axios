//NON SERVE PIU'

/*
const fetchTasks = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (e) {
      console.error(e);
    }
};

const updateTask = async (method,url,data) => {
    try {
        const res = await fetch(url, {
            method: method, //"PATCH", "POST"
            body: JSON.stringify(data), // data sono i dati che vuoi passare
            headers: { "Content-Type": "application/json"} //oggetto

        });
        return res.json(); //Non faccio l'await come nella precedente.. non so se è uguaglio
      } catch (e) {
        console.error(e);
      }
}


const deleteTask = async(url) => {
    try {
        const res = await fetch(url, {
            method: "DELETE"
        });
        return res.json(); //Non faccio l'await come nella precedente.. non so se è uguaglio
      } catch (e) {
        console.error(e);
      }    
}


export {
    fetchTasks,
    updateTask
};
*/