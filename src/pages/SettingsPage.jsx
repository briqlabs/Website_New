import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Settings as SettingsIcon, CreditCard, LogOut, Menu } from "lucide-react";
import { useState } from "react";
import { auth, signOut } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const SidebarMenuItems = () => (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          type="button"
          onClick={() => setActiveTab("profile")}
          aria-selected={activeTab === "profile"}
          className={activeTab === "profile" ? "bg-muted text-primary" : ""}
        >
          <SettingsIcon className="w-4 h-4" />
          <span>Profile Information</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
      <SidebarMenuItem>
        <SidebarMenuButton
          type="button"
          onClick={() => setActiveTab("billing")}
          aria-selected={activeTab === "billing"}
          className={activeTab === "billing" ? "bg-muted text-primary" : ""}
        >
          <CreditCard className="w-4 h-4" />
          <span>Plan & Billing</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Topbar */}
      <div className="flex items-center justify-between px-4 py-4 border-b shadow-sm">
        {/* Mobile menu button */}
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-64 p-0">
                <SidebarContent className="p-4">
                  <SidebarGroupLabel className="text-xl font-bold mb-4">
                    Briqlabs
                  </SidebarGroupLabel>
                  <SidebarGroupContent>{SidebarMenuItems()}</SidebarGroupContent>
                </SidebarContent>
              </DialogContent>
            </Dialog>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Briqlabs
          </h1>
        </div>

        {/* Avatar + Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="cursor-pointer">
              <AvatarImage src={user?.photoURL} alt={user?.displayName} />
              <AvatarFallback>{user?.displayName?.[0]}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Sidebar + Content below Topbar */}
      <SidebarProvider>
        <div className="flex flex-1">
          {/* Sidebar for md+ only */}
          <div className="hidden md:block">
            <Sidebar>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel className="text-xl font-bold pb-2">
                    Settings
                  </SidebarGroupLabel>
                  <SidebarGroupContent>{SidebarMenuItems()}</SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
          </div>

          {/* Main Content */}
          <main className="flex-1 p-4 sm:p-6">
            <div className="mx-auto max-w-4xl">
              {activeTab === "profile" ? (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Profile Information</h2>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Name</label>
                        <p className="text-lg">{user.displayName}</p>
                      </div>
                      <Separator />
                      <div>
                        <label className="text-sm font-medium">Email</label>
                        <p className="text-lg">{user.email}</p>
                      </div>
                      <Separator />
                      <div>
                        <label className="text-sm font-medium">Available Credits</label>
                        <div className="flex items-center gap-2">
                          <p className="text-lg">1,500</p>
                          <Badge>Credits</Badge>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold">Plan & Billing</h2>
                  <Card className="p-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium">Current Plan</label>
                        <p className="text-lg">Professional</p>
                      </div>
                      <Separator />
                      <div>
                        <label className="text-sm font-medium">Billing Period</label>
                        <p className="text-lg">Monthly</p>
                      </div>
                      <Separator />
                      <div>
                        <label className="text-sm font-medium">Next Billing Date</label>
                        <p className="text-lg">April 1, 2025</p>
                      </div>
                      <div className="pt-4">
                        <Button>Upgrade Plan</Button>
                      </div>
                    </div>
                  </Card>
                </div>
              )}
            </div>
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default SettingsPage;
