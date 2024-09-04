import supabase from "../../utils/supabaseClient";

export async function addUser(email: string, name: string) {
    const { data, error } = await supabase
        .from("users")
        .insert([
            {
                email: email,
                name: name,
            },
        ])
        .single();
    if (error) {
        console.log("Error adding user:", error);
        return false;
    }
    return true;
}