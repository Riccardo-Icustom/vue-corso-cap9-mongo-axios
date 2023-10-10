import {http} from '../http';
/*
export const getTaskService = async () => {
    const {data} = await http.get(`/tasks`);
    return data;
}

export const getSingleTaskService = async (id) => {
    const {data} = await http.get(`/tasks/${id}`);
    return data;
}

export const postTaskService = async (payLoad) => {
    const {data} = await http.post(`/tasks/`,payLoad);
    return data;
}

export const patchTaskService = async (id,payLoad) => {
    const {data}  = await http.patch(`/tasks/${id}`,payLoad);

    return data;
}

export const deleteTaskService = async (id) => {
    const {data}  = await http.delete(`/tasks/${id}`);
    return data;
}
*/

export const getTaskService = async () => {
    const {data} = await http.get(`/tasks`);
    return data;
}

export const getSingleTaskService = async (id) => {
    const {data} = await http.get(`/tasks/${id}`);
    return data;
}

export const updateTaskService = async (id,payLoad) => {
    const {data}  = await http.post(`/update/${id}`,payLoad);
    return data;
}

export const postTaskService = async (payLoad) => {
    const {data} = await http.post(`/add/addsome/`,payLoad);
    return data;
}

export const deleteTaskService = async (id) => {
    const {data}  = await http.get(`/delete/${id}`);
    return data;
}