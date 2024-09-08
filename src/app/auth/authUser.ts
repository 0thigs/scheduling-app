import supabase from "../../utils/supabaseClient";
import { addUser } from "../services/userService";

class AuthUser {

    // Registra um novo usuário
    async handleSignUp(email: string, name: string) {
        const userData = await addUser(email, name);
        if (userData) {
            return true;
        } else {
            return false;
        }
    }

    // Envia um magic link para login
    async handleSignInWithMagicLink(email: string) {
        const { data: user, error } = await supabase
            .from('users')
            .select('email')
            .eq('email', email)
            .single();

        if (error || !user) {
            throw new Error('Usuario não encontrado. Verifique se o email está correto ou registre-se.');
        }

        const { error: signInError } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : undefined,
            }
        });

        if (signInError) {
            throw new Error('Erro ao enviar o magic link. Tente novamente mais tarde. ' + signInError.message);
        }

        return 'Magic link enviado com sucesso para ' + email;
    }

    // Verifica se o usuário está autenticado
    async isAuth() {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
            console.error('Erro ao verificar usuário:', error);
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
}

export default AuthUser