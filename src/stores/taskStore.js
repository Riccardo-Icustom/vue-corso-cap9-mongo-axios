import { defineStore } from 'pinia'
import {getTaskService,getSingleTaskService,updateTaskService,postTaskService,deleteTaskService} from '../services/api/task.service.js'

export const useTaskStore  = defineStore('taskStore', {
    state: () => ({
        name: "Riccardo",
        loading: false,
        tasks: [],
        singletask: []
    }),
    getters: {
        totalCount: (state) => {
            return state.tasks.length;
        },
        //utilizzo una scrittura alternativa 
        //senza scrivere esplicitamente state...
        //In questo caso non si utilizza la arrow function
        favCount() {
            //Aggiunge 1 tutte le volte che nell'array dei task trovo un valore con favorite=true
            return this.tasks.reduce((previousvalue,currentvalue) => {
                return currentvalue.favorite ? previousvalue + 1 : previousvalue 
            },0)
        },
        favs: (state) => {
            return state.tasks.filter(item => item.favorite)
            /* è equivamente a scrivere 
            return state.tasks.filter((item)=>{
                if(item.favorite) {
                    return item
                }
            })
            */
        },

        getTaskById: (state) => {
            return (taskId) => state.tasks.find((t) => t.fakeid === parseInt(taskId));
          },

    },
    actions: {
        
        //Funzione asincrona per recuperare i task
        async getTasks() {
            this.loading = true;
            try {
                const data = await getTaskService()
                this.tasks = data;
                this.loading = false;
            }catch (e) {
                console.error(e);
            }            
              
        },

        async getSingleTask(id) {
            this.loading = true;
            try {
                const data = await getSingleTaskService(id);
                this.singletask = data;
                this.loading = false;
            }catch (e) {
                console.error(e);
            }
                
        },
        
        //la funzione deve agire su un elemento dell'array task con l'id che passo alla funzione
        async toggleFavorite(id)  {
            // per recuperare il task con l'id passato uso find() che restituisce il primo item di un array che soddisfa la condizione data:
            const task = this.tasks.find((item) => item.fakeid === id )
            //cambio da false a true e viceversa negando il valore corrente
            task.favorite = !task.favorite;

            //UPDATE DEI DATI (POST)
            try {
                const payLoad = {favorite:task.favorite}
                const data = await updateTaskService(id,payLoad);
                console.log(data)
            }catch (e) {
                console.error(e);
            }
        },

        async addTask(task) {
            this.tasks.push(task);
            try {
                const payLoad = JSON.stringify(task)
                await postTaskService(payLoad)
                
            }catch (e) {
                console.error(e);
            }
        },

        async deleteTask(id) {
                //Uso di nuovo filter() per filtrare gli elementi con id != da quello passato alla funzione
                this.tasks = this.tasks.filter(item => item.fakeid !== id);
                try {
                    await deleteTaskService(id); //se non mi serve la risposta tanto vale scrivere secco così
                    
                }catch (e) {
                    console.error(e);
                } 
        }

    }
  })

