import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, email, password) => {
    console.log("estamos en create user front");
    
    try {
        console.log("entro al try");
        console.log("datos: ", name, email, password);
        
        const response = await axios.post(`${BASE_URL}/auth/register`, {
            name,
            email,
            password
        });
        console.log("hice una post con: ", response);
        
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error);
        
        // Mostrar errores específicos de validación del backend
        if (error.response?.data?.errors) {
            const errors = error.response.data.errors;
            
            // Si errors es un objeto (mapped), convertirlo a array de mensajes
            if (typeof errors === 'object' && !Array.isArray(errors)) {
                const errorMessages = Object.entries(errors)
                    .map(([field, error]) => `${field}: ${error.msg}`)
                    .join('\n');
                alert(`Validation errors:\n${errorMessages}`);
            } 
            // Si errors es un array
            else if (Array.isArray(errors)) {
                const errorMessages = errors.map(err => err.msg).join('\n');
                alert(`Validation errors:\n${errorMessages}`);
            } else {
                alert("Error creating user. Please try again");
            }
        } else if (error.response?.data?.error) {
            alert(error.response.data.error);
        } else {
            alert("Error creating user. Please try again");
        }
        
        throw error;
    }
}; 

export const loginUser = async (email, password) => {
    try {
        const { data } = await axios.post(`${BASE_URL}/auth/login`, {
            email,
            password
        });
        return data;
    } catch (error) {
        console.error("Error creating user:", error);
        return alert("Error creating user. Please try again", error.response.data.errors[0].msg);
        //throw error;
    }
}; 