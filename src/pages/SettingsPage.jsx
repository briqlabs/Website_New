import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Settings as SettingsIcon, CreditCard } from "lucide-react";
import { useState } from "react";

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("profile")}
                    data-active={activeTab === "profile"}
                  >
                    <SettingsIcon />
                    <span>Profile Information</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("billing")}
                    data-active={activeTab === "billing"}
                  >
                    <CreditCard />
                    <span>Plan & Billing</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      <main className="flex-1 p-6">
        <div className="mx-auto max-w-4xl">
          {activeTab === "profile" ? (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Profile Information</h2>
              <Card className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <p className="text-lg">John Doe</p>
                  </div>
                  <Separator />
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-lg">john.doe@example.com</p>
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
  );
};

export default SettingsPage;
