// src/components/Login.tsx
"use client"
import { signIn } from "next-auth/react";
export default function Login() {
  return <button className="w-96 text-left" onClick={() => signIn("keycloak")}>
    Signin with keycloak
  </button>
}