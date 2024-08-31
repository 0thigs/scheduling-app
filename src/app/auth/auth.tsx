import supabase from "../../utils/supabaseClient"

export default async function signInWithMagicLink(email: any) {
    const { error } = await supabase.auth.signInWithOtp({ email })
    if (error) {
      console.error('Error sending magic link:', error.message)
    } else {
      console.log('Magic link sent successfully')
    }
  }
  