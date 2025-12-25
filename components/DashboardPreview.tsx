export default function DashboardPreview() {
  return (
    <section className="relative mt-20 max-w-[1320px] mx-auto px-6">
      <div className="relative rounded-3xl bg-white shadow-[0_40px_80px_rgba(0,0,0,0.12)] overflow-hidden">

        <div className="flex h-[560px]">

          {/* SIDEBAR */}
          <aside className="w-[260px] bg-white border-r px-5 py-6">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-300" />
              <div>
                <p className="text-sm text-gray-500">Admin</p>
                <p className="text-sm font-medium">Marcos Agency</p>
              </div>
            </div>

            <nav className="space-y-4 text-sm text-gray-600">
              <p className="font-medium text-gray-400">Home</p>
              <p>Dashboard</p>
              <p>Create Championship</p>
              <p>Assign Competition Director</p>

              <p className="mt-6 font-medium text-gray-400">One Time Actions</p>
              <p className="bg-orange-100 text-orange-600 px-3 py-2 rounded-lg">
                State / District Management
              </p>
              <p>State Unit</p>
              <p>Execution Category</p>
              <p>Execution Code</p>
              <p>Age Category</p>
            </nav>
          </aside>

          {/* MAIN */}
          <main className="flex-1 bg-[#F8FAFC] px-8 py-6 relative">

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Your dashboard</h2>

              <div className="flex gap-3 text-sm">
                <div className="px-4 py-2 bg-white rounded-lg border">🔍 Search</div>
                <div className="px-4 py-2 bg-white rounded-lg border">📅 Select date</div>
                <div className="px-4 py-2 bg-white rounded-lg border">⚙ Filter</div>
                <button className="px-4 py-2 border border-orange-400 text-orange-500 rounded-lg">
                  + Export Data
                </button>
                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg">
                  + Create New Championship
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-8">
              {[
                "Active Championship",
                "No. of Participant",
                "No. of Judges",
                "No. of Competition Director",
              ].map((title, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-yellow-400" />
                  <div>
                    <p className="text-sm text-gray-500">{title}</p>
                    <p className="text-lg font-semibold">0</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative bg-white rounded-xl h-[260px] overflow-hidden">
              <div className="absolute inset-0 backdrop-blur-sm bg-white/70" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <div className="text-5xl mb-4">🔒</div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Access Restricted!
                </h3>
                <p className="text-gray-500 mt-2 max-w-md">
                  You don’t have permission to manage states and districts.
                </p>
                <button className="mt-6 px-6 py-2 border border-red-300 text-red-400 rounded-lg">
                  Send a Request to Super Admin
                </button>
              </div>
            </div>

          </main>
        </div>
      </div>
    </section>
  );
}
