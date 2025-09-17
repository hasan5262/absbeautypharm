import { requireAdmin } from "@/lib/admin-auth"
import { AdminLayout } from "@/components/admin-layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { neon } from "@neondatabase/serverless"
import { Package, ShoppingCart, Users, DollarSign, TrendingUp, TrendingDown } from "lucide-react"

const sql = neon(process.env.DATABASE_URL!)

export default async function AdminDashboard() {
  await requireAdmin()

  const [productCount, orderCount, customerCount, recentOrders] = await Promise.all([
    sql`SELECT COUNT(*) as count FROM products`,
    sql`SELECT COUNT(*) as count FROM orders`,
    sql`SELECT COUNT(DISTINCT user_id) as count FROM cart_items`,
    sql`
      SELECT o.id, o.total, o.status, o.created_at
      FROM orders o
      ORDER BY o.created_at DESC
      LIMIT 5
    `,
  ])

  const stats = [
    {
      title: "Total Products",
      value: productCount[0]?.count || 0,
      icon: Package,
      change: "+12%",
      changeType: "positive" as const,
    },
    {
      title: "Total Orders",
      value: orderCount[0]?.count || 0,
      icon: ShoppingCart,
      change: "+8%",
      changeType: "positive" as const,
    },
    {
      title: "Active Customers",
      value: customerCount[0]?.count || 0,
      icon: Users,
      change: "+23%",
      changeType: "positive" as const,
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: DollarSign,
      change: "-2%",
      changeType: "negative" as const,
    },
  ]

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to your ABS Beauty Pharm admin dashboard</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <stat.icon className="h-4 w-4 text-gray-400" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="flex items-center text-xs">
                  {stat.changeType === "positive" ? (
                    <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
                  )}
                  <span className={stat.changeType === "positive" ? "text-green-600" : "text-red-600"}>
                    {stat.change}
                  </span>
                  <span className="text-gray-500 ml-1">from last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Orders */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders?.map((order: any) => (
                <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <p className="font-medium">Order #{order.id.toString().slice(0, 8)}</p>
                    <p className="text-sm text-gray-600">{new Date(order.created_at).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${order.total}</p>
                    <span
                      className={`inline-flex px-2 py-1 text-xs rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : order.status === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              )) || <p className="text-gray-500 text-center py-8">No orders yet</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}
