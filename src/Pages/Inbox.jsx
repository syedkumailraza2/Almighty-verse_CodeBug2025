import React from 'react';
import { Video, User } from 'lucide-react';

const Inbox = () => {
  const notifications = [
    {
      id: 1,
      type: 'meeting',
      sender: 'Abhishek Khatale',
      message: 'Sent Meeting Invitation',
      actions: ['accept'],
    },
    {
      id: 2,
      type: 'partner',
      sender: 'Abhishek Khatale',
      message: 'Sent You Partner Request',
      actions: ['accept', 'view'],
    },
  ];

  const renderIcon = (type) => {
    switch (type) {
      case 'meeting':
        return <Video className="w-6 h-6 text-white" />;
      case 'partner':
        return <User className="w-6 h-6 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-[#141414] rounded-lg p-6 mt-4">
          <h1 className="text-3xl font-bold mb-6">Inbox</h1>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between py-3  "
              >
                <div className="flex items-center">
                  <div className="mr-4 w-10 h-10 rounded-full  flex items-center justify-center">
                    {renderIcon(notification.type)}
                  </div>
                  <div>
                    <p className="text-xl">
                      {notification.sender} {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  {notification.actions.includes('accept') && (
                    <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-semibold">
                      Accept
                    </button>
                  )}
                  {notification.actions.includes('view') && (
                    <button className="px-4 py-2 bg-[#88EB63] text-black rounded-full hover:bg-[#87eb63a7] transition-colors font-semibold">
                      View Profile
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;