// app/dashboard/page.jsx
'use client';

import DashboardContent from '@/components/DashboardContent';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <DashboardContent />
      </main>
    </div>
  );
}
