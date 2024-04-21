// db.js

import supabase from "../../supabase/Client";

// Función para obtener todos los proyectos
export async function getprojects() {
    try {
        const { data, error } = await supabase.from('projects').select('*');
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al obtener los proyectos:', error.message);
        throw error;
    }
}

// Función para obtener un proyecto por su ID
export async function getProjectById(id) {
    try {
        const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al obtener el proyecto:', error.message);
        throw error;
    }
}

// Función para crear un nuevo proyecto
export async function createProject(projectData) {
    try {
        const { data, error } = await supabase.from('projects').insert([projectData]);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al crear el proyecto:', error.message);
        throw error;
    }
}

// Función para actualizar un proyecto existente
export async function updateProject(id, projectData) {
    try {
        const { data, error } = await supabase.from('projects').update(projectData).eq('id', id);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al actualizar el proyecto:', error.message);
        throw error;
    }
}

// Función para eliminar un proyecto por su ID
export async function deleteArticle(id) {
    try {
        const { error } = await supabase.from('projects').delete().eq('id', id);
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Error al eliminar el proyecto:', error.message);
        throw error;
    }
}
