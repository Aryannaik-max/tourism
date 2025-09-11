const CrudService = require('./crudService');
const supabase = require('../config/supabaseClient');

class UserService extends CrudService {
    constructor() {
        super('Users');
        this.supabase = supabase;
    }

    async createUser(userData, profileData) {
        try {
            
            const { data: user, error: userError } = await this.supabase
                .from(this.tableName)
                .insert([userData])
                .select()
                .single();

            if (userError) throw new Error(userError.message);

            const profileDataWithRole = {
                ...profileData,
                role: userData.role 
            };

            const profileResult = await this.createProfileOnRole(user.id, profileDataWithRole);
            
            if (!profileResult) {
                await this.delete(user.id);
                throw new Error("Failed to create profile");
            }

            return { user, profile: profileResult };
        } catch (error) {
            console.log('Error creating user:', error);
            throw error;
        }
    }

    async createProfileOnRole(userId, profileData) {
        try {
            let tableName, data;
            
            console.log('Profile data received:', profileData); 
            
            switch (profileData.role) {
                case 'tourist':
                    tableName = 'tourist_profile';
                    data = {
                        user_id: userId,
                        name: profileData.name,
                        email: profileData.email,
                        phone_number: profileData.phone_number,
                        preferred_destinations: profileData.preferred_destinations || null,
                        interest: profileData.interest,
                        nationality: profileData.nationality,
                        preferred_language: profileData.preferred_language || 'en'
                    };
                    break;
                case 'guide':
                    tableName = 'guide_profile';
                    data = {
                        user_id: userId,
                        ...profileData
                    };
                    break;
                case 'hotel_owner':
                    tableName = 'hotel_owner_profile';
                    data = {
                        user_id: userId,
                        ...profileData
                    };
                    break;
                default:
                    console.log('Invalid role:', profileData.role);
                    return null;
            }

            console.log(`Inserting into ${tableName}:`, data); 

            const { data: profile, error: profileError } = await this.supabase
                .from(tableName)
                .insert([data])
                .select() 
                .single();
            
            if (profileError) {
                console.log('Error creating profile:', profileError);
                return null;
            }
            
            return profile;
                
        } catch (error) {
            console.log('Error creating profile:', error);
            return null;
        }   
    }
}

module.exports = UserService;