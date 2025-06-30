'use client'

export function logout() {
  // clear the cookie
  document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  window.location.href = "/login"
}