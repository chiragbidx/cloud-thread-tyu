"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BarChart3, Users, DollarSign, PackageCheck } from "lucide-react";

type DashboardContentProps = {
  greeting: string;
  firstName: string;
  product?: string;
};

export function DashboardContent({
  greeting,
  firstName,
  product = "PayFlow",
}: DashboardContentProps) {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl md:text-4xl font-bold mb-1">
          {greeting}, {firstName} 👋
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Welcome to {product}! Monitor payments, manage invoices, handle subscriptions, and give developers full API access—all in one place.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Payments</CardTitle>
              <div className="text-2xl font-bold">$12,500</div>
              <p className="text-xs text-muted-foreground">Total revenue (demo)</p>
            </div>
            <DollarSign className="w-8 h-8 text-primary" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Active Customers</CardTitle>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">Customers onboarded</p>
            </div>
            <Users className="w-8 h-8 text-primary" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Products</CardTitle>
              <div className="text-2xl font-bold">13</div>
              <p className="text-xs text-muted-foreground">Live products</p>
            </div>
            <PackageCheck className="w-8 h-8 text-primary" />
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-base">Analytics</CardTitle>
              <div className="text-2xl font-bold">Insights</div>
              <p className="text-xs text-muted-foreground">Visualize your growth</p>
            </div>
            <BarChart3 className="w-8 h-8 text-primary" />
          </CardHeader>
        </Card>
      </section>

      <section className="space-y-4">
        <Button asChild>
          <Link href="/dashboard/customers">
            Add first customer
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/dashboard/products">
            Add first product
          </Link>
        </Button>
      </section>
    </div>
  );
}