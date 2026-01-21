import React from "react";

const NoticeBoard: React.FC = () => {
  const notices = [
    {
      date: "Oct 24, 2024",
      text: "Admission Open for B.Tech CSE & IT Lateral Entry Batch 2024-25.",
    },
    {
      date: "Oct 22, 2024",
      text: "Final Date for Scholarship Application: Oct 30, 2024.",
    },
    {
      date: "Oct 20, 2024",
      text: "End Semester Examination Schedule Released. Check Academic Portal.",
    },
    {
      date: "Oct 18, 2024",
      text: "International Conference on AI & ML to be held in GTB4CEC Auditorium.",
    },
    {
      date: "Oct 15, 2024",
      text: "Placement Drive: Microsoft & Amazon visiting campus next week.",
    },
    {
      date: "Oct 12, 2024",
      text: "New IoT Lab Inauguration by Director on Monday.",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-secondary h-[450px] flex flex-col">
      <div className="bg-gray-100 px-6 py-4 border-b flex justify-between items-center">
        <h3 className="font-bold text-gray-800 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          Latest Notifications
        </h3>
        <span className="text-xs font-bold px-2 py-1 bg-primary text-white rounded">
          LIVE
        </span>
      </div>

      <div className="flex-grow overflow-hidden p-4">
        <div className="animate-notice-slide space-y-4">
          {[...notices, ...notices].map((notice, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 text-center">
                  <div className="bg-secondary/20 text-primary font-bold text-xs p-1 rounded">
                    {notice.date.split(",")[0]}
                  </div>
                </div>
                <div>
                  <p className="text-gray-800 font-medium group-hover:text-primary transition-colors">
                    {notice.text}
                  </p>
                  <div className="mt-2 flex gap-2">
                    <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-0.5 rounded uppercase font-bold tracking-tighter">
                      Circular
                    </span>
                    <span className="text-[10px] text-primary underline font-medium">
                      Download PDF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 border-t bg-gray-50 text-center">
        <button className="text-primary font-bold text-sm hover:underline">
          View All Archive Notices →
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
