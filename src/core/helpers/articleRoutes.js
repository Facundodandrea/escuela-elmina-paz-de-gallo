// db.js

import supabase from "../../supabase/Client";

// Función para obtener todos los artículos
export async function getArticles() {
    try {
        const { data, error } = await supabase.from('articles').select('*');
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al obtener los artículos:', error.message);
        throw error;
    }
}

// Función para obtener un artículo por su ID
export async function getArticleById(id) {
    try {
        const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al obtener el artículo:', error.message);
        throw error;
    }
}

// Función para crear un nuevo artículo
export async function createArticle(articleData) {
    try {
        const { data, error } = await supabase.from('articles').insert([articleData]);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al crear el artículo:', error.message);
        throw error;
    }
}

// Función para actualizar un artículo existente
export async function updateArticle(id, articleData) {
    try {
        const { data, error } = await supabase.from('articles').update(articleData).eq('id', id);
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error al actualizar el artículo:', error.message);
        throw error;
    }
}

// Función para eliminar un artículo por su ID
export async function deleteArticle(id) {
    try {
        const { error } = await supabase.from('articles').delete().eq('id', id);
        if (error) {
            throw error;
        }
    } catch (error) {
        console.error('Error al eliminar el artículo:', error.message);
        throw error;
    }
}
