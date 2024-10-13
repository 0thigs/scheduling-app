import supabase from "../../utils/supabaseClient";

export async function addUser(name: string, email: string) {
    const { data, error } = await supabase
        .from("users")
        .insert([
            {
                name,
                email,
            },
        ])
        .single();
    if (error) {
        console.log("Erro ao adicionar usuário:", error.message);
        return false;
    }
    return true;
}

export async function getUserData(userId: string) {
    const { data, error } = await supabase.auth.getUser(userId);
    if (error) {
        console.log("Erro ao obter dados do usuário:", error.message);
        return null;
    }
    let metadata = data.user?.user_metadata;
    console.log(metadata);
    return metadata;
}