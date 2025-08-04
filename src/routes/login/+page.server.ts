import { fail, redirect } from '@sveltejs/kit'
import { type Provider } from '@supabase/supabase-js'
import { getFormData } from '$lib/server/event'

export const load = async ({ locals: { getSession } }) => {
    const session = await getSession()

    /* User is already logged in. */
    if (session) redirect(303, '/home')
}

export const actions = {
    oauth: async ({ url, locals: { supabase } }) => {
        const { provider } = await getFormData<Provider>('provider')

        if (!provider)
            return fail(400, { error: 'No provider found.' })

        /**
         * Sign-in will not happen yet, because we're on the server-side, 
         * but we need the returned url.
         */
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: {
                redirectTo: `${url.origin}/auth/callback?next=/home`
            }
        })

        if (error)
            return fail(error.status ?? 400, { error: error.message })

        /* Now authorize sign-in on browser. */
        if (data.url) redirect(303, data.url)
    },
    signout: async ({ locals: { supabase } }) => {
        await supabase.auth.signOut()
        redirect(303, '/')
    }
}
