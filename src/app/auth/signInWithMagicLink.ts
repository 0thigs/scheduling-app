import supabase from "../../utils/supabaseClient"

export default async function signInWithMagicLink(email: any) {
  const { data: user, error } = await supabase
    .from('users')
    .select('email')
    .eq('email', email)
    .single();

  if (error || !user) {
    console.error('Usuário não encontrado ou erro ao buscar usuário:', error);
    throw new Error('Usuário não encontrado. Verifique se o email está correto ou registre-se.');
  }

  const { error: signInError } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: typeof window !== 'undefined' ? `${window.location.origin}/dashboard` : undefined,
    }
  });

  if (signInError) {
    console.error('Erro ao enviar o magic link:', signInError.message);
    throw new Error('Erro ao enviar o magic link. Tente novamente mais tarde.');
  }

  return 'Magic link enviado com sucesso para ' + email;
}
