import { addUser } from "../services/userService";

export async function handleSignUp(email: string, name: string) {
    try {
      const userData = await addUser(email, name);
      console.log('Usuário registrado com sucesso:', userData);
      return true
    } catch (error: any) {
      console.error('Erro ao registrar usuário:', error.message);
      return false
    }
  }