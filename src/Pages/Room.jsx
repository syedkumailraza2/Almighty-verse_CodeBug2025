import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const meetingContainer = useRef(null);

  useEffect(() => {
    const appID = 66932480;
    const serverSecret = "5aa2337cc4205713004a26aec6de5ae1";

    // Generate or get a unique user ID for this tab
    const userId = sessionStorage.getItem("userId") || Date.now().toString();
    sessionStorage.setItem("userId", userId);

    const userName = "Raza";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      userId,
      userName
    );

    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: meetingContainer.current,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      showScreenSharingButton: true,
      showPreJoinView: false, // Disables the waiting room
    });
  }, [roomId]);

  const handleInvite = () => {
    const inviteLink = `${window.location.origin}/room/${roomId}`;
    navigator.clipboard.writeText(inviteLink);
    alert("Invite link copied to clipboard!");
  };

  return (
    <div className="bg-[#1c1f2e] w-screen h-screen flex justify-center items-center relative overflow-hidden">
      {/* Video Container */}
      <div 
        ref={meetingContainer} 
        className="w-full h-[90vh] mt-10 shadow-lg overflow-hidden"
      />

      {/* Invite Button */}
      <button
        onClick={handleInvite}
        className="absolute top-4 left-[10%] -translate-x-1/2 px-4 py-2 bg-green-600 text-black text-sm font-bold rounded-full shadow-md hover:bg-green-700 transition duration-200"
      >
        Invite Partner in room
      </button>
    </div>
  );
};

export default Room;
