const CrudService = require('./crudService');
const supabase = require('../config/supabaseClient');

class UserService extends CrudService {
    constructor() {
        super('Users');
        this.supabase = supabase;
    }

    async createUser(userData, profileData) {
        try {
            // Create user in Users table
            const { data: user, error: userError } = await this.supabase
                .from(this.tableName)
                .insert([userData])
                .select()
                .single();
            
            if (userError) throw new Error(userError.message);

            // Add role to profileData for createProfileOnRole
            const profileDataWithRole = {
                ...profileData,
                role: userData.role // Pass role from userData
            };

            // Create profile based on role
            const profileResult = await this.createProfileOnRole(user.id, profileDataWithRole);
            
            if (!profileResult) {
                // Cleanup user if profile creation fails
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
            
            console.log('Profile data received:', profileData); // Debug log
            
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
                        // Add guide-specific fields here
                        ...profileData
                    };
                    break;
                case 'hotel_owner':
                    tableName = 'hotel_owner_profile';
                    data = {
                        user_id: userId,
                        // Add hotel owner-specific fields here
                        ...profileData
                    };
                    break;
                default:
                    console.log('Invalid role:', profileData.role);
                    return null;
            }

            console.log(`Inserting into ${tableName}:`, data); // Debug log

            const { data: profile, error: profileError } = await this.supabase
                .from(tableName)
                .insert([data])
                .select() // Add .select() to return the inserted data
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