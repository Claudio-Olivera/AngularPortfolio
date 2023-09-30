import { Injectable } from '@angular/core';
import {AuthChangeEvent,AuthSession,createClient,Session,SupabaseClient,User} from '@supabase/supabase-js'
import { environment } from 'src/environments/environment'

export interface Profile {
  id?: string
  username: string
  website: string
  avatar_url: string
}


@Injectable({
  providedIn: 'root'
})

export class SupabaseService {
  private supabase: SupabaseClient
  _session: AuthSession | null = null
  constructor() { 
    this.supabase = createClient(environment.supabase.url, environment.supabase.publickey)
  }

    async getSession() {
      const { data } = await this.supabase.auth.getSession();
      return data?.session;
    }

    profile(user: User) {
      return this.supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', user.id)
        .single()
    }

    authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
      return this.supabase.auth.onAuthStateChange(callback)
    }
    
      async signIn(_email: string, _password: string) {
        const { data } = await this.supabase.auth.signInWithPassword({
          email: _email,
          password: _password
        });
        return data?.session?.access_token;
      }
      
     
    async signOut() {
      return this.supabase.auth.signOut()
    }

}

