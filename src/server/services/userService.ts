import supabase from "../../utils/supabaseClient";

export async function addUser(name: string, email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        if (error) {
        console.log(email, password)
        console.log("Error adding user:", error);
        return false;
    }
    return true;
}

export async function getUserData(userId: string) {
    const {data} = await supabase.auth.getUser()
    let metadata = data.user?.user_metadata
    console.log(metadata)
    return metadata;
}