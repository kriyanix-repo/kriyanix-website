"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { supabase } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

type AuthContextType = {
    user: User | null
    loading: boolean
    signIn: (email: string, password: string) => Promise<any>
    signUp: (email: string, password: string) => Promise<any>
    signOut: () => Promise<any>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check active session
        const getSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession()
            setUser(session?.user ?? null)
            setLoading(false)
        }

        getSession()

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [])

    const signIn = async (email: string, password: string) => {
        return supabase.auth.signInWithPassword({ email, password })
    }

    const signUp = async (email: string, password: string) => {
        return supabase.auth.signUp({ email, password })
    }

    const signOut = async () => {
        return supabase.auth.signOut()
    }

    return <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
