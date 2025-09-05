const CrudService = require('./crudService');

class UserService extends CrudService {
    constructor() {
        super('Users');
    }

    async createUser (userData, profileData) {
        try {
            const { data: user, error: userError } = await this.supabase
            .from(this.tableName)
            .insert([userData])
            .single();
            if (userError) {
                console.log('Error creating user:', userError);
                return null;
            }

            const profileResult = await this.createProfileOnRole( user.id, profileData );
            if ( !profileResult ) {
                await this.delete(user.id);
                return null;
            }
            
            return { user, profile: profileResult };
        } catch (error) {
            console.log('Error creating user:', error);
            return null;
        }

    }

    async createProfileOnRole( userId, profileData ) {
        try {
            let tableName, data;
            switch ( profileData.role ) {
                case 'tourist':
                    tableName = 'tourist_profile';
                    data = { user_id: userId, ...profileData };
                    break;
                case 'guide':
                    tableName = 'guide_profile';
                    data = { user_id: userId, ...profileData };
                    break;
                case 'hotel_owner':
                    tableName = 'hotel_owner_profile';
                    data = { user_id: userId, ...profileData };
                    break;
                default:
                    console.log('Invalid role:', profileData.role);
                    return null;
            }

            const { data: profile, error: profileError } = await this.supabase
                .from(tableName)
                .insert([data])
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