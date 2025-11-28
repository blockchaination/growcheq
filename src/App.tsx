import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Analytics } from "@/components/Analytics";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import SetupAccount from "./pages/SetupAccount";
import AdminLayout from "./pages/admin/AdminLayout";
import Overview from "./pages/admin/Overview";
import Bookings from "./pages/admin/Bookings";
import Chats from "./pages/admin/Chats";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Analytics />
            <CookieConsent />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/industries" element={<Industries />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/setup-account" element={<SetupAccount />} />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/admin"
                element={
                  <ProtectedRoute requireAdmin>
                    <AdminLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Overview />} />
                <Route path="bookings" element={<Bookings />} />
                <Route path="chats" element={<Chats />} />
              </Route>

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
