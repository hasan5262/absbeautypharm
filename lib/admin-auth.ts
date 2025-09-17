export async function requireAdmin() {
  // Check if running on client side
  if (typeof window !== "undefined") {
    const adminUser = localStorage.getItem("adminUser")
    if (!adminUser) {
      // Redirect to admin login if not authenticated
      window.location.href = "/admin/login"
      throw new Error("Admin authentication required")
    }

    const parsedUser = JSON.parse(adminUser)
    return {
      user: { id: parsedUser.id, email: parsedUser.email },
      adminUser: { id: parsedUser.id, role: parsedUser.role },
    }
  }

  // Server-side: return mock data for now (in production, implement proper server-side auth)
  const mockUser = {
    id: "admin-user",
    email: "hasanmerhi8117@outlook.com",
  }

  const mockAdminUser = {
    id: "admin-user",
    role: "admin",
  }

  return { user: mockUser, adminUser: mockAdminUser }
}

export function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("adminUser")
    window.location.href = "/admin/login"
  }
}
