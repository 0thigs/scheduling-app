import supabase from "../../utils/supabaseClient";

import { addUser } from "../services/userService";

class AuthUser {

    // Registra um novo usuário
    async handleSignUp(name: string, email: string, password: string) {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: { name }
            }
        });

        if (error) {
            console.error("Erro ao registrar usuário:", error.message);
            throw new Error(error.message);
        }

        // Opcional: Adicionar usuário ao banco de dados adicional, se necessário
        const userData = await addUser(name, email);
        if (!userData) {
            throw new Error("Falha ao adicionar usuário ao banco de dados.");
        }

        return data;
    }

    // Realiza o login do usuário
    async handleLogin(email: string, password: string) {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error("Erro ao fazer login:", error.message);
            throw new Error(error.message);
        }

        if (!data.user) {
            throw new Error("Usuário não encontrado.");
        }

        return data;
    }

    // Verifica se o usuário está autenticado
    async isAuth() {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
            console.error("Erro ao verificar autenticação:", error.message);
            return false;
        }

        if (user) {
            console.log('Usuário está autenticado', user);
            return true;
        } else {
            console.log('Usuário não está autenticado');
            return false;
        }
    }

    // Realiza o logout do usuário
    async handleLogout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Erro ao fazer logout:", error.message);
            throw new Error("Falha ao fazer logout.");
        }
        return true;
    }
}

export default AuthUser;