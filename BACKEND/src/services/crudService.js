const supabase = require('../config/supabaseClient');

class CrudService {
    constructor(tableName) {
        this.tableName = tableName;
    }

    async create(data) {
        try {
            const { data: createdData, error } = await supabase.from(this.tableName).insert([data]).select().single();
            if( error ) {
                console.log('Error creating data:', error);
                return null;;
            }
            return createdData;
        } catch (error) {
            console.log('Error creating data:', error);
            return null;
        }
    }

    async read(id) {
        try {
            const { data, error } = await supabase.from(this.tableName).select('*').eq('id', id).single();
            if( error ) {
                console.log('Error reading data:', error);
                return null;
            }
            return data;
        } catch (error) {
            console.log('Error reading data:', error);
            return null;
        }
    }

    async update(id, data) {
        try {
            const { data: updatedData, error } = await supabase.from(this.tableName).update(data).eq('id', id);
            if( error ) {
                console.log('Error updating data:', error);
                return null;
            }
            return updatedData;
        } catch (error) {
            console.log('Error updating data:', error);
            return null;
        }
    }

    async delete(id) {
        try {
            const { data, error } = await supabase.from(this.tableName).delete().eq('id', id);
            if( error ) {
                console.log('Error deleting data:', error);
                return null;
            }
            return data;
        } catch (error) {
            console.log('Error deleting data:', error);
            return null;
        }
    }

}

module.exports = CrudService;