export default function Room() {
  return (
    <div className="pt-[76px]">
      <div className="flex mt-8 pl-16 gap-x-6 text-lg">
        <button className="py-2 w-[144px] rounded-lg transition-colors bg-blue-500 text-white hover:bg-blue-700">Join Room</button>
        <button className="py-2 w-[144px] rounded-lg transition-colors border border-blue-500 text-blue-500 hover:bg-gray-200">Create Room</button>
      </div>
    </div>
  );
};