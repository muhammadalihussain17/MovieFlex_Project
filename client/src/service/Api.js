// eslint-disable-next-line 
import axios, { Axios } from 'axios';
import fileDownload from 'js-file-download';

const url = 'http://localhost:9600'

export const postApi = async (data) => {
    try
    {
     return await axios.post(`${url}/add`,data);
    }
    catch(error)
    {
        console.log('Error While Calling Post Api', error);
    }
}

export const getAllDataApi = async () => {
    try
    {
        return await axios.get(`${url}/view`);
    }
    catch(error)
    {
        console.log('Error While Calling Get Api', error);
    }
}



export const getSingleDataApi = async (id) => {
    try
    {
        return await axios.get(`${url}/${id}`);
    }
    catch(error)
    {
        console.log('Error While Calling Get Api', error);
    }
}


export const updatePostApi = async (user,id) => {
    try
    {
     return await axios.post(`${url}/${id}`,user);
    }
    catch(error)
    {
        console.log('Error While Calling Post Api', error);
    }
}

export const deleteUserDetails = async(id) => {
    try
    {
     return await axios.delete(`${url}/${id}`)
    }
    catch(error)
    {
        console.log('Error While Calling Post Api', error);
    }
    
}


