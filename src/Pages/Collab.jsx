import { useNavigate } from "react-router-dom";
const collab = ()=>{
    const navigate = useNavigate()
    function generateRoomId(length = 8) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let roomId = '';
        for (let i = 0; i < length; i++) {
          roomId += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return roomId;
    }

    function createMeetingRoom() {
        const roomId = generateRoomId();
        navigate(`/room/${roomId}`);
    }
    return (
        <div className="w-[759px] h-[319px] relative bg-white rounded-[15px]  overflow-hidden">
  <div className="w-[625px] h-[120px] left-[58px] top-[52px] absolute">
    <div className="left-0 top-0 absolute text-black text-[32px] font-medium font-['Poppins']">Want to create a collaborative space ?</div>
    <div className="w-[604px] left-0 top-[48px] absolute text-center text-[#777777] text-2xl font-medium font-['Poppins']">Create a room & Share Credentials with your partner to work together </div>
  </div>
  <div className="w-[368px] h-[57px] left-[179px] top-[210px] absolute">
    <div className="w-[368px] h-[57px] left-0 top-0 absolute bg-black rounded-[45px]" />
    <button className="left-[104px] top-[10px] absolute text-center text-white text-2xl font-medium font-['Poppins']" onClick={createMeetingRoom}>Create Room</button>
  </div>
</div>
    )
}

export default collab