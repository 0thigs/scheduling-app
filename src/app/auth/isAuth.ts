import supabase from "../../utils/supabaseClient";

export default async function isAuth() {
    const isAuth = await supabase.auth.getSession()
    if (isAuth.data.session?.access_token) {
        console.log('Logged in', isAuth.data.session)
        return true
    } else {
        return false
    }
}