import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageSquare, TrendingUp, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

export default function Overview() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    pendingBookings: 0,
    totalConversations: 0,
    hotLeads: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const [bookingsRes, conversationsRes, hotLeadsRes] = await Promise.all([
        supabase.from('demo_bookings').select('id, status', { count: 'exact' }),
        supabase.from('chat_conversations').select('id', { count: 'exact' }),
        supabase.from('chat_conversations').select('id', { count: 'exact' }).eq('lead_quality', 'hot'),
      ]);

      const pendingCount = bookingsRes.data?.filter(b => b.status === 'pending').length || 0;

      setStats({
        totalBookings: bookingsRes.count || 0,
        pendingBookings: pendingCount,
        totalConversations: conversationsRes.count || 0,
        hotLeads: hotLeadsRes.count || 0,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    }
  };

  const statCards = [
    {
      title: "Total Bookings",
      value: stats.totalBookings,
      description: `${stats.pendingBookings} pending`,
      icon: Calendar,
      color: "text-primary",
    },
    {
      title: "Conversations",
      value: stats.totalConversations,
      description: "Total chat sessions",
      icon: MessageSquare,
      color: "text-accent",
    },
    {
      title: "Hot Leads",
      value: stats.hotLeads,
      description: "High priority prospects",
      icon: TrendingUp,
      color: "text-destructive",
    },
    {
      title: "Conversion Rate",
      value: stats.totalConversations > 0 
        ? `${Math.round((stats.hotLeads / stats.totalConversations) * 100)}%`
        : "0%",
      description: "Chat to hot lead",
      icon: Users,
      color: "text-brand-light",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">
          Welcome to your GrowCheq admin portal
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to manage your leads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div>
              <h3 className="font-semibold">View Pending Bookings</h3>
              <p className="text-sm text-muted-foreground">
                {stats.pendingBookings} bookings awaiting confirmation
              </p>
            </div>
            <Calendar className="h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
            <div>
              <h3 className="font-semibold">Review Hot Leads</h3>
              <p className="text-sm text-muted-foreground">
                {stats.hotLeads} high-priority conversations
              </p>
            </div>
            <TrendingUp className="h-5 w-5 text-muted-foreground" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
