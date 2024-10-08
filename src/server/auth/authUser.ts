import supabase from "../../utils/supabaseClient";
import { addUser } from "../services/userService";

class AuthUser {

    // Registra um novo usuário
    async handleSignUp(name: string, email: string, password: string) {
        const userData = await addUser(name, email, password);
        if (userData) {
            return true;
        } else {
            return false;
        }
    }

    async handleLogin(email: string, password: string) {
        
    }

    // Verifica se o usuário está autenticado
    async isAuth() {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (user) {
            console.log('Usuário está autenticado', user);
            return true;
        } else {
            console.log('Usuário não está autenticado');
            return false;
        }
    }
}

export default AuthUser